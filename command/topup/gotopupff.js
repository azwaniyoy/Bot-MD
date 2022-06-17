let { payDiamond , topupFreeFire } = require("../../lib/freefire")

module.exports = {
  name: "gotopup",
  alias: ["gotopup"],
  category: "topup game",
  async run({msg, conn},{ args }){
    if(!args[0]) throw "Enter your id"
    if(!args[1]) throw "Enter the nominal topup"
    const json = await topupFreeFire(args[0], args [1])
    if(!msg.sender.startsWith('628')) return msg.reply("Maaf, lu olang ngentot")
    const getpay = await payDiamond(json, args[3])
    txt1 = "*Scan Qr Code!*\n\n"
    txt = ` • Nama : ${json.data.userNameGame}\n`
    txt += ` • Nominal : ${json.data.item.name}\n`
    txt += ` • Price : ${json.data.price}\n`
    txt += ` • Price Default : ${json.data.product.priceDefault}\n`
    txt += ` • Payment : ${'QRIS'}\n\n`
    txt += "PLEASE SCAN THE QR CODE!"
    teks = txt1 + "```" + txt + "```"
    conn.sendFile(msg.from,getpay.qrCode, "",teks, msg)
  }
}