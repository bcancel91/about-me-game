'use strict';
var person = prompt('Hey there! What is your preferred name?');
var score = 0;

if(person !== null){
  alert('Welcome ' + person + '!');
}

alert(person + ', lets play a game.');

alert('You can only answer with a "Yes","Y" or "No","N".');

var firstQ = prompt('My name is Brian?');
firstQ = firstQ.toLowerCase();
if (firstQ === 'no'){
  alert('Wrong! Why do you hate me ' + person + '...');
}
if (firstQ === 'n'){
  alert('Wrong! Why do you hate me ' + person + '...');
}
if (firstQ === 'yes'){
  alert('Correct! I knew you had my back ' + person + '.');
  score = score + 1;
}
if (firstQ === 'y'){
  alert('Correct! I knew you had my back ' + person + '.');
  score = score + 1;
}

alert('Score: ' + score);


var secondQ = prompt('Was I born in Puerto Rico?');
secondQ = secondQ.toLowerCase();
if (secondQ === 'yes'){
  alert('Si, muy bien ' + person + '!');
  score = score + 1;
}
if (secondQ === 'y'){
  alert('Si, muy bien ' + person + '!');
  score = score + 1;
}
if (secondQ === 'no'){
  alert('Incorrecto! Quizas la proxima.');
}
if (secondQ === 'no'){
  alert('Incorrecto! Quizas la proxima.');
}
alert('Score: ' + score);

var thirdQ = prompt('Did I serve in the Army for 4 years?');

thirdQ = thirdQ.toLowerCase();
if (thirdQ === 'yes'){
  alert('Wrong! 6 years actually ' + person + '...');
}
if (thirdQ === 'y'){
  alert('Wrong! 6 years actually ' + person + '...');
}
if (thirdQ === 'no'){
  alert('You are right, 6 years actually! Woot woot');
  score = score + 1;
}
if (thirdQ === 'n'){
  alert('You are right, 6 years actually! Woot woot');
  score = score + 1;
}

alert('Score: ' + score);

var fourthQ = prompt('I have 4 siblings?');
fourthQ = fourthQ.toLowerCase();
if (fourthQ === 'no'){
  alert('Wrong! 3 brothers & 1 sister...');
}
if (fourthQ === 'n'){
  alert('Wrong! 3 brothers & 1 sister...');
}
if (fourthQ === 'yes'){
  alert(person + ', you love me... I can feel it.');
  score = score + 1;
}
if (fourthQ === 'y'){
  alert(person + ', you love me... I can feel it.');
  score = score + 1;
}

alert('Score: ' + score);

var fifthQ = prompt('I have a strong dislike for bananas?');
fifthQ = fifthQ.toLowerCase();
if (fifthQ === 'no'){
  alert('Ewww, I would never come close to a banana');
}
if (fifthQ === 'n'){
  alert('Ewww, I would never come close to a banana');
}
if (fifthQ === 'yes'){
  alert(person + ', you know me too well.');
  score = score + 1;
}
if (fifthQ === 'y'){
  alert(person + ', you know me too well.');
  score = score + 1;
}

alert('Score: ' + score);


