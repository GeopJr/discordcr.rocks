# Installing discordcr

To install discordcr, you only need to add the following snippet in your app's `shard.yml` file:

```yml
dependencies:
  discordcr:
    github: discordcr/discordcr
```

:::tip
If you are unfamiliar with yaml, spacing is important.
:::

Shards allows us to specify versions, branches, releases, commits...

> Full spec: [https://github.com/crystal-lang/shards/blob/master/SPEC.md](https://github.com/crystal-lang/shards/blob/master/SPEC.md)

That means that if the current release of discordcr is missing something that's already on the main branch, you can tell shards to install that branch or that commit like so:

```yml
dependencies:
  discordcr:
    github: discordcr/discordcr
    branch: master
```
or
```yml
dependencies:
  discordcr:
    github: discordcr/discordcr
    commit: 23825f9cc035b36dd6e6810cdab8abb600472ce7
```

Your `shard.yml` should now look like this:

```yml
name: discordcr-bot
version: 0.1.0

authors:
  - your-name-here <your-email-here>

targets:
  discordcr-bot:
    main: src/discordcr-bot.cr

dependencies:
  discordcr:
    github: discordcr/discordcr

crystal: 0.35.1

license: MIT
```

:::tip
Feel free to fill in any additional info on both `shard.yml` and `README.md`
:::

All that's left now is to install it!

```sh
$ shards install
Resolving dependencies
Fetching https://github.com/discordcr/discordcr.git
Installing discordcr (0.4.0)
Writing shard.lock
```
