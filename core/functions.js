function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function journal_log(text) {
    journal = document.getElementById("eventsLog");
    journal.value +=  text + '\r\n';
}
