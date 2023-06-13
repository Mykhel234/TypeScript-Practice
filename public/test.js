export class purchase {
    constructor(a, b, c, d) {
        this.items = a;
        this.amount = b;
        this.quantity = c;
        this.isOkay = d;
    }
    report() {
        return `${this.quantity} ${this.items} was purchased for ${this.amount}. prompt delivery: ${this.isOkay}`;
    }
}
