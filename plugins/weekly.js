let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let _timers = (604800000 - (new Date - user.lastweekly))
    let timers = clockString(_timers) 
    if (new Date - user.lastweekly > 604800000) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 20000 💵money, 3 🎁Legendary crate, 🕸️String 500, ⛓️Iron 2000, 🪙Gold 5000`, m)
        user.money += 20000
        user.legendary += 3
        user.iron += 2000
        user.emas += 5000
        user.string += 500
        user.lastweekly= new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
    }
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function button(teks, user) {
    const buttons = []
    
    let claim = new Date - user.lastclaim > 86400000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({claim, monthly, weekly})
    
    if (monthly) buttons.push({buttonId: `.monthly`, buttonText: {displayText: 'Monthly'}, type: 1})
    if (weekly) buttons.push({buttonId: `.weekly`, buttonText: {displayText: 'Weekly'}, type: 1})
    if (claim) buttons.push({buttonId: `.daily`, buttonText: {displayText: 'Claim'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: wm,
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}
