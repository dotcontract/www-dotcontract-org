---
title: 'commit'
---

## Overview

`contract commit` is a command that adds a commit to a dotcontract.

## Synopsis

```wrapped
contract commit [-f | --file <file.contract>] [-d | --dir <dotcontract_dir>] [-o | --output <out.contract>] [-m | --message <message>] [--post <endpoint> <value>]... [--rule <rule>]... [--evolution <evolution>] [--sign] [--sign-with <file.keypair>]...
```

## Description


## Options

```flags
-f
--file
```
Specifies the dotcontract file to use. If neither `-f` nor `-d` are used, the CLI will use the present working directory or its closest parent directory that is a dotcontract directory.

```flags
-d
--dir
```
Specifies the dotcontract directory to use. If neither `-f` nor `-d` are used, the CLI will use the present working directory or its closest parent directory that is a dotcontract directory.

```flags
-o
--output
```
Specifies an output dotcontract file to write a revised dotcontract to, instead of modifying the input. If `-o` is not used, the input dotcontract file or dotcontract directory will be modified.

```flags
-m
--message
```
Includes a message within the commit. Use a message to explain the purpose of the commit. Note that messages are not formally verified and may misstate the effect of the commit.

```flags
--post
```
Includes a post within the commit. It requires two arguments `[path] [value]`. The first argument is dotcontract endpoint, and the second argument is the value.

```flags
--rule
```
Includes a rule within the commit. The rule must be written in Modality.

```flags
--evolution
```
Includes an evolution of the Kripke Machine that will be used to verify the commit. An evolution is required whenever rules are added. If no evolution is passed in when rules are added, then the CLI will attempt to auto generate an evolution for the new rules. If no rule is added the previous used Kripke Machine will be used to verify the commit. If a commit does not contain a rule, an evolution may be included to switch to any other compliant Kripke Machine.

```flags
--sign
```
Signs the commit with the default keypair, located at `~/.dotcontract-settings/default.keypair`.

```flags
--sign-with
```
Specifies a keypair file to sign the commit with.

## Examples

Commit to a file: 

```shell
$ contract commit -f example.contract --post "./example.text" "hellow world" 
```

## See Also

* [log](/docs/cli/log)
* [push](/docs/cli/push)
* [pull](/docs/cli/pull)
