// Messing with strings
const originalString = 'Hello';

const changedString = originalString + ' World!';

console.log(`Original: ${originalString}`);
console.log(`Changed: ${changedString}`);

// Strings are immutable!

// Messing with numbers
const originalNumber = 5;

const multiply5 = originalNumber * 5;
const add5 = originalNumber + 5;

console.log(`Original: ${originalNumber}`);
console.log(`Changed: ${multiply5}`);
console.log(`Changed: ${add5}`);

// Messing with objects
const originalObject = { a: 1, b:2, c:3 };

const changedObject = changeObject();

function changeObject() {
    const obj = originalObject;
    obj.d = 4;
    return obj;
}; 

console.log(originalObject);
console.log(changedObject);

// Messing with arrays
const originalArray = [1, 2, 3, 4];

const changedArray = changeArray();

function changeArray() {
    const arr = originalArray;
    arr.push(5);
    return arr;
}; 

console.log(originalArray);
console.log(changedArray);

// OBJECTS AND ARRAYS ARE MUTABLE
// Copying Arrays!
const concatArray = originalArray.concat(6);
const mappedArray = originalArray.map(num => num * 10);
const filteredArray = originalArray.filter(num => num > 3);
const spreadedArray = [...originalArray, 6];

console.log(concatArray);
console.log(mappedArray);
console.log(filteredArray);
console.log(spreadedArray);

// Copying Objects!
const spreadedObject = { ...originalObject, new: 7, c:10 };
const assignedObject = Object.assign({ new: 10 }, originalObject, { c: 100 });

console.log(spreadedObject);
console.log(assignedObject);

