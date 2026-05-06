---
title: "See Light Out in action."
eyebrow: "Request a demo"
eyebrowTone: "amber"
lede: "Tell us about your infrastructure and we'll tailor the walkthrough to your fleet. An infrastructure specialist will reach out within one business day."
description: "Get in touch with Imagilux — request a product demo, ask sales a question, or report a security issue."
---

<!-- Stopgap: form posts via mailto so the page doesn't black-hole submissions
     while we're still on static GitHub Pages. Trade-offs of mailto:
       - opens the user's email client; no in-page success state
       - field values are URL-encoded into the mail body; some clients drop
         long bodies
       - no spam mitigation, no audit trail, no CRM hook
     Replace with a real backend when ready — Formspree / Basin / a small
     Cloudflare Worker hitting a CRM all work without leaving GitHub Pages. -->

<form class="imx-contact-form"
      action="mailto:contact@imagilux.org?subject=Demo%20request%20from%20imagilux.org"
      method="post"
      enctype="text/plain"
      novalidate>
  <div class="imx-field">
    <label for="cf-first">First name</label>
    <input type="text" id="cf-first" name="First name" autocomplete="given-name" required>
  </div>
  <div class="imx-field">
    <label for="cf-last">Last name</label>
    <input type="text" id="cf-last" name="Last name" autocomplete="family-name" required>
  </div>
  <div class="imx-field imx-field--full">
    <label for="cf-email">Work email</label>
    <input type="email" id="cf-email" name="Work email" autocomplete="email" required>
  </div>
  <div class="imx-field">
    <label for="cf-fleet">Fleet size</label>
    <select id="cf-fleet" name="Fleet size">
      <option value="Under 100 nodes">Under 100 nodes</option>
      <option value="100-1,000 nodes">100–1,000 nodes</option>
      <option value="1,000-10,000 nodes" selected>1,000–10,000 nodes</option>
      <option value="10,000+ nodes">10,000+ nodes</option>
    </select>
  </div>
  <div class="imx-field">
    <label for="cf-interest">Primary interest</label>
    <select id="cf-interest" name="Primary interest">
      <option value="UMF">UMF</option>
      <option value="BOREAL" selected>BOREAL</option>
      <option value="Both">Both</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div class="imx-field imx-field--full">
    <label for="cf-message">What would you like to deploy?</label>
    <textarea id="cf-message" name="Message" rows="4" placeholder="Tell us a little about your fleet and what you're hoping to solve."></textarea>
  </div>
  <div class="imx-field imx-field--full">
    <button class="imx-btn imx-btn--primary" type="submit">Submit request <span class="imx-arr">→</span></button>
  </div>
</form>

## Other ways to reach us

- **Sales / partnerships** — <sales@imagilux.org>
- **Press & media** — <press@imagilux.org>
- **Security disclosures** — see the [Security](/security/) page for our coordinated-disclosure policy.
- **General inquiries** — <contact@imagilux.org>
