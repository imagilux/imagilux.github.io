---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .Name }}"
description: "TODO: one-sentence description used as the meta description and as a fallback for the hero lede."

# PDP shape — see themes/imagilux/layouts/partials/pdp/page.html for contract.
accent: "marine"  # "amber" or "marine"

hero:
  eyebrow: "TODO: small uppercase tag above the h1 (e.g. 'Why Imagilux', 'Architecture')"
  lede: "TODO: paragraph under the h1."
  ctaPrimary:
    label: "Talk to us"
    href: "/contact/"
  ctaSecondary:
    label: "Read the spec"
    href: "https://umf.imagilux.org/"

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
