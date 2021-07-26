module.exports = {
    name: 'Petit-golem',
    description: 'Server informations.',
  
    execute(client, message) {
      message.channel.send(`Un petit golem vient d'apparaitre pour l'affronter écris =engage-petit-golem`);
    }
  };