module.exports = {
  event(client) {
    client.on("guildMemberAdd", (join) => {
      if (join.guild.id !== `586736904771469313`) return;
      const channel = join.guild.channels.cache.get(`798393104901472257`);
      channel.send(`Welcome <@${join.id}> to **Rebel Grenades**`);

      let guild = client.guilds.cache.get("586736904771469313");
      let memberCountVC = guild.channels.cache.get("866037800800616478");

      memberCountVC.setName(`Members: ${guild.memberCount}`);
    });
  },
};
