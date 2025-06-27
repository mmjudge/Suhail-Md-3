const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_36_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0LFxuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInFFSjkrU3ZmU0tSNjZRcGhRbDRlT0tnc085cTlmS0E1UTd0UkQ2cDhmZ1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhNWUhuWXF1U2NLUTBZSVBROFJub0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWE2NDk3YzctNjI5ZC00MTY3LWE1ZjgtN2Y1ZDJhNmNiZjA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgMTkzLFxuICAgICAgODgsXG4gICAgICAyNCxcbiAgICAgIDkzLFxuICAgICAgMjMsXG4gICAgICAxNjcsXG4gICAgICAwLFxuICAgICAgMTkwLFxuICAgICAgNTgsXG4gICAgICAxODEsXG4gICAgICA3MCxcbiAgICAgIDEyNyxcbiAgICAgIDIyLFxuICAgICAgMTY5LFxuICAgICAgMixcbiAgICAgIDIyMyxcbiAgICAgIDEyMixcbiAgICAgIDEwNCxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICA3LFxuICAgICAgMzIsXG4gICAgICAxMjMsXG4gICAgICAxMDMsXG4gICAgICAxNzgsXG4gICAgICA0NSxcbiAgICAgIDIwNSxcbiAgICAgIDI0NSxcbiAgICAgIDQzLFxuICAgICAgMzksXG4gICAgICAyNSxcbiAgICAgIDkwLFxuICAgICAgMTA4LFxuICAgICAgMTQzLFxuICAgICAgMTg2LFxuICAgICAgMTA2LFxuICAgICAgOTAsXG4gICAgICAyMDcsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeU9sWUlIRUsvbCs4SUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFWc2Y3c0RQMVo5OXdCemd3Y3g0VTFKbExoMDRDWTBtM2hPY0d2bGdmU1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWms0bHNrNjEzYzJBVnA1M2RpbkVTMlRoWjdZdGdReUxuM3JkNnFIcmh6bCtHUG1OUnRoeTlzWCt5VTFvRkttUFFxNHdoZURJZGJQKzVGNmdMUXNBQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaTFUNCtNSkI1VURqU1czR2Q3K2RGcjJSWWZscHBTaFRiUmhVb3l0QUYwYlA4SWUwTTZ2VEtvMlgxUHhkeVJ2ckNxWlh3STNkWktQWWE5RmpDWm4yQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIxMjM1MTk3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM0OTUyOTgwNzUwNDk4OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIxMjM1MTk3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MTA1Mjk3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlwSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXBILmpzb24iOiAie1wia2V5RGF0YVwiOlwiQm5ncXIzRi9iUEdpQ1d0UlZ5TjQ1cm40WWxCV0JBdmIrRlE5WUFkaEN5ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODgzNTg4NDI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcEkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyem52dEQ3eWFMcThLWk5oUXVZTkc0OTBocXMzRGtqdE5wTldNdU40NzRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODM1ODg0MjgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTAyNDI1NzU0MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
