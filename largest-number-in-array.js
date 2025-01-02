

//Write a function to find the largest number in a given array.



function largestNumber(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNumber([13,7,2,9,5]));
