import { TicketFacade } from './TicketFacade.js';
import { TicketBuilder } from './TicketBuilder.js';
import { TicketIterator } from './TicketIterator.js';
import { StudentDiscountTicket } from './StudentDiscountTicket.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const facade = new TicketFacade();

function sellTicket() {
    rl.question('Enter seat number: ', (seat) => {
        rl.question('Enter row number: ', (row) => {
            rl.question('Is it VIP (y/n)? ', (isVIP) => {
                rl.question('Does the customer have a discount (y/n)? ', (hasDiscount) => {
                    if (hasDiscount.toLowerCase() === 'y') {
                        rl.question('Enter customer email: ', (email) => {
                            const baseTicket = new TicketBuilder()
                                .setSeat(seat)
                                .setRow(row)
                                .setVIP(isVIP === 'y')
                                .setDiscount(false)
                                .setEmail(email)
                                .build();

                            const ticket = new StudentDiscountTicket(baseTicket);
                            console.log('Ticket sold:', ticket);
                            console.log('Ticket price:', ticket.getPrice());
                            facade.sellTicket(ticket);
                            chooseAction();
                        });
                    } else {
                        const ticket = facade.sellTicket(seat, row, isVIP === 'y', false, '');
                        console.log('Ticket sold:', ticket);
                        console.log('Ticket price:', ticket.getPrice());
                        chooseAction();
                    }
                });
            });
        });
    });
}



function displayTickets() {
    const tickets = facade.getTickets();
    console.log('Tickets:');
    const ticketIterator = new TicketIterator(tickets);
    while (true) {
        const { value, done } = ticketIterator.next();
        if (done) {
            break;
        }
        console.log(value);
    }
    chooseAction();
}

function chooseAction() {
    rl.question('Choose an action (sell/display/exit): ', (action) => {
        if (action.toLowerCase() === 'sell') {
            sellTicket();
        } else if (action.toLowerCase() === 'display') {
            displayTickets();
        } else if (action.toLowerCase() === 'exit') {
            rl.close();
        } else {
            console.log('Invalid action');
            chooseAction();
        }
    });
}

chooseAction();
