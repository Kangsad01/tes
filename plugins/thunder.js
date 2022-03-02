let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/Audio/nightcore-thunder.mp3'
conn.sendFile(m.chat, vn, 'nightcore-thunder.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
setTimeout(() => {
        parent.deleteMessage(m.chat, vn)
      }, 30000)
}
handler.help = ['thunder']
handler.tags = ['audio']
handler.command = /^(thunder)$/i
module.exports = handler