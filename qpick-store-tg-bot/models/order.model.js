import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderList: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  formData: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Order;
