/*
Problem: Sliding Window Maximum
Given an array num and an integer k, find the maximum 
value in every sliding window of size k.


*/

function maxSlidingWindow(num, k) {
    if (!num.length) return [];

    let result = [];
    let deque = []; 

    for (let i = 0; i < num.length; i++) {

        if (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        
        while (deque.length && num[deque[deque.length - 1]] < num[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(num[deque[0]]);
        }
    }

    return result;
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Output: [3,3,5,5,6,7]
