/*

You have an array of integers in ascending order,
 but it has been rotated at some unknown point 
 (i.e. it has become two separate sorted parts). 
 
 The goal is to efficiently find the smallest 
 element in this array using Binary Search.

 Ex..
Input: [4, 5, 6, 7, 0, 1, 2]
Output: 0


*/


function findMin(arr){
    let left=0;
    let right=arr.length-1;

    while(left < right){
        let mid= Math.floor((left + right) /2);

        if(arr[mid] > arr[right]){
            left = mid + 1;
        }
        else{
            right = mid
        }

    }
    return arr[left]
}

console.log(findMin([4,5,6,7,0,1,2,3]))