module.exports = function(order) {
    return {
        ...order,
        author: {
            ...order.author,
            username: db.users.getUser(order.author.id).username
        }
    };
}