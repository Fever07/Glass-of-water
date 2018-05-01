const jsf = require('jsonfile');
const generateId = require('../utils/utils').uniqueID;
const Order = require('../models/order');

const ordersPath = 'database/orders/orders.json';

const ordersDriver = {};

const init = function() {
    this.orders = jsf.readFileSync(ordersPath);
}

function getOrders() {
    return this.orders;
}

function getOrder(id) {
    return this.orders[id];
}

function addOrder(order) {
    let id = generateId();
    const ids = Object.keys(this.orders);
    while (ids.indexOf(id) !== -1) {
        id = generateId();
    }
    const newOrder = new Order(id, order);
    const newOrders = {
        ...orders,
        [id]: newOrder
    };
    jsf.writeFileSync(ordersPath, newOrders);
    this.orders = newOrders;
    return newOrder;
}

function editOrder(id, newOrder) {

}

Object.assign(ordersDriver, {
    init,
    getOrders,
    getOrder,
    addOrder,
    editOrder
})

module.exports = ordersDriver;