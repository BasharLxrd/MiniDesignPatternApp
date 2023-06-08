// Iterator pattern
export class TicketIterator {
    constructor(tickets) {
        this.tickets = tickets;
        this.currentIndex = 0;
    }

    next() {
        return {
            value: this.tickets[this.currentIndex++],
            done: this.currentIndex > this.tickets.length
        };
    }
}