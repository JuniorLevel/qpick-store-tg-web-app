import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import process from 'process';
import sequelize from './db.js';
import orderRoutes from './routes/order.routes.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(orderRoutes);

const bot = new TelegramBot(process.env.API_BOT_TOKEN, { polling: true });
const tgAppUrl = process.env.TG_APP_URL;
const webAppUrl = process.env.WEB_APP_URL;

bot.on('message', async msg => {
  const chatId = msg.chat.id;
  if (msg.text === '/start') {
    await bot.sendMessage(chatId, `Здравствуйте, ${msg.chat.first_name}!`);
    await bot.sendMessage(chatId, `Добро пожаловать в наш магазин`);
    await bot.sendMessage(
      chatId,
      'Если хотите воспользоваться расширенной версией сайта, перейдите по ссылке ниже',
      {
        reply_markup: {
          inline_keyboard: [[{ text: 'Перейти на сайт', url: webAppUrl }]],
        },
      },
    );
    await bot.sendMessage(
      chatId,
      'Чтобы совершить покупку не выходя из чата, нажмите на кнопку ниже',
      {
        reply_markup: {
          keyboard: [
            [
              {
                text: 'Совершить покупку',
                web_app: { url: tgAppUrl },
              },
            ],
          ],
        },
      },
    );
  }
  if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data);
      await bot.sendMessage(chatId, 'Вы успешно оформили заказ!');
      data.orderList.map(
        async item =>
          await bot.sendMessage(
            chatId,
            `Имя товара: ${item.productName}, цена: ${item.price}$, количество: ${item.amount}шт.`,
          ),
      );
      setTimeout(async () => {
        await bot.sendMessage(
          chatId,
          `Общая сумма заказа составляет: ${data.totalPrice}$`,
        );
      }, 1500);
      setTimeout(async () => {
        await bot.sendMessage(
          chatId,
          'Спасибо за заказ! С Вами свяжутся в ближайшее время!',
        );
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server was started on ${PORT}`);
});
