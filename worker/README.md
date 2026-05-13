# Contact-form Worker

Cloudflare Worker that receives POSTs from the `/contact/` form on
imagilux.org, verifies the Turnstile token, and forwards the
submission as email via Resend.

## One-time setup

1. **Cloudflare account.** Pick a worker route (e.g. `forms.imagilux.org/*`) or
   use the default `*.workers.dev` subdomain.
2. **Turnstile site.** In the Cloudflare dashboard create a Turnstile site for
   `imagilux.org` (and `localhost` for dev). Note the **site key** (public,
   goes in `hugo.toml`) and **secret key** (set as a Worker secret below).
3. **Resend account.** Verify the sending domain (`imagilux.org` or a
   subdomain like `mail.imagilux.org`) by adding the DNS records Resend
   provides. Pick a sender address consistent with `FROM_EMAIL` in
   `wrangler.toml`.

## Install + deploy

    npm install                                  # installs wrangler
    npx wrangler login                           # OAuth into Cloudflare
    npx wrangler secret put TURNSTILE_SECRET     # paste Turnstile secret
    npx wrangler secret put RESEND_API_KEY       # paste Resend API key (re_...)
    npx wrangler deploy

`wrangler deploy` prints the live URL. Set it as `formEndpoint` in
the site root `hugo.toml`.

## Local dev

    npx wrangler dev

The dev server runs at `http://127.0.0.1:8787`. Point `formEndpoint` there
temporarily if you want end-to-end tests from a local `hugo server`.
Create `.dev.vars` (gitignored) with `TURNSTILE_SECRET=...` and
`RESEND_API_KEY=...` for local secret access.

## Inputs

The form POSTs `application/x-www-form-urlencoded` with these names:
`First name`, `Last name`, `Work email`, `Fleet size`, `Primary interest`,
`Message`, `cf-turnstile-response`, `_gotcha` (honeypot — must be blank).

## Outputs

JSON `{ ok: true }` on success, `{ ok: false, error: "<code>" }` otherwise.
Error codes: `method_not_allowed`, `invalid_body`, `turnstile_missing`,
`turnstile_failed`, `missing_field`, `invalid_email`, `send_failed`.
