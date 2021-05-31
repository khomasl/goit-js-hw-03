// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
function includes(array, value) {
    // Change code below this line
    flag = false;
    for (const element of array){
        if (element === value){
            flag = true;
            break;
        }
    }
    return flag;
    // Change code above this line
  }