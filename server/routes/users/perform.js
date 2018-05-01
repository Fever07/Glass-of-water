module.exports = function (req, res) {
    const user = req.body.user;
    const order = req.body.order;
    let dbUser = db.users.getUser(user.id);
    let dbOrder = db.orders.getOrder(order.id);
    let newPerforms;
    if (dbUser.performs.length > 0) {
        const index = dbUser.performs.indexOf(order.id);
        newPerforms = dbUser.performs.slice();
        if (index === -1) {  
            newPerforms.push(order.id);
        } 
    } else {
        newPerforms = [order.id];
    }
    dbUser = {
        ...dbUser,
        performs: newPerforms
    };
    db.users.updateUser(user.id, dbUser);
    res.json(dbUser);
}