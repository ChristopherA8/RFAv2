module.exports = {
  name: "about",
  permissions: 1,
  execute(msg) {
    const { primary } = require("../../colors.json");
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("About Rebel Fleet Admiral")
      .setURL("https://github.com/Chr1sDev/RFAv2")
      .setDescription(
        `The Rebel Fleet Admiral bot is a custom bot made for the Rebel Grenades discord server. Written by <@279032930926592000> entirely in JavaScript using DiscordJS`
      )
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/704877848858460170/6fdf3a18fdb9eb24ca177bc9b1c9ada5.webp"
      )
      .setFooter(
        "Developed by Chr1s (christopher#8888)",
        "https://cdn.discordapp.com/avatars/704877848858460170/6fdf3a18fdb9eb24ca177bc9b1c9ada5.webp"
      )
      .setColor(primary);
    msg.reply(embed);
  },
};
