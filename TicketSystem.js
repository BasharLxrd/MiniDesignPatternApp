// Singleton pattern
export class TicketSystem {
    constructor() {
        if (TicketSystem.instance) {
            return TicketSystem.instance;
        }
        TicketSystem.instance = this;
        this.tickets = [];
        return this;
    }

    addTicket(ticket) {
        this.tickets.push(ticket);
    }

    getTickets() {
        return this.tickets;
    }
}