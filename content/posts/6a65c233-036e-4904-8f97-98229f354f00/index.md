---
title: "Why I’ll (probably) never adopt Talos linux"
date: 2025-10-09T20:05:00Z
draft: false
author: k0bayashi
fingerprint: "6a65c233-036e-4904-8f97-98229f354f00"
---
I recently stumbled upon this blog post from SideroLabs:
[Talos vs Flatcar](https://www.siderolabs.com/blog/talos-linux-vs-flatcar/)

I usually never discuss or make remarks to companies themselves, especially when they create a nice product, except when they start to play an unfair game.

And in here, SideroLabs couldn’t resist to publish a direct attack towards a community based project, which is unfair.

Yes, Flatcar is a community based distribution backed by Microsoft and incubated over CNCF but it is not a commercial product.

So, SideroLabs with its publication made some valid points, but they very quickly forget to tell their potential customers few things.

## Siderolabs is not an open-source company

First of all, let’s remember you that siderolabs open sourced Talos linux because they had no choices.

Their distribution is a slim 12 binaries based linux, but upon those 12 binaries, only one (machined) is there own piece of software.

They have no other choices than to open source the 11 other binaries as commanded by the licenses of those softwares.

The only remaining open sourced part of this distribution, is machined, an around 400 lines of go replacement for systemd, dedicated to boot two things, kubelet and a containers runtime.

Is this model efficient and interesting? Absolutely, but it’s not the point.

The point is, Talos is the only core part published under an open source compliant license.

Everything else that really matters (not the 120 forks of tools or libraries), is under the infamous BSL license and especially OMNI or Discovery-service.

The license that should turn any open-source contributor mad.

Flatcar doesn’t do that. After acquiring kinvolk, Microsoft made it clear that it wouldn’t be a redite of what happened with CoreOS and Redhat, since then, they doubled down on this promise as they funded Flatcar infrastructure, dedicated people and recently worked with the CNCF to make Flatcar incubated in it, guaranteeing the safety of Flatcar Apache 2.0 license.

Act are far more superiors to talks, Microsoft honored its promise by taking the appropriate actions and by doing that it avoided the community many many headaches such as the one on the next chapter.

## Talos is vendor lock-in

How can it be??

Well, remember when redhat turned CentOS Core into CentOS Stream and by doing that implicitly told any company using CentOS to go fuck or come back home by acquiring a due RH license ?

Siderolabs does have the same power in here.

They can choose to move talos under that shitty BSL license at any time.

But far more than just the license, talos is vendor lock-in because of the way it is supposed to work.

Talos was thinked as a part of an ecosystem driven by OMNI and here lye the lock.

Of course you can choose to use Talos as a standalone distribution, but the reality is that you’ll likely need to manage few to large fleet of clusters which all will use talos, which means you’ll have to deal with provisioning and lifecycle topics soon enough.

And, at that moment, you’ll have few choices.

Either you continue to do all required tasks manually which can quickly become a nightmare where you life will be dedicated to chase for stability and compatibility or a mess of frozen and deprecated unsecured releases.

You can have your own in-house provisioning and lifecycle system, which most of time is a bad idea as they lack beyond what the upstream allows in terms of features and compatibility. And if you’re lucky enough to have an efficient provisioning and lifecycle system, you’ll still miss few features provided by the upstream components.

Or you can decide to go with siderolabs integrated solutions, but, at that moment, you choose to specialize the basement of your infrastructure around a proprietary solution.

Choice that inevitably leads you to become vendor lock-in because of the infamous « investment bias » which force you to double down onto an investment instead of being able to take your losses and start with something fresh.

How many time did you find yourself on a meeting where a director told you something like:
> We can’t abandon this choice now, not after having invested that many time and money!

This same director will decide that if it failed so far, it’s not because of the product or the technical choices, but because of the fact that they didn’t invest enough.

This bias, help people to reject and runaway from failure and responsibility.

Then, later on, after a major predicted crash, incident or catastrophic situation, they decide ton abandon the product/project to rebuild from scratch on new sane basement.

But, in the meantime, the overall cost of such failure and decisions will in the end be far beyond what it would have cost you to stop the project earlier, take this failure and cost loss as a lesson learned, and start to build something better.

That is what vendor lock-in is a waste of precious time and money.

Latest Broadcom/VMWare acquisition should be your best exemple.

## Conclusion

I’m not at all telling you that Talos or any siderolabs solution are inherently bad. Quite the opposite, their solutions are nice, well integrated and streamlined as we need it.

However, with this article they made a mistake.

They succumbed to the sirens of aggressive marketing tactics and bad PR.

They attacked a solution that they consider as a concurrent where they’re not.

Flatcar is a much general purpose containers dedicated distribution. It doesn’t focus only on kubernetes by mainly providing facilities to spawn containers using docker mainly.

Siderolabs mixed and mistaken declarativeness and reproducibility of the distribution configuration.

Flatcar does use declarative configuration, it never implied that such configuration will be reproducible.

It imply that the final shape will always fit what have been declared by the configuration recipe. Not that it will always be the same from an iteration to another.

That’s even a feature of the distribution as it explicitly allow you to chain your configurations from remote locations.

If siderolabs wanted to be really honest on their comparison upon reproducibility, they’d have rather choose to compare Talos with NixOS and I’m pretty sure they wouldn’t have been an easy one ;-)

As a final word, I would say that I wasn’t kine to recommend Talos as for the upper mentioned arguments already, but this latest very clumsy publication is definitely convincing me to not recommend it at all up till the company change its behavior and licenses choices.

> "God gives to honesty, loyalty, and righteousness an accent that can neither be counterfeited nor misunderstood."

===
Original posting was made on [substack](https://substack.com/@k0bayashi/p-151417335)
