---
topic: "By Example"
title: "Create your Keys"
next_doc: "/by-example/sign-an-agreement"
---

### Some Quick Context

DotContracts use cryptographic keys to do two things:

1. sign commits (with your **signing key**)
2. access repos (with one of your **access keys**)

Do not share any of your keys with others. You must *keep your keys private!* 

Each of your keys generates a public identifier (formally a public key), here called a **pub**. You may openly share your pubs, as they will be used to identify you:

1. a **signing pub** identifies you within DotContract
2. an **access pub** identifies you when accessing a DotContract repo

### Getting Started

Create your default set of keys and pubs with the command:
```
contract new-id
```

If you need additional identities, name them:
```
contract new-id --name me@work
```

To see a list of your available identities, use the command:
```
contract whoami
```