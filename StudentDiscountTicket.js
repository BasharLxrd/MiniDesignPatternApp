// Decorator pattern
export class StudentDiscountTicket {
    constructor(ticket) {
        this.ticket = ticket;
    }

    getPrice() {
        const discountPercentage = 0.2; // 20% discount
        return this.ticket.getPrice() * (1 - discountPercentage);
    }
}