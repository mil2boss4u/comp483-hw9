//Exercise 1
var value = 3 + 5 * (10 / 2) - (8 - 4);
console.log(value);

//Exercise 2
var projectIdentifier = "COMP484";
// ProjectIdentifier = "JS_Advanced"; //Doesn't work because javascript is case sensative and won't work unless you use the same exact name
projectIdentifier = "JS_Advanced";
console.log(projectIdentifier);

//Exercise 3
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";

//Exercise 4
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log(errorMessage);

//Exercise 5
var valueA = 10;
var valueB = "4";

var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;

console.log(resultSubtraction);
console.log(resultMultiplication); 

console.log(typeof resultSubtraction);
console.log(typeof resultMultiplication);

//Exercise 6

var unassignedVar;
var explicitNull = null;

console.log(typeof unassignedVar);
console.log(typeof explicitNull);

/*
Explanation:
- A variable that was declared but not assigned a value automatically holds the value `undefined`.
- The `typeof` operator applied to `undefined` correctly returns `"undefined"`.
- applying `typeof` to `null` returns `"object"`, which is actually a well-known bug from JavaScript's early implementation. Internally, values are tagged with type identifiers — `null` was incorrectly given the same tag as objects. For backward compatibility, this behavior has never been fixed.
*/

//Exercise 7
var isBlocking = true;
console.log(typeof isBlocking); // "boolean"

isBlocking = "true";
console.log(typeof isBlocking); // "string"

//Exercise 8
// var 2ndValue = 10; // Variable names cannot start with a number
// var this variable = "Note"; // Variable names cannot contain spaces
// var @username = "User"; // Variable names cannot include most special characters except $ or _

//Exercise 9
var counterValue = 50;

counterValue /= 5;
counterValue -= 3;

console.log(counterValue);

//Exercise 10
var x = 10;
var y_post = x++;
console.log(y_post);
console.log(x);     

x = 10;
var z_pre = ++x;
console.log(z_pre);
console.log(x);  

/*
Explanation:
If you put the ++ after x then it returns the value of x before its incremented/changed. But if you put ++ before x then it increments/changes first before it gets assigned to the variable.
*/

//Exercise 11
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean){
    console.log("They are loosely equal.");
}
//Because of type coercion in Javascript when using == Javascript converts the boolean into a number which for false would be 0 and then 0 == 0 would be true. 

//Exercise 12
var versionA = 10.0;
var versionB = "10.0";

if (versionA !== versionB){
    console.log("Not strictly equal.");
}
else {
    console.log("Are stricly equal.");
}

//Exercise 13
var isLoggedIn;
var isSubscriber;
var isTrialExpired;

if ((isLoggedIn && isSubscriber)||(isLoggedIn && !isTrialExpired)){
    console.log("Access granted.");
}

//Exercise 14
var conditionA;
var conditionB;

if(conditionA || conditionB){
    if(conditionA && conditionB){
        console.log("XOR Fail");
    }
    else{
        console.log("XOR Success");
    }
    
}
else {
    console.log("XOR FAIL");
}

//Exercise 15
var scriptLoadType = "deferred"
var loadStatus;

var loadStatusTernary = scriptLoadType == "deferred" ? loadStatus = "Non-blockinig" : loadStatus = "Potentially Blocking";

//Exercise 16
function calculateRenderTime() {
  /*
    This function is used to calculate the time taken
    to parse HTML and execute JavaScript.
  */
  
  // Placeholder for future implementation
}

// Exercise 17
var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();
var formattedDate = "Today is " + month + "/" + day + "/" + year;

console.log(formattedDate);

// Exercise 18
var val1 = 20;
var val2 = "5";

var sumResult = val1 + val2;   
var diffResult = val1 - val2;

console.log(sumResult);
console.log(diffResult);

/*
    With mixed types in Javascript most arithmetic operators attempt to convert operands to numbers which is what happens for the - operation. But for the + operation if one operand is a string, it converts the other to a string as well and concatenates them.
*/

//Exercise 19
var dataInput = 484;

if (typeof dataInput === "number") {
  console.log("Input is numeric.");
} 
else {
  dataInput = true;
  console.log(typeof dataInput);
}

//Exercise 20
/*
  If the script is in the head without 'defer' or 'async' attributes then theres a timing error because the script runs before the body element is fully parsed. If you don't parse the body first then the document.body will be null and it'll give you an error for trying to set the innerHTML of null. So the defer or async attributes make it so that the body can parse fully before running the actual script to change the body. 
*/

var header = document.createElement("h1");

header.innerHTML = "Interactive Layer Loaded";

document.body.appendChild(header);
