import Order from '../models/order.model.js';

class OrderController {
  async createOrder(req, res) {
    try {
      if (!req.body)
        return res.status(500).json({ message: 'Некорректные данные' });
      await Order.sync({ force: false });
      await Order.create(req.body);
      return res.status(200).json(req.body);
    } catch (e) {
      console.error('Ошибка при отправке данных', e);
      return res.status(500).json({ message: 'Ошибка при отправке данных' });
    }
  }
}

export default new OrderController();
