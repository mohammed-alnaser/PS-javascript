/*
Given an array height representing the elevation map where the width of each bar is 1,
 compute how much water can be trapped after raining.

*/

function trap(height) {
    if (!height.length) return 0;
    
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }

    return water;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
