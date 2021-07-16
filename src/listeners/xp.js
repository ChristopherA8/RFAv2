module.exports = {
  listen(msg) {
    if (msg.author.bot) return;
    if (msg.channel.id == `798393104901472257`) return; // Welcome

    let score = msg.client.getScore.get(msg.author.id, "586736904771469313");
    if (!score) {
      score = {
        id: `${msg.guild.id}-${msg.author.id}`,
        user: msg.author.id,
        guild: msg.guild.id,
        points: 0,
        level: 1,
        name: msg.author.tag,
      };
    }
    if (!score.name) {
      score.name = msg.author.tag;
    }
    setTimeout(() => {
      let words = msg.content.split(/ +/);
      let wordsCount = words.length;
      if (wordsCount <= 25) {
        score.points += wordsCount;
      } else {
        score.points += 25;
      }
      msg.client.setScore.run(score);
    }, 6000);

    const curLevel = Math.floor(0.3 * Math.sqrt(score.points));
    if (
      score.level < curLevel &&
      msg.channel.id !== `798393104901472257` // Welcome
    ) {
      score.level++;
      msg.reply(`You've leveled up to level **${curLevel}**!`);
    }
    msg.client.setScore.run(score);
  },
};
