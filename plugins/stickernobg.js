const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const axios = require('axios')
const WSF = require('wa-sticker-formatter')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas stiker dengan perintah ${usedPrefix + command}`
      let imgbase64 = img.toString('base64')
      let data = await axios.post('https://salisganteng.pythonanywhere.com/api/remove-bg', {
          'api-key': 'salisheker',
          'image': imgbase64,
      })
      wsf = new WSF.Sticker(data.data.image, {
        pack: global.packname,
        author: global.author,
        crop: false,
      })
    } else if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas gambar dengan perintah ${usedPrefix + command}`
      let imgbase64 = img.toString('base64')
      let data = await axios.post('https://salisganteng.pythonanywhere.com/api/remove-bg', {
          'api-key': 'salisheker',
          'image': imgbase64,
      })
      wsf = new WSF.Sticker(data.data.image, {
        pack: global.packname,
        author: global.author,
        crop: false,
      })
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else throw 'URL tidak valid!'
    }
  } catch (e) {
    throw e
  }
  finally {
    if (wsf) {
      await wsf.build()
      const sticBuffer = await wsf.get()
      if (sticBuffer) await conn.sendMessage(m.chat, sticBuffer, MessageType.sticker, {
        quoted: m,
        mimetype: 'image/webp'
      })
    }
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    // else throw `Gagal${m.isGroup ? ', balas gambarnya!' : ''}`
  }
}
handler.help = ['stickernobg', 'stickernobg <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(wm)?nobg$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
