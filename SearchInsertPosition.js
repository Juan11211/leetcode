// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length
    while(left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if(nums[mid]===target) {
           return mid
        } else if(nums[mid] > target){
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};