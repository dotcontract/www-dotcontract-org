---
topic: 'By Example'
title:  'Create a DotContract'
---

```
contract create --f example.contract
```

There you go! A DotContract file you can share with anyone. Except it's empty, so let's put something in it.



Let's make it so that only specified parties may commit to the contract moving forward.
We can add and remove these parties later, so for now let's just add our own identity:

```
contract commit \
  --add-to /parties.pub.set $(cat ~/.dotcontract/default.pub) \
  --rule "always must include_sig_from one_of /parties.pub.set" \
  --sign
```

