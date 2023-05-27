---
title: "Modality"
next_doc: "/modality/rules-and-models"
---

DotContract rules and queries are written in Modality, a formal specification language for encoding the terms of any multi-party agreement.

## Why Modality?

We believe that no contract should be exploitable by bugs or defects. The only way to achieve this is for the terms of a contract to express their intended behavior in a verifiable way. Modality was designed to make this possible.

If you're a software developer without any hardware development experience, Modality will feel alien to you. Software development languages are typically maximally expressive, allowing you to express any composition of procedures. But that expressivity comes at a cost, namely that it is impossible to verify that a software program will not exhibit unexpected behavior.

In contrast, because hardware must ship free of defects, hardware specification languages have been designed to be verifiable. Contracts, like hardware, should be free of defects. Thus, Modality has inherited its approach not from software, but instead from the world of hardware verification.

More abstractly, this approach is known as formal verification and model checking. To create Modality, a team of formal verification and model checking experts came together, including [Bud Mishra](https://en.wikipedia.org/wiki/Bud_Mishra), the first to use model checking to identify a real-life hardware bug.<sup>[[1](http://www.cs.cmu.edu/~nishants/trs/cmu-cs-07-110.pdf)][[2](https://www.cs.cmu.edu/~emc/15817-f08/lectures/lec-01_4up.pdf)]</sup>

## How to Learn Modality

Modality is not a difficult language to learn, but it is different.

By walking through these tutorials, you will learn the basics of Modality, including how to write rules and queries in Modality.

- [Rules and Models](/docs/modality/rules-and-models) – what is a rule, what is a model, and how do they relate?
- [Necessity and Possibility](/docs/modality/necessity-and-possibility) – how do we encode necessity and possibility?
- [Can and Must](docs/modality/can-and-must) – how can we express rights and obligations?
- [Fixed Point Operators](docs/modality/fixed-point-operators) – how do we encode repeated behavior?
- [Henceforth and Until](docs/modality/henceforth-and-until) – how can we express a rule that persists?

As a bonus, after completing these brief tutorials, you will have begun to grok the basics of [temporal logic](https://en.wikipedia.org/wiki/Temporal_logic) and the [modal mu-calculus](https://en.wikipedia.org/wiki/Modal_%CE%BC-calculus), formal systems that took centuries of logicians to develop.
