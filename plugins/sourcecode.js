let fetch = require('node-fetch')
let package = require('../package.json')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'source code')).buffer(), `
Sc Bot

Bot ini menggunakan sc : ${(package.homepage ? package.homepage.url || package.homepage : '[unknown github url]')}
Jangan lupa kasih star 
`.trim(), 'Scrip original by Nurutomo, M imam adi, Ariffb and BochilGaming', 'Pemilik bot', '.rowner', m)

handler.help = ['sc', 'sourcecode', 'src']
handler.tags = ['info']

handler.command = /^(sc|sourcecode|src)$/i
  
module.exports = handler
