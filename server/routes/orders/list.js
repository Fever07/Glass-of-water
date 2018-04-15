module.exports = function (req, res) {
    res.json(Object.keys(orders).map(key => orders[key]));
}
