let { MessageType } = require('@adiwajshing/baileys')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid} *BOT AKAN KELUAR DALAM WAKTU 11JAM 25MENIT*`).then(() => {
        var jumlahHari = 86400000 * 0.3
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendMessage(res.gid, `Halo,\n *${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, Saya baru saja bergabung di grup ini diundang oleh wa.me/${m.sender.split`@`[0]}
    
ketik *#menu* untuk melihat daftar perintah`, MessageType.text, { contextInfo: { externalAdReply :{
       mediaUrl: ' ',
       mediaType: 4,
       title: 'The.sad.boy01 ×͜×',
       body: 'Whatsapp Developer Bot',
       thumbnailUrl: 'https://telegra.ph/file/b65957f39a82395bb09d0.jpg',
sourceUrl: 'https://wa.me/62895336282144?text=Assalamualaikum'
}}})
}
handler.help = ['join <linkgrup>']
handler.tags = ['main', 'update']
handler.command = /^join$/i

handler.rowner = true

module.exports = handler