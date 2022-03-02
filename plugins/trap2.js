let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/anime/random?nsfw=trap&apikey=hardianto', '', '', m)
}
handler.help = ['trap2']
handler.tags = ['hentai']
handler.command = /^(trap2)$/i

module.exports = handler