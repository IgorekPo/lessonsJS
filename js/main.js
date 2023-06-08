console.log("You can ignore single and double quotes like this: \\\'\\\' \\\" \\\"");

alert ("Enter your data")

let firstName = prompt("Enter your name");
alert ( "yor name is: " + firstName);
let surmaneName = prompt("Enter your surmane");
alert (`yor full name is: ${firstName + ' '  + surmaneName}`);

let howOld = prompt("How old are you?");
alert (`yor full name is: ${firstName + ' '  + surmaneName + ' , ' + 'your age is: ' + howOld}`);

let youAdmin = confirm ('Are you Adnim?');
alert (`yor full name is: ${firstName + ' '  + surmaneName + ' , ' + 'your age is: ' + howOld + ' , ' + 'admin status: ' + youAdmin}`);

// console.log (Boolean (alert('5'))); //Алерт не тип данных и не может перетворювать слово 5 в число.

// console.log (true > false); //тру идет как 1 а фолс как 0 (1 > 0 = правда 'true')
// console.log (true > 5); // 1>5 = не правда 'false'
// console.log (true < '5');
// console.log (true > null); //null это ничего,пустота. конечно 1 > ничего и это = правда 'true'
