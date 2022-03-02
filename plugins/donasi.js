let fetch = require('node-fetch')
let sawer = global.donate
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
${sawer}
`.trim(), 'Yang donasi dapat pahala', 'Owner', '.owner', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
