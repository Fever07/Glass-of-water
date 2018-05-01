const users = require('./users/users');
const orders = require('./orders/orders');

module.exports = () => {
    users.init();
    orders.init();
    return {
        users,
        orders,
    }
};
