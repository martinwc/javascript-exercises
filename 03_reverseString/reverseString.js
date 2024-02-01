const reverseString = function(inputString) {
let reverseArray = []
for (let i = 0; i < inputString.length; i++) {
    reverseArray.push(inputString[i]);
    reverseArray.reverse();
    reverseArray.join("");
} 

return reverseString("hello there");
};

// Do not edit below this line
module.exports = reverseString;
