let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/hentai?apikey=ed78c137a46873c5b8e5fe3b', '', '', m)
}
handler.help = ['hentai']
handler.tags = ['anime']
handler.command = /^(hentai)$/i
handler.premium = true
module.exports = handler