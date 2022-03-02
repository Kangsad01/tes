let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  try {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(' _*Sedang Diproses tunggu 8-10 detik*_ ')
  let res = `https://chikka-web.herokuapp.com/api/bot/gfx3?text1=${response[0]}&text2=${response[1]}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'phlogo.jpg', ` _*Done!*_ `, m, false)
 } catch (e)  {
 console.error(e)
   throw e
}
}
handler.help = ['gfxgirlsad'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(gfxgirlsad)$/i
handler.register = true
handler.limit = true
module.exports = handler