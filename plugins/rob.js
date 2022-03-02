let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    let targetuser =  m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
    if(!m.mentionedJid || !args[0]) throw 'Tag salah satu, atau ketik Nomernya!!'
    let user = global.db.data.users[m.sender]
    let iser = global.db.data.users[targetuser]
    let randomizer = `${Math.floor(Math.random() * 100)}`.trim()
    let hasil = iser.money % 3
        if (global.db.data.users[m.sender].money < 2500) {
        if (randomizer < 50) {
        // berhasil cok
        user.money += hasil
        iser.money -= hasil
        conn.reply(m.chat, `Kamu berhasil `.trim(), m)
        } else if (randomizer == 0) {
        //ditangkap polisi
        user.money -= hasil
        conn.reply(m.chat, `Kamu Di tangkap Satpoll PP `.trim(), m)
        } else {
        // gagal
        user.money -= 2500
        conn.reply(m.chat, `Kamu Gagal `.trim(), m)
        }
    } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Mencuri`.trim(), m)

}



handler.help = ['rob <args>']
handler.tags = ['xp']
handler.command = /^rob$/

module.exports = handler