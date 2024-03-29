---
title: "Necessity and Possibility"
prev_doc: "/modality/rules-and-models"
next_doc: "/modality/can-and-must"
topic_doc: "/modality"
---

In Modality, we specify that a certain behavior is either necessary or possible, using boxes `[ ]` and diamonds `< >`.

## Box `[ ]` of Necessity

Consider the following model, showing that to get from home to work we may either walk, bike, or drive.

```mermaid
flowchart LR
    home((fa:fa-home home)) -->|fa:fa-walking +walk| work((fa:fa-building work))
    home -->|fa:fa-bicycle +bike| work
    home -->|fa:fa-car +drive| work
```

Now let's say, we want to write a rule in Modality to restrict our commute options. Here's a rule that says we may not drive to work:

<center>

`[+drive] false`

</center>

The square brackets around the word `+drive` is called a box and conveys necessity. In this case, the box is telling us that this rule applies to commuting paths that necessitate driving.

The second word `false` is a boolean value (as in `true` or `false`) that tell us how to evaluate our rule. In this case, a final `false` tells us that the rule is broken by any path that requires us to drive.

To satisfy this new rule, the model must evolve to no longer allow driving to work:

```mermaid
flowchart LR
    home((fa:fa-home home)) -->|fa:fa-walking +walk -drive| work((fa:fa-building work))
    home -->|fa:fa-bicycle +bike -drive| work
```

Note the the arrow for driving to work is now gone. You'll also see that `-drive` has been included on the other arrows. This prevent scenarios where we both drive and bike or walk to work.

So what if we wanted a rule to require walking to work? Which of these two rules requires us to walk?

<details>
<summary><code>[+walk] true</code>
</summary>
<br>
<div>Sorry, wrong answer. <code>true</code> after <code>[walk]</code> means that any path including walking should be true, but it also doesn't restrict other paths.</div>
</details>

<details>
<summary><code>[-walk] false</code></summary>
<br>
<div>Great job! <code>false</code> after <code>[-walk]</code> means that any path not including walking should be false.</div>
</details>

## Diamond `< >` of Possibility

Not all rules specify obligations, some specify rights. A right is rule that ensure that some act remains possible.

Going back to our example, we can write a rule to ensure that commuting by bike remains possible. To do this we use the angle brackets `< >` known as diamond:

<center>

`<+bike> true`

</center>

The final `true` indicates that the rule should be evaluated as true if a path including `bike` is possible. Once committed to a contract, such a rule prevents any new rule restricting us from biking to work from also being committed.

## Multiple Steps

Now consider a model where we commute to work and then back home:

```mermaid
flowchart LR
    home((fa:fa-home home)) -->|fa:fa-walking +walk| work((fa:fa-building work))
    home -->|fa:fa-bicycle +bike| work
    home -->|fa:fa-car +drive| work
    work -->|fa:fa-walking +walk| home2((fa:fa-home home))
    work -->|fa:fa-bicycle +bike| home2
    work -->|fa:fa-car +drive| home2
```

Let's try writing... TODO

## A little history

Modality isn't the first language to use boxes and diamonds. In fact, they're the symbols logicians have used for temporal modalities since the 1910s when they were first introduced by [C. I. Lewis](https://en.wikipedia.org/wiki/C._I._Lewis). The idea of placing transition labels inside of the boxes and diamonds comes from [HML (Hennessy-Milner logic)](https://en.wikipedia.org/wiki/Hennessy%E2%80%93Milner_logic) which was developed in the 1980s.