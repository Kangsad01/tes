let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('amel', '/randomwp', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.result, 'Nieh banh walppapernya', wm, 'random wp again', `${usedPrefix + command}`, m)
}
handler.help = ['wallpaper']
handler.tags = ['fun']
handler.command = /^(wallpaper)$/i

module.exports = handler

