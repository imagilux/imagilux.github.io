// Imagilux contact form Worker.
//
// Flow: form POST → verify Turnstile → check honeypot → POST email via Resend
// → JSON { ok: true } or { ok: false, error: "<code>" }.
//
// Secrets (wrangler secret put):
//   TURNSTILE_SECRET   Turnstile widget's secret key (not the site key)
//   RESEND_API_KEY     Resend API key (re_...)
//
// Vars (wrangler.toml):
//   TO_EMAIL           Inbox that receives submissions
//   FROM_EMAIL         Sender (must be a verified Resend domain)
//   ALLOWED_ORIGIN     The site origin that may POST here (CORS)

const FIELD_ORDER = [
  "First name",
  "Last name",
  "Work email",
  "Fleet size",
  "Primary interest",
  "Message",
];
const REQUIRED = ["First name", "Last name", "Work email"];

export default {
  async fetch(req, env) {
    const cors = corsHeaders(env);

    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (req.method !== "POST") {
      return json({ ok: false, error: "method_not_allowed" }, 405, cors);
    }

    let data;
    try {
      const ct = req.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        data = await req.json();
      } else {
        data = Object.fromEntries(await req.formData());
      }
    } catch {
      return json({ ok: false, error: "invalid_body" }, 400, cors);
    }

    // Honeypot — bots fill every field; humans never see this one.
    // Silent success so we don't tip the bot off about the trap.
    if (data._gotcha) {
      return json({ ok: true }, 200, cors);
    }

    const token = data["cf-turnstile-response"];
    if (!token) {
      return json({ ok: false, error: "turnstile_missing" }, 400, cors);
    }
    const tsOk = await verifyTurnstile(token, env, req);
    if (!tsOk) {
      return json({ ok: false, error: "turnstile_failed" }, 400, cors);
    }

    for (const f of REQUIRED) {
      if (!String(data[f] || "").trim()) {
        return json({ ok: false, error: "missing_field" }, 400, cors);
      }
    }

    const email = String(data["Work email"]).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "invalid_email" }, 400, cors);
    }

    const sent = await sendEmail(data, env);
    if (!sent) {
      return json({ ok: false, error: "send_failed" }, 502, cors);
    }

    return json({ ok: true }, 200, cors);
  },
};

async function verifyTurnstile(token, env, req) {
  const body = new URLSearchParams({
    secret: env.TURNSTILE_SECRET,
    response: token,
    remoteip: req.headers.get("cf-connecting-ip") || "",
  });
  const r = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  if (!r.ok) return false;
  const j = await r.json();
  return j.success === true;
}

async function sendEmail(data, env) {
  const fromName = `${data["First name"]} ${data["Last name"]}`.trim();
  const replyTo = String(data["Work email"]).trim();
  const subject = `Demo request from ${fromName}`;

  const lines = [];
  for (const k of FIELD_ORDER) {
    if (data[k]) lines.push(`${k}: ${data[k]}`);
  }
  const text = lines.join("\n");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [env.TO_EMAIL],
      reply_to: replyTo,
      subject,
      text,
    }),
  });
  return r.ok;
}

function corsHeaders(env) {
  return {
    "access-control-allow-origin": env.ALLOWED_ORIGIN || "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    vary: "origin",
  };
}

function json(payload, status, cors) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json", ...cors },
  });
}
