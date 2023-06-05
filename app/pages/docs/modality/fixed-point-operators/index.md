---
title: "Fixed Point Operators"
prev_doc: "/modality/can-and-must"
next_doc: "/modality/henceforth-and-until"
topic_doc: "/modality"
---

Fixed point operators allow us to write rules that are applied repeated throughout a model.

## Root State of Rule

So far, we've seen simple rules using boxes and diamonds. Each of time a rule is applied, it is applied relative to current state of the model. This state becomes known and the root state of the rule. If we need a rule to also apply to subsequent states, we'd need a longer rule. For example, consider a model of 5 sequential states, where we are in the first state:

```mermaid
flowchart LR
    s1((s1)) -->| | s2((s2))
    s2((s2)) -->| | s3((s3))
    s3((s3)) -->| | s4((s4))
    s4((s4)) -->| | s5((s5))
```

If we apply the rule, `[-signed]false`, then the model will need to evolve to constrain only the first arrow, but not the rest:

```mermaid
flowchart LR
    s1((s1)) -->|+signed| s2((s2))
    s2((s2)) -->| | s3((s3))
    s3((s3)) -->| | s4((s4))
    s4((s4)) -->| | s5((s5))
```

We could conjoin subrules to produce a rule that applies to the model's subsequent transitions, but at the cost of becoming painfully verbose:

```
[-signed]false and [][-signed]false and [][][-signed]false and [][][][-signed]false
```

```mermaid
flowchart LR
    s1((s1)) -->|+signed| s2((s2))
    s2((s2)) -->|+signed| s3((s3))
    s3((s3)) -->|+signed| s4((s4))
    s4((s4)) -->|+signed| s5((s5))
```

But how can we get a rule to apply no matter how many transitions occur?

## Greatest Fixed Point

`gfp`

## Least Fixed Point

`lfp`