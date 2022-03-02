let fs = require("fs");
let { MessageType } = require('@adiwajshing/baileys');
const moment = require('moment-timezone')
let handler  = async (m, { conn, text }) => {
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let week = d.toLocaleDateString(locale, { weekday: 'long' });
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const jam = moment.tz('Asia/Jakarta').format('HH')

 let ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
  const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: ucapanWaktu, 
    orderTitle: `Broadcast`,
    thumbnail: fs.readFileSync("./src/logo.jpg"), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = (/bc|broadcast/i.test(text) ? text : '*〔 ' + conn.getName(conn.user.jid) + ' Broadcast 〕*\n\n' + text)
  for (let id of chats) conn.send2Button(id, content, `${week} ${date}\nUptime: ${uptime}\n` + wm, '☰ MENU', '.menu', 'INFO', '.info', ftrol)
  conn.reply(m.chat, `📢 Succes mengirim broadcast ke *${chats.length}* chat`, m)
}
handler.help = ['broadcastf','bcf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastf|bcf)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}