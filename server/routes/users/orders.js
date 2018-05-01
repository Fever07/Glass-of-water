const mapOrder = require('../../mappers/order-map');

module.exports = function (req, res) {
    const userId = req.query.userId;
    const ordersArr = Object.values(db.orders.getOrders());
    res.json(
        ordersArr
        .filter(order => order.author.id === userId)
        .map(order => mapOrder(order))
    );
}