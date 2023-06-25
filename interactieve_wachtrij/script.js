let questionElement = document.getElementById("question");
let countdownElement = document.getElementById("countdown");
let answerElements = document.getElementsByClassName('answer');

let questionsArray = ["What is this?","What is that?", "Who is you?","Where is me?","Something wrong?"];
let answerArray = ["*A Quiz", "*Something","*A Person", "*Home", "*Nope"];
let fakeAnswers = [["Breakfast","Potato"],["Nothing","Everything"],["A Dog","A Cat"],["Outside","Away"],["Yes","Always"]];
let currentAnswers = [];

let index = -1;
let maxIndex = questionsArray.length-1;

// "timer" heeft nu een waarde van 5000 wat 5000 ms betekent, oftewel 5 seconden.
// Mocht je dit willen aanpassen naar 10 seconden dan kan je 5000 naar 10000 veranderen.
// Deze timer is alleen voor de eerste keer dat het inlaad. Je hebt dan nu 5 seconden voordat de eerste vraag wordt laten zien.
let timer = setTimeout(setNextQuestion, 5000);

let counter = 5;
countdownElement.innerHTML = counter;

let interval = setInterval(setCountdown, 1000);

Array.from(answerElements).forEach(element => {
    element.addEventListener("click",function() {
            handleAnswer(element);
        }
    )
});

function setCountdown(){
    counter--;
    countdownElement.innerHTML = counter;
}


function setNextQuestion(){
    // If not out of questions set new question after 5 sec and set the timer again.
    if(index !== maxIndex){
        clearInterval(interval);
        clearTimeout(timer);
        index++;
        questionElement.innerHTML = questionsArray[index];
        setAnswers();
        counter = 5;
        countdownElement.innerHTML = counter;
        // "timer" heeft nu een waarde van 5000 wat 5000 ms betekent, oftewel 5 seconden.
        // Mocht je dit willen aanpassen naar 10 seconden dan kan je 5000 naar 10000 veranderen.
        timer = setTimeout(setNextQuestion,5000);
        interval = setInterval(setCountdown, 1000);
    }else{
        if (!alert('De quiz is klaar')) { window.location.reload(); }
    }
}

function setAnswers(){
    currentAnswers = [answerArray[index], fakeAnswers[index][0], fakeAnswers[index][1]];
     shuffleArray(currentAnswers);

     for(var i = 0;i < answerElements.length;i++){
        answerElements[i].innerHTML=currentAnswers[i];
     }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function handleAnswer(element){
    // Correct answer before timer runs out. Clear the timer and set the next question
    console.log(element.innerHTML);
    console.log(answerArray[index]);
    if(element.innerHTML === answerArray[index]){
        element.classList.add("correct-answer");
        setNextQuestion();
        element.classList.remove("correct-answer");
    }
}