let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭「 Tutorial Install Bot 」
│
├❒ *TERMUX*
│
├ pkg install git
├ pkg install mc
├ pkg install ffmpeg
├ pkg install imagemagick
├ pkg install node.js
├ pkg update && pkg upgrade
├ git clone (link sc bot)
├ cd (nama sc bot)
├ npm i @adiwajshing/baileys
├ npm i @npm@latest
├ npm start
└──────────
`.trim(), m)
}
handler.help = ['tutorialinstall']
handler.tags = ['info']
handler.command = /^(tutorialinstall)$/i

module.exports = handler