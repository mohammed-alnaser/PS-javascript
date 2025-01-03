

// remove the spaces form the string then return the resultant string

function noSpace(str){


    //one solution

   // return str.split(' ').join('');


/************************************ */
   // two solution
   let arr=[];
   str=str.split('')
   for(let i=0;i<str.length;i++){
    if(str[i]== ' ')
        continue;
    else
        arr.push(str[i])
   }
   return arr.join('')
}

console.log(noSpace("h e l l o "))