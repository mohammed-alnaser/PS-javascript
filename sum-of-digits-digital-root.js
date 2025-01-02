
/*
Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

*/

function digitalRoot(num){
    while(num>=10){
        num=num.toString()
        .split('')
        .reduce((sum,i)=> sum + Number(i),0);

    }
    return num;
}

console.log(digitalRoot(132189))//output = 6