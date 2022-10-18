function getTodayMs() {
    const todayMs = Date.now()
    return todayMs
}


function calculateDelta(day1, day2) {
    const deltaMs = Math.abs(day1 - day2)
    const deltaDays = Math.round(deltaMs / 86400000)
    return deltaDays
}


function parseDateMs(dateString) {
    const dateMs = new Date(dateString)
    return dateMs
}


console.log(calculateDelta(getTodayMs(), parseDateMs('2022-09-20 ')))