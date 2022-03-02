let { performance } = require('perf_hooks')
let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let peli = fs.readFileSync('./Ah5.jpeg')
let pelo = fs.readFileSync('./emror.jpeg')
let handler = async (m, { conn }) => {
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `𝙍𝙐𝙉𝙏𝙄𝙈𝙀 :\n${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
					runtime = process.uptime()
					teks = `◈ Made by The.sad.boy01`
					var itsme = `0@s.whatsapp.net`
					var split = `https://github.com/Kangsad01`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
						conn.sendMessage(m.chat, `${kyun(runtime)}`, 'conversation', {thumbnail: pelo, contextInfo:{externalAdReply: {title: `${conn.user.name}`, sourceUrl: 'https://github.com/Kangsad01', body: `${teks}`, thumbnail: peli}}})
				/*	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)*/
}

handler.help = ['runtime']
handler.tags = ['main']
handler.command = /^runtime$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler