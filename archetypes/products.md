---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .Name }}"
description: "TODO: one-sentence description used as the meta description and as a fallback for the hero lede."

# PDP shape — see themes/imagilux/layouts/partials/pdp/page.html for contract.
accent: "amber"  # "amber" or "marine"

hero:
  eyebrow: "TODO: small uppercase tag above the h1"
  lede: "TODO: paragraph under the h1 — what the product is and why it matters."
  ctaPrimary:
    label: "Request a demo"
    href: "/contact/"
  ctaSecondary:
    label: "Read the spec"
    href: "https://umf.imagilux.org/"

features:
  heading: "TODO: features-section h2 (e.g. 'Built for the Light Out era.')"
  items:
    - icon: "cube"            # see themes/imagilux/layouts/partials/icons/
      title: "TODO"
      body:  "TODO"
    - icon: "lock-keyhole"
      title: "TODO"
      body:  "TODO"
    - icon: "lightning"
      title: "TODO"
      body:  "TODO"
    - icon: "grid-4"
      title: "TODO"
      body:  "TODO"
    - icon: "arrow-path"
      title: "TODO"
      body:  "TODO"
    - icon: "signal-arcs"
      title: "TODO"
      body:  "TODO"
---
