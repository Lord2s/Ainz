const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "arcano",
    aliases: ["arcano"],
    author: " Aesther ", 
    version: "2.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝙻𝙾𝙰𝙳𝙸𝙽𝙶......⚜ ";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '🌿✨𝐒𝐎𝐍𝐈𝐂🍀🎀',
          gender: '𝗕𝗢𝗬',
          hobby: '𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥🏈',
          relationship: '𝐄𝐧 𝐜𝐨𝐮𝐩𝐥𝐞❤✨🎀 𝐚𝐯𝐞𝐜 𝐌𝐀𝐑𝐈𝐀𝐌 𝐊𝐎𝐍𝐄🌿❤🍀',
          facebookLink: 'ʚɸɞhttps://www.facebook.com/profile.php?id=100090405019929.ʚɸɞ',
          bio: '🍀✨𝐃𝐚𝐧𝐢𝐞𝐥❦𝐔𝐜𝐡𝐢𝐰𝐚✨🍀 👮𝐏𝐨𝐥𝐢𝐜𝐞 𝐔𝐜𝐡𝐢𝐰𝐚🍀𝐒𝐨𝐜𝐢𝐚𝐥𝐞🍀𝐃𝐞 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤👮'
        };

        const videoUrl = 
["https://i.imgur.com/ZpgBKGA.mp4",
"https://i.imgur.com/h6J9tkb.mp4",
"https://i.imgur.com/RmMI3dC.mp4",
"https://i.imgur.com/jeyjWuk.mp4",
"https://i.imgur.com/HIWaV6d.mp4",
"https://i.imgur.com/BXmgByZ.mp4",
"https://i.imgur.com/wuo18rR.mp4",
"https://i.imgur.com/C4neV9i.mp4",
"https://i.imgur.com/pdr6e4T.mp4",
"https://i.imgur.com/OAmV2Wr.mp4",
"https://i.imgur.com/gPl8sV2.mp4",
"https://i.imgur.com/nU8Gsyn.mp4",];
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
          𝗼𝘄𝗻𝗲𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻🔬:
❍⌇─➭ 
(◍•ᴗ•◍)𝗡𝗔𝗠𝗘 : $ 𝐑𝐈𝐂𝐇𝐀𝐑𝐃
❍⌇─➭ 
♀𝗚𝗘𝗡𝗥𝗘♂: $ 𝐁𝐎𝐘
❍⌇─➭ 
🏓𝗛𝗢𝗕𝗕𝗬⛹‍♂: $ 𝐁𝐀𝐒𝐊𝐄𝐓
❍⌇─➭
𝗥𝗘𝗟𝗔𝗧𝗢𝗡𝗦𝗛𝗜💞:$ 𝐔𝐍𝐃𝐄𝐅𝐈𝐍𝐄𝐃 
❍⌇─➭ 
 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞🔗: $ https://www.facebook.com/profile.php?id=61559119588245
❍⌇─➭ 
      ◈ 𝗦𝗧𝗔𝗧𝗨𝗦 ◈: $ 🇨🇲𝐀𝐑𝐂𝐀𝐍𝐎 𝐌𝐀𝐋𝐈𝐆𝐍𝐔𝐈𝐒 💯😃 𝐔𝐍 𝐏𝐀𝐒𝐒𝐈𝐎𝐍𝐍É 𝐃𝐄 𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐈𝐄
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();
        
        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };
