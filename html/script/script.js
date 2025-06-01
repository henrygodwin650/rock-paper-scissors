/*
11a

const nums = [10, 20, 30];
nums[nums.length -1] = 99;

console.log(nums);


function getLastValue (array) {
  return array[array.length -1];
}

console.log(getLastValue([1, 20, 22, 24, 5]));

console.log(getLastValue([ 'hi', 'hello','good']));


function arraySwap (array){
  const first = array [0];
  const last = array[array.length - 1];
  array[0] = last;
  array[array.length - 1]= first;
  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));

console.log(arraySwap(['hi', 'hello', 'good']));


for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let i = 0;
while(i <= 10) {
  console.log(i);
  i +=2
}

let j = 5;
while(j>= 0){
  console.log(j);
  j --;
}
  */
/*
const input1 = [2, 3];
const result1 = [];
 for (let i = 0; i < input1.length; i++) {
  result1.push(input1[i] + 1);
 }

 console.log(result1);

 */

 /*
 function addOne(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  return newArray;
 }

 console.log(addOne([1, 2, 3]));
 console.log(addOne([-2, -1 ,0, 99]));
 */

 /*
 function addOne(array , num) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }
  return newArray;
 }

 console.log(addOne([1, 2, 3], 2));
 console.log(addOne([1, 2, 3], 3));
 console.log(addOne([-2 , -1, 0, 99],2));
 */
/*
 function addArrays ( array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++){
    result.push(array1[i] + array2[i])
  }
  return result;
 }
  console.log(addArrays([ 1, 1, 3], [ 1, 2, 5]));
  console.log(addArrays([ 1, 2, 3], [ 4, 5, 6]));
  */

  /*
  function countPositive(nums){
    let count = 0;
    for (let i =0; i < nums.length; i++) {
      if (nums[i] >0){
        count++;
      }
    }
    return count;
  }
  console.log(countPositive([1, -1, 5]));

  console.log(countPositive([-2 ,3, -5, 7, 10]));
  */

  /* Challenge Exercise*/

  /*
  function minMax (nums) {
    if (nums.length === 0) {
      return{min: null, max : null};
    }
    let min = nums[0];
    let max = nums[0];
    for (let i = 1; 1 < nums.length;i++){
      if (nums[i] < min) {
        min = nums[i]
      }
      if (nums[i] >max) {
        max = nums[i];
      }
    }
    return {min , max};
  }
  console.log(minMax([1]));
  console.log(minMax([5, 7, 10]));
  console.log(minMax([]));
*/
/*
function countWords(words) {
  const wordCount = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}
  */
console.log(countWords(["apple", "grape", "apple", "apple"]));