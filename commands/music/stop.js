module.exports = {
    name: 'stop',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        queue.destroy();

<<<<<<< HEAD
        message.channel.send(`Music stopped, see you next time 👋`);
=======
        inter.reply({ content: `Music stopped intero this server, see you next time ✅`});
>>>>>>> 15cd70e740c7a7297ce72d61c1cbd1b48182b5e5
    },
};