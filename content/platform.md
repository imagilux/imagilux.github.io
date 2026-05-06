---
title: "The Imagilux platform"
eyebrow: "Platform"
eyebrowTone: "amber"
lede: "Imagilux is built around four ideas: that operators deserve outcomes instead of tickets, that infrastructure substrates should be open, that trust is a property you build into the system rather than bolt on top, and that real interoperability needs first-party SDKs."
description: "How the Imagilux platform is organized — the Light Out stance, open-by-design principles, trust model, and SDK."
---

## The Light Out era {#light-out}

Light Out is the operating stance Imagilux is built for. The thesis is short: a modern fleet should run without humans in the change-management loop. Operators declare intent — which images, which versions, which policies — and the system converges. Patches, upgrades, drift remediation, compliance posture — all properties of the system, not steps in a runbook.

Most infrastructure today is the opposite: every environment is hand-rolled, drift compounds quietly, and the queue of upgrade tickets never empties. Light Out treats that as a design failure rather than a fact of life. UMF gives fleets reproducible, signed images. BOREAL converges them autonomously. Together they remove the operator-in-the-loop assumption that quietly caps how big any infrastructure team can scale.

This isn't aspirational marketing language — it's the design constraint for every Imagilux directive, default, and SDK shape.

## Open by design {#open-by-design}

The substrate underneath an operator's fleet should never be a vendor lock-in. So:

- **The UMF specification is open** and remains so. Anyone can implement a parser or builder against it without permission or licensing.
- **First-party SDKs are open** in the eight languages most operators actually run.
- **Reference implementations are open** under permissive licenses. Fork them, run them air-gapped, build on top.

What's commercial is hardened distributions, signed registries, support contracts, and the BOREAL control plane. The substrate stays in the open so the operator's bet on Imagilux doesn't extend to the substrate they build everything on.

## Trust model {#trust-model}

Every UMF artifact carries cryptographic provenance end-to-end. A boot disk emitted from a multi-stage UMF build can be traced from running kernel back through every layer to source — bit-for-bit reproducible from the same input graph, with each stage signed by the builder.

Concretely:

- **Signed images.** Every layer carries a signature; a registry that serves an unsigned or modified artifact gets rejected by the runtime. There is no "skip verification" flag.
- **Verifiable provenance.** Anyone consuming an image can independently verify what built it, when, with what dependencies. Provenance metadata travels with the artifact.
- **Build reproducibility.** Same input graph, same output bytes — across builders, across machines, across time. This is the property that makes air-gap builds and sovereign deployments tractable.

Compliance posture becomes a property of the system: it's true because the artifacts are signed and reproducible, not because someone filled out a checklist.

## Architecture

Three components, designed to compose:

- **[UMF →](/products/umf/)** — The open specification for universal machine images. Parse once, deploy anywhere.
- **[BOREAL →](/products/boreal/)** — The autonomous control plane for fleet-scale lifecycle.
- **Imagilux SDK** — see below.

## Imagilux SDK {#sdk}

The SDK gives operators a first-party way to build custom operators and integrations against UMF and BOREAL without reverse-engineering the wire formats. It ships in eight languages — Go, Rust, Python, TypeScript, Java, C#, Ruby, and Elixir — and tracks the spec version directly, so an SDK release is the canonical reference implementation of any new directive.

What the SDK gives you:

- **First-class types** for every UMF directive and BOREAL primitive.
- **Builders for custom directives** so domain-specific extensions slot in cleanly.
- **Operator scaffolding** for the BOREAL control plane — autonomous, intent-driven, with the boilerplate written once.
- **Test utilities** that mock the registry and control plane so unit tests don't need a live cluster.

Documentation and examples live alongside the spec at [umf.imagilux.org](https://umf.imagilux.org/). When the SDK accumulates enough surface area to warrant a full product page, it'll graduate from this section.

## See it in action

[Request a walkthrough →](/contact/)
