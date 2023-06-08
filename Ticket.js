// Prototype pattern
export class Ticket {
    getPrice() {
        return this.price;
    }
    clone() {
        return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    }
}
