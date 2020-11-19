---
home: true
heroImage: images/icon.png
tagline: A guide for discordcr, the Discord API wrapper for Crystal.
actionText: Quick Start →
actionLink: /guide/
features:
- title: Minimalist
  details: Just enough to get you started!
- title: Customization
  details: Full control over everything!
- title: Performance
  details: Super fast, super low on resources!
footer: Made with ❤️
---

<div class="home features" style="margin-top: 0px !important;justify-content: space-around !important;align-items: center !important;">

```crystal
require "discordcr"

token = "MjI5NDU5NjgxOTU1NjUyMzM3"

client = Discord::Client.new(
  token: "Bot #{token}",
  client_id: 229459681955652337_u64
)

client.on_message_create do |payload|
  if payload.content.starts_with? "!ping"
    client.create_message(
      payload.channel_id, "Pong!"
    )
  end
end

client.run
```

  <div is="discord-messages" style="margin: 0.85rem 0;">
      <discord-message>
          !ping
      </discord-message>
      <discord-message :bot="true" author="discordcr-bot" avatar="images/icon.png" role-color="#776791">
          pong
      </discord-message>
      <discord-message>
          Thanks!
      </discord-message>
  </div>
</div>
