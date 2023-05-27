---
title: "Rules and Models"
prev_doc: "/modality"
next_doc: "/modality/necessity-and-possibility"
---

We write rules in Modality to constrain the future outcomes of a DotContract. When changes are committed to a contract, we use models to confirm that the rules remain satisfied.

## Rules

A rule constrains the future outcomes of a contract. For example, a rule may require that two parties sign for a payment to occur.

Each DotContract starts off with an empty set of rules. To add rules, you commit them to a contract.

Adding rules is append-only, meaning once a rule is added, it may not be removed.
## Models

Every time we commit changes to a contract, a model is used to confirm that those changes are satisfy the rules of the contract.