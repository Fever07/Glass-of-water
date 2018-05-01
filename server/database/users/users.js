const jsf = require('jsonfile');
const User = require('../models/user');

const usersPath = 'database/users/users.json';

const usersDriver = {}

const init = function() {
    this.users = jsf.readFileSync(usersPath);
}

function getUsers() {
    return this.users;
}

function getUser(id) {
    return this.users[id];
}

function addUser(user) {

}

function userPerform(userId, orderId) {
    const user = this.users[userId], order = this.orders[orderId];
    const performs = user.performs;
    if (performs && performs.length > 0) {
        performs.push(orderId);    
    }
    const newUser = {
        ...user,
    }
}

function updateUser(userId, user) {
    this.users = {
        ...this.users,
        [user.id]: user
    }
    jsf.writeFileSync(usersPath, this.users);
}

Object.assign(usersDriver, {
    init,
    getUsers,
    getUser,
    addUser,
    userPerform,
    updateUser
})

module.exports = usersDriver;