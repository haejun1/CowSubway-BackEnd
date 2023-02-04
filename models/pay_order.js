const Sequelize = require('sequelize');

class Pay_order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'Pay_order',
        tableName: 'pay_order',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = Pay_order;
