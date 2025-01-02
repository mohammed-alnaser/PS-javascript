

//Write a function to find the smallest number in a given array

function smallestNumber(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNumber([3,7,2,9,5])); 
