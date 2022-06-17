let { topupFreeFire } = require("../../lib/freefire")

module.exports = {
  name: "topupff",
  alias: ["topupff"],
  category: "topup game",
  desc: "Topup game Free Fire",
  use: "<id> <nominal>",
  async run({msg, conn},{args}){
    if (!args[0]) return msg.reply('Enter your id freefire')
    if (!args[1]) return msg.reply('Enter the nominal topup')
    const jumlah = Number(args[1])
    const listdm = ["5","12","70","140","355","720"]
    if (listdm.includes(jumlah)) return msg.reply('Enter the topup amount correctly\nlist :\n5 Dm\n12 Dm\n70 Dm\n140 Dm\n355 Dm\!720 Dm')
    const getUser = await topupFreeFire(args[0],jumlah)
    if (!getUser) return msg.reply('User not found')
    let menu = `*TOPUP FREEFIRE ✅*\n\n`
    menu += `*🔖 Nama:* ${getUser.data.userNameGame}\n`
    menu += `*🔖 Nominal:* ${jumlah} Diamond\n`
    menu += `*🔖 Payment:* ${'QRIS'}\n\n`
    menu += `*Are you sure you want to top up?*\n`
    const buttons = [
	   { buttonId: `.gotopup ${args[0]} ${args[1]} ${msg.sender.replace('628','08').split('@')[0]}` , buttonText: { displayText: 'GO TOPUP ✅' }, type: 1 }
	   ]
const buttonMessage = {
   image: {url: getUser.data.product.image},
    caption: menu,
    footer: "Sponsor © DuniaGames",
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(msg.from, buttonMessage, {quoted : msg})
  
  }
}
