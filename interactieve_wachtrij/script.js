let questionElement = document.getElementById("question");
let countdownElement = document.getElementById("countdown");
let answerElements = document.getElementsByClassName('answer');

//Alle vragen
let questionsArray = ["What is this?","What is that?", "Who is you?","Where is me?","Something wrong?","wat vind je het lekkerst?","waarom niet?"];
//Alle correcte antwoorden, als er geen antwoord is dan zet je "" neer. Dit moet omdat de antwoorden anders niet meer kloppen met de vraag.
let answerArray = ["*A Quiz", "*Something","*A Person", "*Home", "*Nope","","*Daarom"];
//Alle foute antwoorden (2 per vraag), als er geen antwoord is dan zet je [] neer. dit moet omdat de antwoorden anders niet meer kloppen met de vraag.
let wrongAnswers = [["Breakfast","Potato"],["Nothing","Everything"],["A Dog","A Cat"],["Outside","Away"],["Yes","Always"],[],["Daarom niet","Gewoon"]];

// lege let voor de antwoorden
let currentAnswers = [];

// Index van de vraag, deze begint op -1 omdat de eerste vraag pas na 5 seconden wordt laten zien.
let index = -1;
let maxIndex = questionsArray.length-1;

// "timer" heeft nu een waarde van 5000 wat 5000 ms betekent, oftewel 5 seconden.
// Mocht je dit willen aanpassen naar 10 seconden dan kan je 5000 naar 10000 veranderen.
// Deze timer is alleen voor de eerste keer dat het inlaad. Je hebt dan nu 5 seconden voordat de eerste vraag wordt laten zien.
let timer = setTimeout(setNextQuestion, 3000);
// Synchroniseer dit nummer met de timer hierboven
let counter = 5;
// Zet de timer op de pagina
countdownElement.innerHTML = counter;
// Zet de eerste vraag op de pagina
let interval = setInterval(setCountdown, 1000);
Array.from(answerElements).forEach(element => {
    element.addEventListener("click",function() {
            handleAnswer(element);
        }
    )
});

function setCountdown() {
    // Als de timer op 0 staat, zet dan de volgende vraag klaar.
    counter--;
    countdownElement.innerHTML = counter;
}


function setNextQuestion() {
    // Als er nog vragen zijn, laat dan de volgende vraag zien na 5 seconden en zet de timer weer aan.
    if (index !== maxIndex) {
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
    } else {
        // Als er geen vragen meer zijn, laat dan een alert zien en refresh de pagina.
        if (!alert('De quiz is klaar')) { window.location.reload(); }
    }
}

function setAnswers() {
    // Als er geen antwoord is, zet dan alle antwoorden op display:none;
    if (answerArray[index] === "") {
        for (var i = 0;i < answerElements.length;i++) {
            answerElements[i].style = "Display:none;";  
        }
    } else {
    // Als er wel een antwoord is, zet dan alle antwoorden op display:block;

    // Zet de antwoorden in een array en shuffle deze.
    currentAnswers = [answerArray[index], wrongAnswers[index][0], wrongAnswers[index][1]];
        shuffleArray(currentAnswers);

        for (var i = 0;i < answerElements.length;i++) {
            answerElements[i].style = "";  
            answerElements[i].innerHTML=currentAnswers[i];
        }
    }
}

function shuffleArray(array) {
    // Deze functie zorgt ervoor dat de antwoorden random worden weergegeven.
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function handleAnswer(element) {
    // Corract antwoord voordat de timer op is. Stop de timer en zet de volgende vraag klaar.
    console.log(element.innerHTML);
    console.log(answerArray[index]);
    if (element.innerHTML === answerArray[index]) {
        element.classList.add("correct-answer");
        setNextQuestion();
        element.classList.remove("correct-answer");
    }
}