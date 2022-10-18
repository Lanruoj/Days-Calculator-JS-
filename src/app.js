function getTodayMs() {
    todayMs = Date.now()
    return todayMs
}


function calculateDelta(day1, day2) {
    deltaMs = Math.abs(day1 - day2)
    deltaDays = deltaMs / 86400000
    return deltaDays
}