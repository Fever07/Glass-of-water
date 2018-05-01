module.exports = class User {
    constructor(id, user) {
        this.id = id;
        this.username = user.username || '';
        this.password = user.password || '';
        this.name = user.name || '';
        this.age = user.age;
        this.info = user.info || '';

        this.performs = [];
    }
}