function max(nums) {
    let maxNumber = Math.min(...nums);
    console.log(maxNumber);
    return maxNumber;
}
let numbers= [280, 17, 24, 90, 900];
max(numbers);