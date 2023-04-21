class Customer {
    constructor(userId, first, last) {
        this.userId = userId;
        this.first = first;
        this.last = last;
        this.itemsPurchased = [];
        this.transactions = [
             { transactionId: 1, transactionTotal: 433 },
             { transactionId: 2, transactionTotal: 289 },
             { transactionId: 3, transactionTotal: 99 },
             { transactionId: 4, transactionTotal: 600 }
        ];
 }
    getTotal() {
        return this.transactions.reduce((a,b) => ({transactionTotal: a.transactionTotal + b.transactionTotal}, 0)).transactionTotal;
 }
}
 
let bilbo = new Customer(1, "Bilbo", "Baggins");
bilbo.getTotal(); // 1421