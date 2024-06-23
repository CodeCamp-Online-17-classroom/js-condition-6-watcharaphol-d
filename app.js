// write code here
let input = prompt("Enter input number:");
if (input === "") alert("Please enter the input number");
else if (!isNaN(+input)) {
    if (+input % 2 === 0) alert(`${input} is Even number`);
    else if (+input % 2 === 1) alert(`${input} is Odd number`);
    else alert("Invalid");
} else alert("Invalid, The recived input is not number");