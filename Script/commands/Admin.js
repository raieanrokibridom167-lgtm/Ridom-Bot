module.exports = {
  config: {
    name: "admin",
    version: "1.0",
    author: "Sheikh Abir Haque",
    shortDescription: "Show bot admin information",
    category: "info"
  },

  onStart: async function ({ message }) {
    const text = `
👑 BOT ADMIN INFORMATION

📛 Name: Sheikh Abir Haque
📘 Facebook: https://www.facebook.com/share/1DB3u3GbdR/
📱 WhatsApp: +8801772616782

💖 Thanks for using this bot!
    `;

    message.reply(text);
  }
};
