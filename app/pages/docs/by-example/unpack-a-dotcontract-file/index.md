---
title: "Unpack a DotContract File"
topic_doc: "/by-example"
prev_doc: "/by-example/sign-an-agreement"
next_doc: "/by-example/sync-a-dotcontract-repo"
---

You can list the contents of a .contract file using the CLI and then extract files you want to view:

```terminal
% contract contents -f example.contract

/collective/name.text     Example Collective
/collective/email.text    admin@example.com
/collective/signing.pub   crypto://ed25519-pub/12D3KooWGzTPmNwRgs6qspk5TmPGrVyHEE8dGq9nTfYBF5Dbf1YK
/agreement.pdf            attachment://decdef816dece1e1aa152e649d1a860757e0b9a7d153d23bc1051858f3db65c1
/README.md                attachment://e1fef8da62c19310d825dda71bcb9e616405545ea1c88898e089449519087241

% contract extract -f example.contract -p /agreement.pdf
```

But another way to quickly get access to all the files in a .contract is to unpack it and view its content as a directory on your computer:

```terminal
% contract unpack -f example.contract

Unpacking to: ~/Downloads/example

~/Downloads/example/collective/name.text 
~/Downloads/example/collective/email.text 
~/Downloads/example/collective/signing.pub 
~/Downloads/example/agreement.pdf
~/Downloads/example/README.md
~/Downloads/example/.contract

Unpacking complete!
```

You can also interact with the unpacked DotContract directory using the CLI:

```terminal
% contract info --directory ~/Downloads/example

# Summary

* Contributors: 1
* Commits: 1
* Rules: 1
* Files: 2
* Values: 3
* Drafts: 1

...
```


If you change directories into an unpacked DotContract directory (or any of its subdirectories), you also don't need specify its path when using the command line:

```terminal
% cd ~/Downloads/example
% contract info

# Summary

* Contributors: 1
* Commits: 1
* Rules: 1
* Files: 2
* Values: 3
* Drafts: 1

...
```

If you make changes to a DotContract directory, you may want to pack it back up as a .contract file to send to others:

```terminal
% contract pack -f ~/example2.contract
```