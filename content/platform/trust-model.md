---
title: Trust model
slug: trust-model
description: Every UMF artifact carries cryptographic provenance end-to-end. Compliance posture becomes
  a property of the system — true because the artifacts are signed and reproducible, not because someone
  filled out a checklist.
accent: amber
hero:
  eyebrow: Why Imagilux
  lede: Every UMF artifact carries cryptographic provenance end-to-end. Compliance posture becomes a property
    of the system — true because the artifacts are signed and reproducible, not because someone filled
    out a checklist.
  ctaPrimary:
    label: Talk to us
    href: /contact/
  ctaSecondary:
    label: Read the security policy
    href: /security/
features:
  heading: Trust by construction.
  items:
  - icon: shield-check
    title: Signed images
    body: Every layer carries a signature. A registry serving an unsigned or modified artifact gets rejected
      by the runtime — no skip-verification flag exists.
  - icon: id-card
    title: Verifiable provenance
    body: Anyone consuming an image can verify what built it, when, with what dependencies. Provenance
      metadata travels with the artifact.
  - icon: stack
    title: Build reproducibility
    body: Same input graph, same output bytes — across builders, machines, time. Air-gap and sovereign
      deployments become tractable.
  - icon: chain
    title: End-to-end signature chain
    body: From source through every build stage to the running kernel — each layer signed by the builder,
      verified at each hop.
  - icon: doc-lines
    title: Audit trail
    body: Every change to declared state is logged, attributed, and queryable. Compliance auditors get
      answers, not synthesised reports.
  - icon: check-circle
    title: No skip-verification
    body: The runtime refuses to load unverified artifacts. There is no flag, no env var, no documented
      workaround. Verification is structural.
---
