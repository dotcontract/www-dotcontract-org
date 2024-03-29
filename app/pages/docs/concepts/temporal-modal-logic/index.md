---
title: 'Temporal Modal Logic'
topic_doc: '/concepts'
---

[Temporal modal logic](https://en.wikipedia.org/wiki/Temporal_logic), simply stated, is the logic of possibility over time.


While temporal modal logic is already widely used in hardware and mission critical software to ensure that systems match their specifications, temporal modal logic is also well suited for specifying the formal aspects of human contractual agreements. DotContract uses a temporal modal logic language called [Modality](/docs/modality) to define and query constraints in user defined contracts over time.


## The History of Modal Logic


First expressed by [Aristotle](https://en.wikipedia.org/wiki/Aristotle) as the logic of ‘possibility’ and ‘necessity’, modal logic itself took many centuries to develop. [Leibniz](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz) recognized that ‘permitted’ (may) and ‘obligatory’ (must) were the legal equivalents of ‘possible’ and ‘necessary’ and began advocating for [a calculus for universal communication and judgement](https://en.wikipedia.org/wiki/Characteristica_universalis). In 1879, [Frege](https://en.wikipedia.org/wiki/Gottlob_Frege), inspired by Leibniz’s pursuit, was the first to publish such a formal calculus, calling it [Conceptscript](https://en.wikipedia.org/wiki/Begriffsschrift).


But when [Bertrand Russell](https://en.wikipedia.org/wiki/Bertrand_Russell) discovered Frege’s language had shipped with [a catastrophic bug](https://en.wikipedia.org/wiki/Russell%27s_paradox), the stage was set for a century of innovation in mathematics. [Gödel](https://en.wikipedia.org/wiki/Kurt_G%C3%B6del) asked what provability itself meant, and in the early 1930s used modal logic to formalize the concept and deliver his [incompleteness theorems](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems). With the birth of computers, came more bugs and wider question about the provability of programs. The [Church-Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis) evinced that any computable problem could be performed on an abstract Turing machine. But such an abstraction came with a cost: Turing complete machines were also undecidable, and there was no way to anticipate if their programs would run to completion. 


Jumping back to the 1910s, [C. I. Lewis](https://en.wikipedia.org/wiki/C._I._Lewis), became the first to classify modal logics by axiom, adopting the diamond symbol ◇ to mean ‘possible’ and the box symbol □ to mean ‘necessary’. In the 1950s, [Arthur Prior](https://en.wikipedia.org/wiki/Arthur_Prior), inspired by medieval logicians like [William of Ockham](https://en.wikipedia.org/wiki/William_of_Ockham), reintroduced time to modal logic. Prior expressed time as paths over possible worlds, founding what is now know as temporal modal logic. However, a semantics for these logics was still missing, but in 1959, [Saul Kripke](https://en.wikipedia.org/wiki/Saul_Kripke) developed the accessibility relationship between possible worlds in a way that brought the work of Lewis and Prior naturally together.


By the late 1970s, all this pure theory was ready for practice and [Amir Pneuli](https://en.wikipedia.org/wiki/Amir_Pnueli) created the first programmable temporal modal logic to enable formal verification by computer, calling it [Linear Temporal Logic (LTL)](https://en.wikipedia.org/wiki/Linear_temporal_logic). The need to work over branching-time lead [Ed Clarke](https://en.wikipedia.org/wiki/Edmund_M._Clarke) to develop [Computational Tree Logic (CTL)](https://en.wikipedia.org/wiki/Computation_tree_logic). While studying under Ed Clarke, [Bud Mishra](https://en.wikipedia.org/wiki/Bud_Mishra) was the first to use temporal logic to identify a hardware bug, bringing widespread practical use to the field. Eventually, [Dexter Kozen](https://en.wikipedia.org/wiki/Dexter_Kozen) discovered that languages like CTL and LTL were both fragments of Dana Scott's [modal mu-calculus](https://en.wikipedia.org/wiki/Modal_%CE%BC-calculus). As both temporal logic languages became widely used in industry, [Moshe Vardi](https://en.wikipedia.org/wiki/Moshe_Vardi)'s investigation into the [robust decidability of modal logic](https://www.cs.rice.edu/\~vardi/papers/dimacs96.pdf) solidified its use wherever tractability mattered.


## Becoming the Logic of DotContract

With the rise of [distributed ledgers](https://en.wikipedia.org/wiki/Distributed_ledger) in the 2010s, Bud Mishra immediately recognized the need to incorporate formal verification and model checking. Bud initially envisioned an out-of-band form of model checking against what he called Kripke ledgers, and began discussing the concept with software architect, Foy Savas. After several years, Foy convinced Bud that an inversion of his ledger concept would better serve to formalize traditional contractual agreements. To do this, they defined a [Kripke Machine](/docs/concepts/kripke-machine) able to enforce and extend a set of user-defined temporal modal constraints over time. [Modality](/docs/modality) was subsequently designed as a logic language for the rights and obligations reified within a Kripke Machine. In 2022, Foy started work on [DotContract](https://dotcontract.org) as a practical implementation of Modality for digital contract repositories.