---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .Name }}"
description: "TODO: one-sentence description used as the meta description and as a fallback for the hero lede."

# PDP shape — see themes/imagilux/layouts/partials/pdp/page.html for contract.
accent: "amber"   # Platform pages default to amber; marine is reserved for BOREAL.

hero:
  eyebrow: "TODO: small uppercase tag above the h1 (e.g. 'Why Imagilux', 'Architecture')"
  lede: "TODO: paragraph under the h1."
  # Convention: platform pages render no hero CTAs. Add ctaPrimary /
  # ctaSecondary blocks here only if a specific page needs them; the
  # PDP template will skip the CTA row when both are absent.

features:
  heading: "TODO: features-section h2"
  items:
    - icon: "shield-check"    # see themes/imagilux/layouts/partials/icons/
      title: "TODO"
      body:  "TODO"
    - icon: "id-card"
      title: "TODO"
      body:  "TODO"
    - icon: "stack"
      title: "TODO"
      body:  "TODO"
    - icon: "chain"
      title: "TODO"
      body:  "TODO"
    - icon: "doc-lines"
      title: "TODO"
      body:  "TODO"
    - icon: "check-circle"
      title: "TODO"
      body:  "TODO"
---
