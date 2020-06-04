'use strict';
var person = prompt('Hey there! What is your preferred name?');
var score = 0;

if(person !== null){
  alert('Welcome ' + person + '!');
}

alert(person + ', lets play a game.');

alert('You can only answer with a "Yes" or "No".');

var nameQ = prompt('My name is Brian?');
if (nameQ === 'No'){
  alert('Wrong! Why do you hate me ' + person + '...');
}
if (nameQ === 'Yes'){
  alert('Correct! I knew you had my back ' + person + '.');
  score = score + 1;
}

alert('Score: ' + score);

var secondQ = prompt('Was I born in Puerto Rico?');
if (secondQ === 'Yes'){
  alert('Si, muy bien ' + person + '!');
  score = score + 1;
}
if (secondQ === 'No'){
  alert('Incorrecto! Quizas la proxima.');
}

alert('Score: ' + score);

var thirdQ = prompt('Did I serve in the Army for 4 years?');
if (thirdQ === 'Yes'){
  alert('Wrong! 6 years actually ' + person + '...');
}
if (thirdQ === 'No'){
  alert('You are right, 6 years actually! Woot woot');
  score = score + 1;
}

alert('Score: ' + score);

var fourthQ = prompt('I have 4 siblings?');
if (fourthQ === 'No'){
  alert('Wrong! 3 brothers & 1 sister...');
}
if (fourthQ === 'Yes'){
  alert(person + ', you love me... I can feel it.');
  score = score + 1;
}

alert('Score: ' + score);


