let fs = require('fs')
let chalk = require('chalk')

global.wm = `◈ Made by The.sad.boy01` //UBAH JADI NAMAMU
global.botwm = `◈ Made by The.sad.boy01` //UBAH JADI NAMAMU

global.name = 'Tohru Botz'// nama bot
global.dev = `The.sad.boy01`// developer


global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM', 'https://chat.whatsapp.com/CnQV9lNcHuIENb8SQ9CaYP']
//kalo mau ubah nama owner nya ubah di ../plugins/creator.js
global.owner = ['62895336282144', '6281319944687', '6283143393763', '6288217277973', '6281334177340', '6283128734012', '6289504585790', '16102156479', '6285157489446'] // Letakan nomor kamu disini
global.mods = ['62895336282144', '6281319944687', '6287878505740', '6283128734012'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  amel: 'https://melcanz.com',
  Dehan: 'https://dhnjing.xyz',
  waifupics: 'https://api.waifu.pics',
  xosfor: 'http://xosfor.herokuapp.com',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'kurrxd09',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://api.lolhuman.xyz': 'ed78c137a46873c5b8e5fe3b',
  'https://leyscoders-api.herokuapp.com': 'DestaPrasApi',
  'https://melcanz.com': 'abwAfoce',
  'https://dhnjing.xyz': 'LitRHap',
  'http://xosfor.herokuapp.com': '8uhDyCud',
}
//sosmed owner
global.yt = 'https://youtube.com/channel/UCVv3wC5Q7_juw-d9HepjpOQ' //UBAH JADI LINK YT LU
global.ig = `https://instagram.com/the.sad.boy01` //UBAH JADI LINK IG LU

//donasi
global.donate = `
╭─「  Donasi • Pulsa 」
├❒ tre [+62 895-3362-82144]
╰────

╭─「  Donasi • Non Pulsa 」
├❒ Gopay [0895336282144]
├❒ saweria [https://saweria.co/thesadboy01]
╰────
╭─「  Hubungi 」
├❒ Ingin donasi? Wa.me/62895336282144
╰────` //UBAH JADI NOMER MU

// Sticker WM
global.packname = 'Tohru-Bot'
global.author = '◈ Made by The.sad.boy01'

global.wait = '_*tunggu sedang di proses...*_'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=chrominium-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontname=nosifer&text='
global.fla2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=true&scaleWidth=800&scaleHigh=500&fontname=gemina&text='
global.img = fs.readFileSync('./src/img.jpg')
global.CanvasAPI = '';

global.multiplier = 10 // Semakin tinggi, semakin sulit naik level

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

