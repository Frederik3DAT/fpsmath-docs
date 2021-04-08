---
title: "Commands - Overview"
sidebar_label: "Overview"
---

:::tip
Remember to use the bot prefix when running a command!

You can also use `@FPSMath` instead of the server's prefix. Example `@FPSMath help`
:::

Below is a shortlist of all the bot commands.

### Math Commands

**Hint**: You can click on a command to go to its full help entry.

| **Command**                      | **Description **                                                                                                |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`/cm`](./math.mdx#cm)           | Converts Sensitivity to cm/rev                                                                                  |
| [`/deg`](./math.mdx#deg)         | Converts Sensitivity to deg/mm                                                                                  |
| [`/mpi`](./math.mdx#mpi)         | Converts Sensitivity to MPI                                                                                     |
| [`/inch`](./math.mdx#inch)       | Converts Sensitivity to inch/rev                                                                                |
| [`/convert`](./math.mdx#convert) | Converts Different Sensitivities from one game to another                                                       |
| [`/fov`](./math.mdx#fov)         | Finds the true vertical and horizontal FOVs for certain aspect ratio and game/FOV scaling method(FILM notation) |
| [`/focal`](./math.mdx#focal)     | Focal Length Scales a desired sens between 2 fov values of the same type                                        |
| [`/sens`](./math.mdx#sens)       | Converts cm/rev\|deg/mm\|MPI\|inch/rev to a game sensitivity default cm/rev                                     |

### Utility Commands

| **Command**                          | **Description **                                                                        |
| ------------------------------------ | --------------------------------------------------------------------------------------- |
| [`/prefix`](./util.mdx#prefix)       | .                                                       |
| [`/help`](./util.mdx#help)           | Displays a list of available commands, or detailed information for a specified command. |
| [`/games`](./util.mdx#games)         | Displays the supported games for this bot                                               |
| [`/getobject`](./util.mdx#getobject) | Displays the object from the array associated for a game                                |
| [`/info`](./util.mdx#info)           | Displays the major information about this bot                                           |
| [`/cminfo `](./util.mdx#cminfo)      | Displays an explanation for what cm/rev \(cm/360\) is                                    |

## Usage Key

For commands that accept input, you'll see keys with the following:

- `<required>` - parameters between `<>` must be included with the command
- `[optional]` - parameters between `[]` are optional parameters and may be excluded
- a | or | b - | means that you can use the parameters on either side of the symbol
- repeat... - means that you can provide multiple parameters as input

These may be nested. Example: `[parameter1 <parameter2>]` means that the input is optional, but if you provide parameter1 then parameter2 is required. `[parameter...]` means that input is optional, and that the input can be any number of parameters.

:::tip
Don't worry about memorizing this as its on top of all of the command pages
:::
