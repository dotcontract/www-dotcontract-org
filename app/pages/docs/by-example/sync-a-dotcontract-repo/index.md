---
title: "Sync a DotContract Repo"
topic_doc: "/by-example"
prev_doc: "/by-example/sign-an-agreement"
next_doc: "/cli"
---

Passing a .contract file back-and-forth is simple and easy. But when you have more than two parties, you likely need a better way to all stay in sync.

To make syncing easy, any .contract can be hosted as a data repository that others can push to or pull from. Just like git, you can self-host a DotContract as a repo on any server using sshd. Alternatively, hosting services like [ContractNexus](https://www.contract.nexus) make it easy to create and share your repos via the web.

In this tutorial, we'll explore the basic operations for cloning, pushing, and pulling a remote data repository.

### Cloning a Contract Repo

```
contract clone repos@contract.nexus:/sample-org/sample.contract
```

### Pushing Changes to a Repo

```
contract clone repos@contract.nexus:/sample-org/sample.contract
```

### Pulling Changes from a Repo

...

### Adding Drafts to a Repo

...

### Resolving Conflicts

...