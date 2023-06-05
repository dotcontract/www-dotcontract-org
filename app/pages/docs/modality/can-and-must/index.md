---
title: "Can and Must"
prev_doc: "/modality/necessity-and-possibility"
next_doc: "/modality/fixed-point-operators"
topic_doc: "/modality"
---

Boxes and diamonds are great primitives for writing about necessity and possibility, but Modality offers us the macros `must` and `can` to make our code more widely accessible.

## Must

Writing a rule that requires something to happen awkwardly involves a box, negation, and false:

<center>

```
[-audit] false
```

</center>

Modality provides a macro to make such rules more idiomatic:

<center>

```
must +audit
```

</center>

## Can

Possibility is fairly simple convey with a diamond and true:

<center>

```
<+review> true
```

</center>

Modality, however, also provides a macro to make rules about possibility more idiomatic:

<center>

```
can +review
```

</center>