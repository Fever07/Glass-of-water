const jsf = require('jsonfile');
const generateId = require('./utils');

const ordersPath = 'database/orders.json';
const usersPath = 'database/users.json';

function addOrder(order) {
    let id = generateId();
    const ids = Object.keys(orders);
    while (ids.indexOf(id) !== -1) {
        id = generateId();
    }
    const newOrder = {
        id,
        ...order
    };
    const newOrders = {
        ...orders,
        [id]: newOrder
    };
    jsf.writeFileSync(ordersPath, newOrders);
    global.orders = newOrders;
    return newOrder;
}

function editOrder(id, newOrder) {

}

function userPerform(userId, orderId) {
    const user = users[userId], order = orders[orderId];
    const performs = users.performs;
    if (performs && performs.length > 0) {
        performs.push(orderId);    
    }
    const newUser = {
        ...user,
    }
}

function updateUser(userId, user) {
    const newUsers = {
        ...global.users,
        [user.id]: user
    }
    jsf.writeFileSync(usersPath, newUsers);
}

function init() {
    global.orders = jsf.readFileSync(ordersPath);
    global.users = jsf.readFileSync(usersPath);
    return {
        addOrder,
        editOrder
    }
}

module.exports = init;