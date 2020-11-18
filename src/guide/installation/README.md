# Installing Crystal & Initializing your first app

## Installing Crystal

You can install Crystal using your package manager or snap from [here](https://crystal-lang.org/install/). It's also available through WSL and full Windows support is in the works!

There are version managers like [crenv](https://github.com/crenv/crenv) as well.

### Shards

Shards is the dependency manager for Crystal.

Shards is a dependency of Crystal, however it can be installed separately through your package manager.

There are many places where you can find Crystal shards or packages, here's some of them:
- [crystalshards.xyz](http://crystalshards.xyz/)
- [crystalshards.herokuapp.com](https://crystalshards.herokuapp.com/)
- [shards.info](http://shards.info/)

## Initializing your first app

First of all, you should make a folder for your new project, either from your file manager or using the `mkdir` command.

Crystal comes with a tool to initialize an app or a shard/package.

:::tip
Usage: `crystal init TYPE (DIR | NAME DIR)`
:::

Since you are building a Discord Bot, you are going to initialize that folder you previously made as an app, using: `crystal init app /path/to/folder/`.

```sh
$ crystal init app discordcr-bot
```

:::warning
`TYPE` and `DIR` are required.
:::

This will create the base structure or skeleton of your project.

```sh
$ tree discordcr-bot/
discordcr-bot/
├── LICENSE
├── README.md
├── shard.yml
├── spec
│   ├── discordcr-bot_spec.cr
│   └── spec_helper.cr
└── src
    └── discordcr-bot.cr

2 directories, 6 files
```
