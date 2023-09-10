---
topic: 'By Example'
title: 'Sign an Agreement'
prev_doc: "/by-example/create-your-keys"
--next_doc: "/by-example/inspect-a-dotcontract"
---

You've been sent an [example.contract](/public/example.contract) and have been asked to sign. What do you do?

If you haven't already, be sure to first [create your keys](/docs/by-example/create-your-keys), as well use them here.

## Inspecting example.contract

As a first step, let's get some general info from the example.contract file we were sent.

```wrapped
contract info -f example.contract

# Summary

* Contributors: 1
* Commits: 1
* Rules: 1
* Drafts: 1

______ README.md ______

# Example Contributor License Agreement

Thank you for your interest in contributing to an Example open source project. You must read and agree to the contained agreement /cla-agreement.pdf before becoming a contributor.

## Instructions

To agree to this agreement and join as new contributor, please complete the draft `new-contributor`.

When completing the draft, you will need fill out three fields:

* /contributor/signing.pub
* /contributor/name.text
* /contributor/email.text

After these have been filled, please sign the draft and return to the Example Collective.
```

At the top we see a summary of technical details of the contract. So far there has only been one commit, which refers to how many times the contract has been updated. There is also only one party who has contributed the contract so far. There's is one rule and one draft. We'll check on those soon.

At the bottom we see a general description of the contract, which comes to us from the `/README.md` file contained with the example.contract. It looks like this a Contributor License Agreement for an open source project that we'd like to work on.


```
contract rules -f example.contract

# 1
    rule: always must includes_sig(crypto://...)   
    since: ....
    message: "Example Collective must sign off on all commits"
```

This rule is fairly self-explanatory. The text after `rule:`, written in Modality, formally encodes that Example Collective must sign any commit for it to be valid. The field `since:` tell us when the rule went into effect, and `message:` is the commit message from when the rule was added.

```
contract drafts -f example.contract

# Draft: new-contributor

## Summary
* Commits: 1
* Blank Fields: 3
* Ready to Commit?: No




## DETAILS

```
