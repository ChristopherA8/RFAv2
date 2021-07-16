module.exports = {
  async commandHandler(msg, prefix) {
    if (msg.content.startsWith(prefix)) {
      const args = msg.content.slice(prefix.length).split(/ +/);
      const commandName = args.shift().toLowerCase();
      if (!msg.client.commands.has(commandName)) return;
      const command = msg.client.commands.get(commandName);

      try {
        /*
         * 1. @everyone
         * 2. Member
         * 3. VIP
         * 4. Bot Manager
         * 5. Mature
         * 6. Moderator
         * 7. Admin
         * 8. Head Admin
         * 9. Server Owner
         * 10. Bot Owner
         */
        switch (command.permissions) {
          case 1:
            command.execute(msg, args);
            break;
          case 2:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `612502834205687829` // Member
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 3:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `689321506043461643` // VIP
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 4:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `718854764607176736` // Bot Manager
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 5:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `746601135149809684` // Mature
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 6:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `589899423249858577` // Moderator
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 7:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `604765100104089633` // Admin role
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 8:
            if (
              msg.member.roles.cache.some(
                (role) => role.id == `590312242998673609`
              )
            ) {
              command.execute(msg, args);
              break;
            }
            return;
          case 9:
            if (
              msg.member.id == `183339913008119808` ||
              msg.member.id == "857457116967862292"
            ) {
              // Server Owner
              command.execute(msg, args);
              break;
            }
            return;
          case 10:
            if (msg.member.id == `279032930926592000`) {
              // Bot Owner
              command.execute(msg, args);
              break;
            }
            break;
          default:
            command.execute(msg, args);
            break;
        }
      } catch (error) {
        console.error(error);
        await msg.channel.send(`**Crashlog:** ${error}\n<@279032930926592000>`);
      }
    }
  },
};
