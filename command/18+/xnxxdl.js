const { xnxxdl } = require("../../lib/xnxx")

module.exports = {
  name: "xnxxdl",
  alias: ["xnxxdl"],
  category: "18+",
  desc: "Search video pekob:v",
  query: "Example : !xnxxdl <Url>",
  isPremium: true,
  async run ({conn, msg},{q, args}){
    try{
      let pekob = await xnxxdl(args[0])
      i = pekob.result
      let txt = "Xnxx Downloader..\n\n"
      txt += " ༆ ➪ Title : " + i.title + '\n'
      txt += " ༆ ➪ Duration : " + i.duration + '\n'
      txt += " ༆ ➪ Url : " + i.URL + ""
      teks = "```" + txt + "```"
      conn.sendMessage(msg.from,{image:{url: i.image}, caption:teks},{quoted : msg, adReply : true})
      conn.sendMessage(msg.from,{video:{url: i.files.low}, caption:"*Done*"},{quoted : msg, adReply : true})
      
    } catch (e){
      console.log(e)
      msg.reply(e)
    }
    
  }
}