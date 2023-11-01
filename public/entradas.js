let tickets = {
    "New York": 5,
    "Los Angeles": 3,
    "Chicago": 2,
}
function checkIfSoldOut() {
    for (place in tickets) {
        if (!tickets[place]) {
            disableSoldOutButtons(place)

        }
    }
}

function disableSoldOutButtons(place) {
    document.getElementById(place).setAttribute("disabled", true)
    document.getElementById(place).textContent = "Sold Out"
}

function getTickets(place) {
    let noTickets = tickets[place] <= 0
    if (!noTickets) {
        tickets[place] = tickets[place] - 1
        swal("Felicitaciones!", `Haz comprado la entrada a ${place}`, "success")
    }
    checkIfSoldOut()
}
