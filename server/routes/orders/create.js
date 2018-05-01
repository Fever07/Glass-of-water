module.exports = function (req, res) {
    res.json(db.orders.addOrder(req.body));
}