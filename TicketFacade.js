import { TicketSystem } from "./TicketSystem.js";
import { TicketBuilder } from "./TicketBuilder.js";
// Facade pattern
export class TicketFacade {
    constructor() {
        this.ticketSystem = new TicketSystem();
    }

    sellTicket(seat, row, isVIP, hasDiscount, email) {
        const ticket = new TicketBuilder()
            .setSeat(seat)
            .setRow(row)
            .setVIP(isVIP)
            .setDiscount(hasDiscount)
            .setEmail(email)
            .build();

        this.ticketSystem.addTicket(ticket);
        return ticket;
    }

    getTickets() {
        return this.ticketSystem.getTickets();
    }
}