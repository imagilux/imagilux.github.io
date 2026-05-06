---
title: "See Light Out in action."
eyebrow: "Request a demo"
eyebrowTone: "amber"
lede: "Tell us about your infrastructure and we'll tailor the walkthrough to your fleet. An infrastructure specialist will reach out within one business day."
description: "Get in touch with Imagilux — request a product demo, ask sales a question, or report a security issue."
---

<!-- TODO: wire form action. Static sites can't process submissions on their
     own. Pick one:
       - Formspree / Basin / Web3Forms (no infra)
       - Netlify Forms (if we ever migrate off GitHub Pages)
       - mailto: as a stopgap (action="mailto:hello@imagilux.org")
       - A small Cloudflare Worker / Lambda hitting a CRM
     Until then the submit button does nothing useful. -->

<form class="imx-contact-form" action="#" method="post" novalidate>
  <div class="imx-field">
    <label for="cf-first">First name</label>
    <input type="text" id="cf-first" name="first_name" autocomplete="given-name" required>
  </div>
  <div class="imx-field">
    <label for="cf-last">Last name</label>
    <input type="text" id="cf-last" name="last_name" autocomplete="family-name" required>
  </div>
  <div class="imx-field imx-field--full">
    <label for="cf-email">Work email</label>
    <input type="email" id="cf-email" name="email" autocomplete="email" required>
  </div>
  <div class="imx-field">
    <label for="cf-fleet">Fleet size</label>
    <select id="cf-fleet" name="fleet_size">
      <option value="under-100">Under 100 nodes</option>
      <option value="100-1k">100–1,000 nodes</option>
      <option value="1k-10k" selected>1,000–10,000 nodes</option>
      <option value="10k-plus">10,000+ nodes</option>
    </select>
  </div>
  <div class="imx-field">
    <label for="cf-interest">Primary interest</label>
    <select id="cf-interest" name="primary_interest">
      <option value="umf">UMF</option>
      <option value="boreal" selected>BOREAL</option>
      <option value="both">Both</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div class="imx-field imx-field--full">
    <label for="cf-message">What would you like to deploy?</label>
    <textarea id="cf-message" name="message" rows="4" placeholder="Tell us a little about your fleet and what you're hoping to solve."></textarea>
  </div>
  <div class="imx-field imx-field--full">
    <button class="imx-btn imx-btn--primary" type="submit">Submit request <span class="imx-arr">→</span></button>
  </div>
</form>

## Other ways to reach us

- **Sales / partnerships** — [FILL IN: sales@<domain>]
- **Press & media** — [FILL IN: press@<domain>]
- **Security disclosures** — see the [Security](/security/) page for our coordinated-disclosure policy.
- **General inquiries** — [FILL IN: hello@<domain>]
