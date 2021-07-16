module.exports = {
  name: "pause",
  permission: 1,
  execute(msg) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel) return msg.reply(`Please join a voice channel first!`);
    msg.client.distube.pause(msg);
  },
};
