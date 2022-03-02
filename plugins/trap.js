let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('amel', '/nsfwtrap', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.url, 'Berbatang...', global.botwm, 'lagi', `${usedPrefix + command}`, m)
}
handler.help = ['trap']
handler.tags = ['hentai']
handler.command = /^(trap)$/i
handler.premium = true

module.exports = handler