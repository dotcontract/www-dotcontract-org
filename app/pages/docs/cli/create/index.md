---
title: 'create'
---

## Overview

`contract create` is a command that create a new dotcontract.

## Synopsis

```wrapped
contract create [-f | --file <file.contract>] [-d | --dir <dotcontract_dir>]
```

## Description

The `create` command creates a new dotcontract file or directory. If a file is specified, a new dotcontract file will be created. If a directory is specified, a new dotcontract directory will be created. Either a path to a file or directory must be specified. A dotcontract file is a packed version of a dotcontract directory. See the [`pack`](/docs/cli/pack) and [`unpack`](/docs/cli/upack) commands for more information.
## Options

```flags
-h
--help
```
Show help 

```flags
-f
--file
```
Any of the above will specify where to create a new dotcontract file.

```flags
-d
--dir
```
Specifies where to create a new dotcontract directory.

One of the two options need to be specified. 

## Examples

Get help: 

```shell
$ contract create --help 

contract create

creates a new contract

Options:
      --version  Show version number  [boolean]
  -h, --help     Show help  [boolean]
  -f, --file     where to output a dotcontract file [filepath]
  -d, --dir      creates a new dotcontract directory [dirpath]
```

Create a new dotcontract file:

```shell
$ contract create --file example.contract

dotcontract file created at: example.contract
```

Create a new dotcontract directory:

```shell
$ contract create --dir example

dotcontract directory created at: example
```

## See Also

* [pack](/docs/cli/pack)
* [unpack](/docs/cli/unpack)
