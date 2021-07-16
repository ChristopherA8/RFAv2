module.exports = {
  name: "test",
  permissions: 10,
  execute(msg, args) {
    if (args == "") return msg.reply("Test");
    msg.reply(`Args = [${args.join(", ")}]`);
  },
};
