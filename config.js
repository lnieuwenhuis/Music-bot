module.exports = {
    app: {
        px: '!',
        token: 'OTc0NzM0NzUwOTczNTgzNDAw.GbHnQ2.mM7DwRoDofG9xyf4WEZTIxMFL_iN-g7eIQsAvg',
        playing: 'with ur mom'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
