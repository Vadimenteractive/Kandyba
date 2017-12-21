var tickets = [[],[]];
insertTickets()
function insertTickets(numberTickets) {
    numberTickets = prompt('Введите колличество билетов проданное за кругб для расчёта нажмите ОТМЕНА или введите пустую строку');
    if (parseInt(numberTickets)) {
        console.log(true);
        tickets[0].push(numberTickets);
        insertTickets();
    } else {
        console.log(false);
        calculation()}
}

function calculation() {
    var revenue = 0;
    var list = "<h1>Сводка о колличестве проданных билетов и выручке:</h1>" + "<ol>";
    for (var round in tickets[0]) {
        revenue += parseInt(tickets[0][round]);
        tickets[1].push(tickets[0][round] * 3);
        list += "<li>" + "круг; " + tickets[0][round] + " билет(ов):" + (tickets[0][round] * 3) + "грн." + "</li>"
    }

    list += "<ol>" + "<p>Всего:</p>" + "<p>" + revenue + "шт. билетов " + (revenue * 3) + "грн." + "</p>";
    document.write(list)
}
