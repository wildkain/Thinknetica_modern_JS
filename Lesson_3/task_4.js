// 4. Система продажи билетов
//
// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */
//
// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */


const kupiBilet = function () {
    let events = {};
    let cashier = 0;
    let sold_tickets = {};

    const generateId = function () {
        let generatedID = function () {
            return Array.from(Array(6), () => Math.floor(Math.random() * 36).toString(36)).join('');
        }

        // recursive case
        // let id = generatedID();
        //
        // return Boolean(sold_tickets[id]) ? generateId() : id;

        // do/while case
        let id;
        do {
            id = generatedID()
        } while (Boolean(sold_tickets[id]))
        return id;
    }

    const buyTicket = (event_name) => {
        let event = events[event_name]
        let ticket = function () {
            if (event) {
                cashier += event.ticket_price
                let ticketObj = {id: generateId(), event_name: event.name, cost: event.ticket_price}

                sold_tickets[ticketObj.id] = ticketObj
                return ticketObj
            } else {
                return console.log('Event not found')
            }
        }

        return ticket();
    }

    const returnTicket = (ticket_id) => {
        let ticket = sold_tickets[ticket_id]

        if (ticket) {
            cashier -= ticket.cost
            delete sold_tickets[ticket_id]
            return ticket
        } else {
            console.log(`Ticket with id ${ticket_id} not found`)
        }
    }

    const createEvent = (event_name, ticket_price) => {
        events[event_name] = {name: event_name, ticket_price: ticket_price}
        return events;
    };

    const getCashier = () => {
        return cashier
    }

    const soldTicketList = () => {
        return sold_tickets
    }

    const isValidTicket = (ticket_id) => {
        return sold_tickets[ticket_id] ? true : false
    }

    return {
        createEvent: createEvent,
        buyTicket: buyTicket,
        getCashier: getCashier,
        returnTicket: returnTicket,
        sold_tickets: soldTicketList,
        isValidTicket: isValidTicket,
    }
}

const ticketWindow = new kupiBilet()
console.log(ticketWindow.createEvent('Concert', 500))
let ticket = ticketWindow.buyTicket('Concert')
let ticket2 = ticketWindow.buyTicket('Concert')
console.log(ticketWindow.getCashier())
console.log(ticketWindow.returnTicket(ticket.id))
console.log(`ticket ${ticket.id} is valid?: ` + ticketWindow.isValidTicket(ticket.id))
console.log(`ticket ${ticket2.id} is valid?: ` + ticketWindow.isValidTicket(ticket2.id))
console.log(ticketWindow.getCashier());




