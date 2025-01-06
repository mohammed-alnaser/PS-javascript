/*

You have a string containing parentheses ( and ), { and } and [ and ]. 
You need to write a function that checks if the parentheses in 
the string are in the correct order.

Conditions:
Parentheses must be closed in the correct order.
Open parentheses must be closed with the same type.
For example:
Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false

*/

function isValid(str) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char in map) {
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
console.log(isValid("()"));       //  true
console.log(isValid("()[]{}"));   //  true
console.log(isValid("(]"));       //  false
console.log(isValid("([)]"));     //  false
console.log(isValid("{[]}"));     //  true
