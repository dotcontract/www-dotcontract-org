---
title: "Necessity and Possibility"
prev_doc: "/modality/rules-and-models"
next_doc: "/modality/can-and-must"
---

In Modality, we specify that a certain behavior is either necessary or possible, using boxes `[ ]` and diamonds `< >`.

## Box `[ ]` means necessity along a path

Consider the following model, which says that we may either walk, bike, or drive from home to work.

```
* Node: home
  * Arrow: walk
  * Arrow: bike
  * Arrow: drive
* Node: work
```

Now let's say, we want to write a rule in Modality to restrict our commute options. Here's a rule that says we may not drive to work:

`[drive] false`

The square brackets around the word "drive" is called a box and conveys necessity along a path. In this case, the box is telling us that this rule applies to commuting paths that necessitate driving.

The second word `false` is a boolean value (as in `true` or `false`) that tell us how to evaluate our rule. In this case, the final `false` tells us that the rule is broken by driving to work.

To satisfy this new rule, the model must evolve to no longer allow driving to work:

```
* Node: home
  * Arrow: walk -drive
  * Arrow: bike -drive
* Node: work
```

Note the the arrow for driving to work is now gone. You'll also see that `-drive` has been included on the other arrows. This prevent scenarios where you both drives and either bikes or walks to work.

So what if we wanted a rule to require walking to work?

```
[-walk] false
```

## Diamond `< >` means possibility along a path