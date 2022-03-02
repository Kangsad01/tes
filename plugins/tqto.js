/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let fs = require('fs')
let handler = async (m, { conn, args, usedPrefix:_p, command }) => {

let tqto = `
*BIG THANKS TO*

Adiwajshing
https://github.com/adiwajshing
Nurutomo: 
https://github.com/Nurutomo
Istikmal: 
https://github.com/BochilGaming
Ariffb: 
https://github.com/Ariffb25
Ilman: 
https://github.com/ilmanhdyt
Amirul: 
https://github.com/amiruldev20
The.sad.boy01: 
https://github.com/Kangsad01
Kanna:
https://github.com/kannachann
Putra:
https://github.com/putragans9
pasyaganz:
https://github.com/pasyaganz
beniismail:
https://github.com/botstylee
Adi-Officiall
https://github.com/Adi-OfficialL
Dll
`
let sr = fs.readFileSync('./thumb/tqto.jpg')

conn.send2ButtonLoc(m.chat, sr, tqto, wm, 'Owner', `${_p}owner`, 'Rules', `${_p}rules`, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i

module.exports = handler
