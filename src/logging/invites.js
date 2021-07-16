module.exports = {
  log(client) {
    const { channels } = require("../../config.json");
    const { embed } = require("../helpers/embed.js");
    const { secondsToHms } = require("../helpers/conversions.js");

    client.on("inviteCreate", (invite) => {
      if (invite.guild.id !== "586736904771469313") return;
      const channel = invite.guild.channels.cache.get(channels.auditLog);
      // embed(author, authorImage, title, description, fields, footer, image, color, thumbnail)
      let maxUses = invite.maxUses;
      if (invite.maxUses == "0") maxUses = "no limit";
      channel.send(
        embed(
          "Invite Created",
          null,
          null,
          null,
          [
            { name: "URL", value: `${invite.url}`, inline: false },
            { name: "Creator", value: `${invite.inviter}`, inline: false },
            { name: "Max Uses", value: `${maxUses}`, inline: true },
            {
              name: "Duration",
              value: `${secondsToHms(invite.maxAge)}`,
              inline: true,
            },
          ],
          null,
          null,
          "#47a8e8",
          null
        )
      );
    });
  },
};
