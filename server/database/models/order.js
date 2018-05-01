const orderStatuses = {
    ACTIVE: 'ACTIVE',
    PERFORMING: 'PERFORMING',
    DONE: 'DONE',
}

module.exports = class Order {
    constructor(id, order) {
        this.id = id;
        this.title = order.title || '';
        this.description = order.description || '';
        this.author = order.author || { id: '' };
        this.createdAt = order.createdAt || Date.now();
        this.status = orderStatuses.ACTIVE;

        this.performedBy = [];
    }
}