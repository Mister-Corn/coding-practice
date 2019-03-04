function howManySundays(n, startDay) {
    // inputs: n - number, startDay - string
    // output: number of Sundays in the
    // next n days after startDay
    // look at the calendar, start from startDay,
    // count each box in the calendar
    // circle the next n days,
    // put special circles each Sunday
    // then count the number of Sundays, which will be the answer
    // ---Translating to code
    // Count the days
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const startIndex = days.indexOf(startDay) + 1;
    // console.log('startDay', startDay, 'startIndex', startIndex);
    let numberOfSundays = 0;
    for (let i = startIndex; i < n + startIndex; i++) {
        // console.log(`When i == ${i}, days[i] == ${days[i % 7]}`);
        if (days[i % 7] === 'Sunday') {
            numberOfSundays++;
        }
    }
    return numberOfSundays;
}

function howManySundaysModified(n, startDay) {
    const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
    const daysToSunday = days.indexOf(startDay) + 1;
    return n >= daysToSunday ? Math.floor((n - daysToSunday) / 7) + 1 : 0;
}


const argsArr = [
    [9, 'Saturday', 2],
    [7, 'Sunday', 1],
    [6, 'Monday', 1],
];

for (const args of argsArr) {
    console.log('Expected:', args[2]);
    const toPassIn = [args[0], args[1]];
    console.log(howManySundays(...toPassIn));
console.log(howManySundaysModified(...toPassIn));
}

/*
 * If n = 9, startDay = 'Saturday',
 * then output should be 2
 */