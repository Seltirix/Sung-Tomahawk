module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Aucun résultat trouver sur youtube pour ${query} !`);
};