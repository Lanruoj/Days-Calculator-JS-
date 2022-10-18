// TODAY IN MILLISECONDS
const todayMs = Date.now();
console.log(todayMs);

// TOMORROW IN MILLISECONDS
let tomorrowMs = todayMs + 86400000;
console.log(tomorrowMs);

// TIME DELTAS (DIFFERENCE)
let deltaMs = tomorrowMs - todayMs;
console.log(deltaMs)
let deltaDays = deltaMs / 86400000
console.log(deltaDays)

// GETTING THE DIFFERENCE BETWEEN TWO DATE STRINGS IN ABSOLUTE VALUE
let day1 = new Date('October 18, 2022')
let day2 = new Date('October 31, 2022')
console.log(Math.abs(day1 - day2))
