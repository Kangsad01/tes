let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('amel', '/nsfwfutanari', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.url, 'Tobat banh', wm, 'lagi', `${usedPrefix + command}`, m)
}
handler.help = ['futanari']
handler.tags = ['dewasa']
handler.command = /^(futanari)$/i

module.exports = handler