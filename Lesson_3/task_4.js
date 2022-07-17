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
    let events = [];
    let cashier = 0;
    let sold_tickets = [];

    const generateId = function () {
        let generatedID = function () {
           return  Array.from(Array(6), () => Math.floor(Math.random() * 36).toString(36)).join('');
        }
        if (generatedID() in sold_tickets.map(t => t.id)) {
            return  generateId();
        } else {
            return generatedID();
        }
    }

    const buyTicket = (event_name) => {
       let event = events.find(e => e['event_name'] === event_name)
       let ticket = function() {
           if (event) {
               cashier += event.ticket_price
              let ticketObj = { id: generateId(), event_name: event.event_name, cost: event.ticket_price}
               sold_tickets.push(ticketObj)
               return ticketObj
           } else {
               return console.log('Event not found')
           }
       }

        return ticket();
    }

    const returnTicket = (ticket_id) => {
        let ticket = sold_tickets.find(s_ticket => s_ticket.id === ticket_id)

        if (ticket) {
            cashier -= ticket.cost
            sold_tickets = sold_tickets.filter(t => ![ticket].includes(t))
            return  ticket
        } else {
            console.log(`Ticket with id ${ticket_id} not found`)
        }
    }

    const createEvent = (event_name, ticket_price) => {
        events.push({event_name: event_name, ticket_price: ticket_price})
        return events;
    };

    const getCashier = () => {
        return cashier
    }

    return {
        createEvent: createEvent,
        buyTicket: buyTicket,
        getCashier: getCashier,
        returnTicket: returnTicket,
    }
}

const ticketWindow = new kupiBilet()
console.log(ticketWindow.createEvent('Concert', 500))
let ticket = ticketWindow.buyTicket('Concert')
console.log(ticketWindow.getCashier())
console.log(ticketWindow.returnTicket(ticket.id))
console.log(ticketWindow.getCashier())




