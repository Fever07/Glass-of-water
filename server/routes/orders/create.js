module.exports = function (req, res) {
    const newOrder = req.body;
    res.json(global.db.addOrder(newOrder));
}