const TelegramBot = require("node-telegram-bot-api");

async function main(event) {
  try {
    console.log(event);
    const token = process.env.TELEGRAM_TOKEN;
    const bot = new TelegramBot(token);
    let globalResolve = () => {};

    bot.on("text", async (msg) => {
      await bot.sendMessage(msg.chat.id, `Received: ${msg.text}`);
      globalResolve("ok");
    });

    await new Promise((resolve) => {
      globalResolve = resolve;
      // processUpdate does not return Promise
      // thats why we need this workaround
      bot.processUpdate(event);
      setTimeout(() => {
        resolve("timeout");
      }, 29000);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
    return {
      body: err,
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    };
  }

  console.log("Finish");
  return {
    body: {},
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
  };
}

exports.main = main;
