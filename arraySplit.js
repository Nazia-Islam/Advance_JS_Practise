const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5);//copy kore ane jate main array thik thake
console.log(part);
console.log(nums);

const removed = nums.splice(2,5,77);//main array theke cut kore ane
console.log(removed);
console.log(nums);

const together = nums.join(",");
console.log(together);