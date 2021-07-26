module.exports = {
  name: 'server',
  description: 'Server informations.',

  execute(client, message) {
    message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
  }
};