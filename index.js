import _ from 'lodash';

const findLongestWord = (arr) => {
  let mostLongWord = '';
  for (const word of arr) {
    if (word.length > mostLongWord.length) {
        mostLongWord = word;
    }
  }
  return mostLongWord;
};

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

const sumUniqueNumbers = (arr) => {
  let result = 0;
  const uniqArrElement = _.uniq(arr);
  for (const number of uniqArrElement) {
    result += number;
  }
  return result;
};

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

const mergeArrays = (...arrays) => (_.union(...arrays));

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

const hasProperty = (obj, wantedCriminalElement) => {
  if (Object.hasOwn(obj, wantedCriminalElement)) {
    return true;
  }
  return false;
};

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

const getPropertyValue = (obj, wantedKeyValue) => {
  const objToArr = Object.entries(obj).flat();

  if (objToArr.includes(wantedKeyValue)) {
    const indexWantedKey = objToArr.indexOf(wantedKeyValue);
    const wantedValue = objToArr[indexWantedKey + 1];
    return wantedValue;
  }
  return undefined;
};

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".

const invertObject = (experimental) => {
  const experimentalToArrReverse = Object.entries(experimental);
  const newObj = {};
  console.log(experimentalToArrReverse)
  for (const [key, value] of experimentalToArrReverse) {
    newObj[value] = key;
  }

  return newObj
};

// я не понимаю как, но это работает. Разберёмся позже

const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }
