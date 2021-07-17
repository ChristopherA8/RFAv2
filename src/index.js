const { Client, Intents } = require("discord.js");
const { prefix, token } = require("../config.json");
const fs = require("fs");

const client = new Client({ intents: [Intents.ALL] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity("+help", { type: "LISTENING" });

  // Run setup
  const files = fs
    .readdirSync(`./src/setup`)
    .filter((file) => file.endsWith(".js"));
  for (const file of files) {
    const { setup } = require(`../src/setup/${file}`);
    setup(client);
  }

  // Run events
  const eventfiles = fs
    .readdirSync(`./src/events`)
    .filter((file) => file.endsWith(".js"));
  for (const file of eventfiles) {
    const { event } = require(`../src/events/${file}`);
    event(client);
  }
});

client.on("guildMemberAdd", (join) => {
  if (join.guild.id !== `586736904771469313`) return;
  const channel = join.guild.channels.cache.get(`798393104901472257`);
  channel.send(`Welcome <@${join.id}> to **Rebel Grenades**`);
});

client.on(`message`, async (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  // Message Listeners
  const files = fs
    .readdirSync(`./src/listeners`)
    .filter((file) => file.endsWith(".js"));
  for (const file of files) {
    const { listen } = require(`../src/listeners/${file}`);
    listen(msg);
  }

  const { commandHandler } = require("./commandHandler.js");
  commandHandler(msg, prefix);
});

client.login(token);
