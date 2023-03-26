function FinishFunction() {
  alert("Thank you for completing the quiz.");
}

/*
//Save the element with the id "heading" to the "headingElement" variable:
var headingElement = document.getElementById("heading");
//Prompt dialog box for the user to enter a new heading
var newheading = prompt("Please enter new heading:");
//Set the "innerHTML" property of "headingElement" to the new heading that the user entered
headingElement.innerHTML = newheading;


//Save the element with the id "welcome" to the "welcomeElement" variable:
var welcomeElement = document.getElementById("welcome");
//Prompt dialog box for the user to enter their name
var yourName = prompt("Please enter your name:");
//Set the "innerHTML" property of "welcomeElement" to 'Welcome' and the name that the user entered
welcomeElement.innerHTML = "Welcome " + yourName;
*/

function rndm_colour(){
  var letters = '0123456789ABCDEF';
  //console.log(letters);
  var colour = '#';
  //console.log(colour);
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour
}

function change_heading() {
  colour = rndm_colour();
  document.getElementById("heading").style.color = colour;

}

function show_hide(){
  if (document.getElementById("appear").style.display == 'none'){
    document.getElementById("appear").style.display = 'block';
  }else{
    document.getElementById("appear").style.display = 'none';
  }
}

function say_hello(){
  var name = document.getElementById("shortName").value;
  document.getElementById("Welcome").innerHTML = "<h2>Welcome " + name + "</h2>";
  if (name.length < 1) {
    document.getElementById("Welcome").innerHTML = "";
  }
}

function change_background(){
  colour = rndm_colour();
  document.getElementById("body").style.backgroundColor = colour;
}

function change_colour(){
    if (document.getElementById("Q2Answer3").style.backgroundColor == "green"){
    document.getElementById("Q2Answer3").style.backgroundColor = "linen";
  }else{
    document.getElementById("Q2Answer3").style.backgroundColor = "green";
  }
}

function image_inside(){
document.getElementById('myImage').src='YorkMinster.jpg';
}

function image_outside(){
document.getElementById('myImage').src='YorkMinsterOutside.jpg';
}

function image_inside(){
document.getElementById('myImage').src='YorkMinster.jpg';
}

function image_swop(link){
document.getElementById('myImage').src=link;
}

function validateText() {
  //store the values from the form text fields into named variable
  var fullName = document.forms.Quiz.fullName.value;
  var shortName = document.forms.Quiz.shortName.value;
 //if either variable contains an empty string show an alert in the browser:
  if (fullName === "") {
    alert("Full name must be filled out");
    return false;
    } else if (shortName === "") {
         alert("What shall we call you must be filled out");
         return false; 
    } 
     else {
    return true;
   }  
}

function validateRadio() {
  // Check a value is present for the groups of radio buttons:
  var radioQ1 = document.forms.Quiz.elements.YorkQ1.value;
  var radioQ2 = document.forms.Quiz.elements.YorkQ2.value;
  //if there is no value present an alert will appear in the browser:
  if (radioQ1 === "") {
    alert("One answer button must be selected for Question 1");
    return false;
  }
    else if (radioQ2 === "") {
    alert("One answer button must be selected for Question 2");
    return false;
  }
else{
    return true;
  }
}


function validateNumber() {
  var numQ3;
  var numQ4;
  numQ3 = document.getElementById("YorkQ3").value;
  numQ4 = document.getElementById("YorkQ4").value;  
  // If Q3 value is equal to zero show an alert
  if (numQ3 == 0) {
    alert("You must enter a number above 0 for Question 3");
    return false;
  } 
   else if (numQ4 == 0) {
    alert("You must enter a number above 0 for Question 4");
    return false;
  } 
  else {
    return true;
  }
}

function validateQuestions() {
//if any of the validation functions return `false` indicate the data is not valid.
    if (validateText() && validateRadio() && validateNumber()){
        return true;
     } else {
        return false;
    }
}

function checkAnswers(){
  //assign 0 to the score variable
  var score = 0
  //assign the quiz elements to the quiz variable:
  quiz = document.forms.Quiz.elements;
  //assign the answer to the question to variables and check:
  answerQ1 = quiz.YorkQ1.value;
    // Check the answer to the first question:
    if (answerQ1 == "Q1Answer2"){
        //Add 1 to the score if the user was correct
      score = score + 1;
 }
   
  answerQ2 = quiz.YorkQ2.value;
   if (answerQ2 == "Q2Answer3"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ3 = quiz.YorkQ3.value;
   if (answerQ3 == "14"){
       //Add 1 to the score if the user was correct
      score = score + 1;
  }
  answerQ4 = quiz.YorkQ4.value;
   if (answerQ4 == "200000"){
       //Add 1 to the score if the user was correct
      score = score + 1;
  }

  //return the score value as part of an alert in the browser
  //alert("Your score is " + score);
  showFeedback(score);
}


function showFeedback(score){
  //assign the area of the form to the feedback variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
  feedback = document.getElementsByTagName("form")[0]
  //replace the HTML content inside the form tag with a heading displaying the score
  if (score === 0){
    feedback.innerHTML = '<h2>Sorry, your score was... 0 </h2>';
} else if (score < 4){
    feedback.innerHTML = '<h2>Getting there, your score was... ' + score + '</h2>';
} else {
    feedback.innerHTML = '<h2>Well done, full marks! Your score was... ' + score + '</h2>';
}
}


function quizCheck() {
  if (validateQuestions()) {
       alert("Thank you for completing the quiz.");
       checkAnswers()
  }
  else 
       alert("Please complete incomplete entries");

}

function finishFunction() {
  alert("Thank you for completing the quiz.");
}

function rndm_colour(){
  var letters = '0123456789ABCDEF';
  //console.log(letters);
  var colour = '#';
  //console.log(colour);
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour
}

function change_heading() {
  colour = rndm_colour();
  document.getElementById("heading").style.color = colour;

}

function show_hide(){
  if (document.getElementById("appear").style.display == 'none'){
    document.getElementById("appear").style.display = 'block';
  }else{
    document.getElementById("appear").style.display = 'none';
  }
}

function say_hello(){
  var name = document.getElementById("shortName").value;
  document.getElementById("Welcome").innerHTML = "<h2>Welcome " + name + "</h2>";
  if (name.length < 1) {
    document.getElementById("Welcome").innerHTML = "";
  }
}

function change_background(){
  colour = rndm_colour();
  document.getElementById("body").style.backgroundColor = colour;
}

function change_colour(){
    if (document.getElementById("Q2Answer3").style.backgroundColor == "green"){
    document.getElementById("Q2Answer3").style.backgroundColor = "linen";
  }else{
    document.getElementById("Q2Answer3").style.backgroundColor = "green";
  }
}

function image_inside(){
document.getElementById('myImage').src='YorkMinster.jpg';
}

function image_outside(){
document.getElementById('myImage').src='YorkMinsterOutside.jpg';
}

function image_inside(){
document.getElementById('myImage').src='YorkMinster.jpg';
}

function image_swop(link){
document.getElementById('myImage').src=link;
}