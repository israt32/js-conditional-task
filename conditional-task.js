/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burger = 200;

if(burger > 500){
  console.log('you get a free coke')
}
else{
  console.log(burger + 30)
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

var weight = 65;  // in kg
var heightInInch = 62; // in inch
var height = heightInInch * 0.0254;
var bmi = weight / (height* height)

if(bmi < 18.5){
  console.log('you are underweight')
}
else if(bmi >= 18.5 && bmi <=24.9){
  console.log('you are normal')
}
else if(bmi >=25 && bmi <=29.9){
  console.log('you are overweight')
}
else{
  console.log('you are obese')
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var studentMark = 55;

if(studentMark >= 90 && studentMark <=100){
  console.log('A')
}
else if(studentMark >= 80 && studentMark <= 89){
  console.log('B')
}
else if(studentMark >= 70 && studentMark <= 79){
  console.log('C')
}
else if(studentMark >= 60 && studentMark <= 69){
  console.log('D')
}
else{
  console.log('F')
}


// another solution

if(studentMark < 0 || studentMark > 100){
 console.log('invalid mark')
}
else if(studentMark >= 90){
  console.log('A')
}
else if(studentMark >= 80){
  console.log('B')
}
else if(studentMark >= 70){
  console.log('C')
}
else if(studentMark >= 60){
  console.log('D')
}
else{
  console.log('F')
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myMarks = 81;
let friendMarks = 49;
if(myMarks > 80){
  if(friendMarks > 80 ){
    console.log('lets go for lunch')
  }
  else if( friendMarks >= 60){
    console.log('good luck next time')
  }
  else if( friendMarks >= 40){
    console.log('keep friends message unseen')
  }
  else{
    console.log('block the friend')
  }
}
else{
  console.log('sleep and act sad')
}