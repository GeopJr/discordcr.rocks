# discordcr

(The "cr" stands for "creative name".)

discordcr is a minimalist [Discord](https://discordapp.com/) API library for
[Crystal](https://crystal-lang.org/), designed to be a complement to
[discordrb](https://github.com/discordrb/discordrb) for users who want more control
and performance and who care less about ease-of-use.

discordcr isn't designed for beginners to the Discord API - while experience
with making bots isn't *required*, it's certainly recommended. If you feel
overwhelmed by the complex documentation, try
[discordrb](https://github.com/discordrb/discordrb) first and then check back.

Unlike many other libs which handle a lot of stuff, like caching or resolving,
themselves automatically, discordcr requires the user to do such things
manually. It also doesn't provide any advanced abstractions for REST calls;
the methods perform the HTTP request with the given data but nothing else.
This means that the user has full control over them, but also full
responsibility. discordcr does not support user accounts; it may work but
likely doesn't.

> from: [https://github.com/discordcr/discordcr](https://github.com/discordcr/discordcr)

## This guide will cover the following:

- How to install and use discordcr
- How to handle incoming payloads
- How to use cache
- And more!

## Don't know Crystal? Here's some resources:

- [Crystal for Rubyists](http://www.crystalforrubyists.com/) - Free book to bootstrap your Crystal journey
- [Crystal Mastery](https://crystalmastery.io/) - Screencasts for learning Crystal
- [crystal-koans](https://github.com/ilmanzo/crystal-koans) - Learn Crystal by writing unit tests
- [crystal-lang.org](https://crystal-lang.org) - Official language site
- [devdocs.io](https://devdocs.io/crystal/) - API Documentation Browser with Crystal support
- [getgood.at](https://getgood.at/in-a-day/crystal) - Learn Crystal in a Day
- [Programming Crystal](https://pragprog.com/book/crystal/programming-crystal) - PragProg book to start your Crystal journey

> from: [https://github.com/veelenga/awesome-crystal](https://github.com/veelenga/awesome-crystal)

## Carc.in

[Carc.in](https://carc.in/) is an online Crystal, Ruby and C compiler. Many examples here might contain a link to it in an attempt to showcase them in action.

## Notes:

- This guide is heavily inspired by [https://discordjs.guide/](https://discordjs.guide/), show them some love!
- This guide is open-source! Feel free to contribute: [https://github.com/GeopJr/discordcr.rocks](https://github.com/GeopJr/discordcr.rocks)
- This guide is by no means official and some info might be wrong or outdated
