 export class purchase{
    readonly items: string;
   private amount: number;
    public quantity: number;
    isOkay: boolean;

    constructor(a: string, b: number, c: number, d: boolean){
        this.items = a;
        this.amount = b;
        this.quantity = c;
        this.isOkay = d
    }

    report(){
        return `${this.quantity} ${this.items} was purchased for ${this.amount}. prompt delivery: ${this.isOkay}`
    }

}