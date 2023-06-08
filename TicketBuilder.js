import { Ticket } from './Ticket.js';

export class TicketBuilder {
    constructor() {
        this.ticket = new Ticket();
    }

    setSeat(seat) {
        this.ticket.seat = seat;
        return this;
    }

    setRow(row) {
        this.ticket.row = row;
        return this;
    }

    setVIP(isVIP) {
        this.ticket.isVIP = isVIP;
        return this;
    }

    setDiscount(hasDiscount) {
        this.ticket.hasDiscount = hasDiscount;
        return this;
    }

    setEmail(email) {
        this.ticket.email = email;
        return this;
    }

    build() {

        const basePrice = 10;
        const vipPriceMultiplier = 1.5;
        const seatPriceMultiplier = 1.2;

        let price = basePrice;

        if (this.ticket.isVIP) {
            price *= vipPriceMultiplier;
        }

        if (this.ticket.seat === 'A1' || this.ticket.seat === 'B2' || this.ticket.seat === 'C3') {
            price *= seatPriceMultiplier;
        }

        this.ticket.price = price;

        return this.ticket;
    }
}