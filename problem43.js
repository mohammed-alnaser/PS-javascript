/*
You are given an ascending array of integers, 
such that each number appears twice except for one number
 that appears only once. The task is to find this unique
  number as efficiently as possible (O(log n)).

*/


function singleNonDuplicate(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (mid % 2 === 1) mid--;

        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 8, 8])); // Output: 4
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // Output: 10
console.log(singleNonDuplicate([1, 1, 2])); // Output: 2
console.log(singleNonDuplicate([0, 1, 1])); // Output: 0
