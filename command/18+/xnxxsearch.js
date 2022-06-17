const { xnxx } = require("../../lib/xnxx")

module.exports = {
  name: "xnxxsearch",
  alias: ["xnxx","xnxxsearch"],
  category: "18+",
  desc: "Search video pekob:v",
  query: "Example : !xnxx doggy style",
  isPremium: true,
  async run({msg, conn},{q}) {
    try{
    let pekob = await xnxx(q)
    let teks = `Xnxx Search\n\nSearch in : ${q}\nUntuk mengambil Media, Example : \n!xnxxdl <url>`
    n = 0
    for(let i of pekob.result){
      teks += `No.${n+=1}\n`
      teks += " ༆ ➪  Title : " + i.title + "\n"
      teks += " ༆ ➪ Duration : " + i.info + "\n"
      teks += " ༆ ➪ Url : " + i.link + "\n\n"
    }
    txt = "```" + teks + "```"
    //conn.sendMessage(msg.from,{image:{url: pekob.result[0].link}, caption:txt},{quoted : msg, adReply : true})
    msg.reply(txt,{adReply : true})
    } catch (e){
      console.log(e)
      msg.reply(e)
    }
  }
}