// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
  // Change code below this line
  const arr = string.split(' ');
  let maxLength = arr[0].length;
  let word = arr[0];
  for (let i = 1; i < arr.length; i += 1){
    const len = arr[i].length;
    if (len < maxLength){
      continue
    }
    
    maxLength = len;
    word = arr[i];
  }
  return word;
  // Change code above this line
}