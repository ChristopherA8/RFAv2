module.exports = {
  name: "shuffle",
  permission: 1,
  execute(msg) {
    if (msg.client.distube.getQueue(msg)) {
      msg.client.distube.shuffle(msg);
      msg.reply("Queue Shuffled");
    } else {
      msg.reply("Empty Queue");
      return;
    }
  },
};
