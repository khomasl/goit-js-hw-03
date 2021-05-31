// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
function filterArray(numbers, value) {
  // Change code below this line
  const newArray = [];
  for (const number of numbers){
    if (number <= value){
      continue
    }
    newArray.push(number);
  }
  return newArray;
 // Change code above this line
}