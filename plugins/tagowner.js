let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *@62895336282144 Ada yang memanggil anda :V*`, m)

  conn.reply(m.chat, `
Kak ᴛʜᴇ.ꜱᴀᴅ.ʙᴏʏ01⁩ (@62895336282144  ), Ada Yang Manggil anda😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@62895336282144 /i
handler.command = new RegExp

module.exports = handler