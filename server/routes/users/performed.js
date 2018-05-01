const mapOrder = require('../../mappers/order-map');

module.exports = function (req, res) {
    const user = db.users.getUser(req.query.userId);
    res.json(
        user.performs ?
        user.performs
        .map(performId => db.orders.getOrder(performId))
        .map(order => mapOrder(order)) :
        []
    );
}