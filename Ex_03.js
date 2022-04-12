// bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
//Input: [0, 5, 4, 2, 8]
//Output: 19
const numbers = [0,5,4,2,8];
function sumArray(){
    let sum = 0;
    for(let i = 0 ; i < numbers.length ; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log( `The sum of array is ${sumArray()}`);

//Sử dụng một mảng các đối tượng person (name, age) thành tổng hợp mảng các tên người.
//Input: const person = [{ name: 'John', age: 24 },{ name: Pete, age: 25 },{ name: Mary', age: 28 }]
//Output: ['John', 'Pete', 'Mary'].

const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }];
let personNew = [];
for(let personName of person){
personNew.push(personName.name);
}
console.log(personNew);


// bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
//Input:	arr1 = ['John', 'Pete', 'Mary']
//arr2 = ['Mary', 'Henry', 'Harry']
//Output: ['John', 'Pete', 'Mary', 'Henry']
//Gợi ý: Có thể sử dụng spread trong mảng. [...arr] kết hợp với phương thức includes trong array method.

const arr1 = ['John', 'Pete', 'Mary'];
const	arr2 = ['Mary', 'Henry', 'Harry'];
let mergeArray = [...arr1, ...arr2];

function unique(mergeArray) {
  let newArr = []
  for (let i = 0; i < mergeArray.length; i++) {
    if (!newArr.includes(mergeArray[i])) {
      newArr.push(mergeArray[i]);
    }
  }
  return newArr;
}
console.log(unique(mergeArray));

