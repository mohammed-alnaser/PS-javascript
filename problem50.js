/*

You are given a string containing incorrectly ordered words,
 with the last letters of each word being numbers indicating
  the correct order. Your task is to rearrange the words based
  
   on the numbers, and then remove the numbers from the final sentence.

*/

function sortSentence(sentence) {
    return sentence
        .split(' ') 
        .sort((a, b) => a.match(/\d+/)[0] - b.match(/\d+/)[0]) 
        .map(word => word.replace(/\d+/g, '')) 
        .join(' ');
}

console.log(sortSentence("برمجة3 أنا1 أحب2")); // "أنا أحب برمجة"
console.log(sortSentence("JS2 أحب1")); // "أحب JS"
console.log(sortSentence("تحديات4 البرمجة3 ممتعة2 حل1")); // "حل ممتعة البرمجة تحديات"
