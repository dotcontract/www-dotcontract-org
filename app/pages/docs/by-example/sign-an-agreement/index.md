---
title: "Sign an Agreement"
topic_doc: "/by-example"
prev_doc: "/by-example/create-your-keys"
next_doc: "/by-example/unpack-a-dotcontract-file"
---

You've been sent an [example.contract](/public/example.contract) and have been asked to sign. What do you do?

If you haven't already, be sure to first [create your keys](/docs/by-example/create-your-keys), as well use them here.

## Inspecting the Contract

As a first step, let's get some general info from the example.contract file we were sent.

```wrapped-terminal
% contract info -f example.contract

# Summary

* Contributors: 1
* Commits: 1
* Rules: 1
* Files: 2
* Values: 3
* Drafts: 1

______ README.md ______

# Example Contributor License Agreement

Thank you for your interest in contributing to an Example open source project. You must read and agree to the contained /agreement.pdf before becoming a contributor.

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

Now let's take a look at the rules applied to the .contract.

```wrapped-terminal
% contract rules -f example.contract

# 1

rule: always must includes_sig(/collective/signing.pub)
since: a47b208ffdf38e631eae5647dc8033578043d1a697ae7d7fdabb33201e64a8cc
message: Example Collective must sign off on all commits
```

The above rule is fairly self-explanatory. The text after `rule` is written in Modality and formally encodes that Example Collective must sign any commit for it to be valid. The field `since` tell us when the rule went into effect, and `message` is the commit message from when the rule was added.

Let's now take a look at the present contents of the contract. This will show us both attached files and persisted values.

```terminal
% contract contents -f example.contract

/collective/name.text     Example Collective
/collective/email.text    admin@example.com
/collective/signing.pub   crypto://ed25519-pub/12D3KooWGzTPmNwRgs6qspk5TmPGrVyHEE8dGq9nTfYBF5Dbf1YK
/agreement.pdf            attachment://decdef816dece1e1aa152e649d1a860757e0b9a7d153d23bc1051858f3db65c1
/README.md                attachment://e1fef8da62c19310d825dda71bcb9e616405545ea1c88898e089449519087241
```

The top three values are the name, email, and signing pub of the Example Collective. After that, we see two attachments. The README.md we already previewed. We can extract the agreement.pdf to view the legal text included in this contract.

``` terminal
% contract extract -f example.contract --path /agreement.pdf

Extracting agreement.pdf to:
  ~/Desktop/
```

## Filling out the Draft

A .contract can also store drafts of commits for others to complete. Let's take a look at draft that was sent within example.contract.

```terminal
% contract drafts -f example.contract

# new-contributor
* Commits: 1
* Rules: 1
* Blank Fields: 3
* Able to Commit?: No
```

Above we see that there's one draft `new-contributor`. It has one additional commit, three blank fields, and one rule. It's not able to be committed, if for no other reason because of the blank fields.

Let's look at the its commit log.

```terminal
% contract log -f example.contract --draft new-contributor

## Commit b2713b774d311b248fae9bbff86c9cdabd0861d3d42bafcd062ab752e11cba49

MESSAGE   Adding myself as a contributor.

POST      /contributor/signing.pub     [________]
POST      /contributor/name.text       [________]
POST      /contributor/email.text      [________]

RULE      must include_sig(/contributor/signing.pub)

# Not able to be committed:
* Blank Field: /contributor/signing.pub
* Blank Field: /contributor/name.text
* Blank Field: /contributor/email.text
* Unsatisfied Rule: must include_sig(/contributor/signing.pub)
* Unsatisfied Rule: always must include_sig(/collective/signing.pub)
```

Let's complete the draft by filling out the blank fields and signing the draft.

```wrapped-terminal
% contract edit-draft -f example.contract --draft new-contributor --post-pub /contributor/signing.pub --post /contributor/name.text "Hubert Leibniz" --post /contributor/email.text "hubert@leibniz.net" --sign
```

Now if we check the draft's commit log, we'll see that the fields have been filled in.

```terminal
% contract log -f example.contract --draft new-contributor

## Commit 17ed7d1b73c61e292e0ae22ea1ae5803bcf76d290a520b34a50ed950222afd76

MESSAGE   Adding myself as a contributor.

POST      /contributor/signing.pub     crypto://ed25519-pub/12D3KooWSkMeW3HNWvt5nocnjzVMrXTSEgvsRCgQzSbhJ2JzVawo
POST      /contributor/name.text       Hubert Leibniz
POST      /contributor/email.text      hubert@leibniz.net

RULE      must(include_sig(/contributor/signing.pub))

SIGNED    /contributor/signing.pub

# Not able to be committed:
* Unsatisfied Rule: always must include_sig(/collective/signing.pub)
```

One rule remains unsatisfied: the collective must also sign! Time to send the `example.contract` back to them to counter sign and merge the draft into the committed contract.

## Merging in a Signed Draft

When Example Collective receives our signed draft, it's their turn to sign the draft.

```terminal
% contract edit-draft -f example.contract --draft new-contributor --sign

% contract merge-draft -f example.contract --draft new-contributor
```

The contract is now full signed by both parties. Example Collective should send a copy of the fully signed contract back to the new contributor