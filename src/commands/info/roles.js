module.exports = {
  name: "roles",
  permissions: 1,
  execute(msg) {
    const { primary } = require("../../colors.json");
    const { MessageEmbed } = require("discord.js");
    let roles = "";
    msg.guild.roles.cache.map((r) =>
      r.name != "@everyone" ? (roles += `${r} `) : ""
    );
    const embed = new MessageEmbed()
      .setTitle(`All Roles`)
      .setColor(primary)
      .setDescription(roles ? roles : "No Roles");
    msg.reply(embed);
  },
};
