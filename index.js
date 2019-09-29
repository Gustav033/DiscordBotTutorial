const discord = require("discord.js")
const client = new discord.Client();
const config = require("./config.json")
    client.on("ready", () => {
      client.user.setActivity("Jogos")
      console.log(`Bot Logado Na Conta: ${client.user.username}`)
  })
  client.on("message", async message => {
      if(message.author.bot) return;
      let prefix = config.prefix

      if(message.content.startsWith(prefix + "ping")){
          let msg = await message.channel.send("Ping?")
          let userms = msg.createdTimestamp - message.createdTimestamp
          msg.edit("Pong, Ping:" + userms + "ms, Ping Do Bot Com Server" + Math.round(client.ping) + "ms")
      }
  })
client.login(config.token)
