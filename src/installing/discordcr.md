# Installing discordcr

Before installing discordcr, you need to first initialize your Crystal app. More on that [here](../initializing.html).

After doing that, you only need to add the following snippet in your `shard.yml` file:

```yml
dependencies:
  discordcr:
    github: discordcr/discordcr
```

> Note: If you are unfamiliar with yaml, spacing is important.

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
