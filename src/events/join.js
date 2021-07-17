module.exports = {
  event(client) {
    client.on("guildMemberAdd", (join) => {
      let guild = client.guilds.cache.get("586736904771469313");
      let memberCountVC = guild.channels.cache.get("866037800800616478");

      memberCountVC.setName(`Members: ${guild.memberCount}`);
    });
  },
};
