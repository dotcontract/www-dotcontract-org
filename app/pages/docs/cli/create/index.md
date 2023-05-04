---
title: 'create'
---

## Overview

`contract create` is a command that create a new dotcontract.

## Synopsis

```wrapped
contract create [-f | --file | -o | --output <filepath>] [--dir <dirpath>]
```

## Description

The `create` command creates a new dotcontract file or directory. If a file is specified, a new dotcontract file will be created. If a directory is specified, a new dotcontract directory will be created. Either a path to a file or directory must be specified. A dotcontract file is a packed version of a dotcontract directory. See the [`pack`](/docs/cli/pack) and [`unpack`](/docs/cli/upack) commands for more information.
## Options

```flags
-f
--file
-o
--output
```
Any of the above will specify where to create a new dotcontract file.

```flags
--dir
```
Specifies where to create a new dotcontract directory.

## Examples

Create a new dotcontract file:

```shell
contract create --file example.contract
```

Create a new dotcontract directory:

```shell
contract create --dir example
```

## See Also

* [pack](/docs/cli/pack)
* [unpack](/docs/cli/unpack)