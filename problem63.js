/*

 Problem: Maximum Number of Events That Can Be Attended
You are given an array of events, where each event is represented as a pair [startDay, endDay],
 indicating the days on which the event starts and ends (inclusive). You can attend at most one event per day. 
 Your goal is to find the maximum number of events you can attend.

*/

function maxEvents(events) {
    events.sort((a, b) => a[1] - b[1]); 
    let attendedDays = new Set();
    let count = 0;

    for (let [start, end] of events) {
        for (let day = start; day <= end; day++) {
            if (!attendedDays.has(day)) {
                attendedDays.add(day);
                count++;
                break; 
            }
        }
    }
    
    return count;
}

console.log(maxEvents([[1,2], [2,3], [3,4], [1,2]])); // Output: 4
