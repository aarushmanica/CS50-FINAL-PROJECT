let time = document.querySelector("#time");
let counter = document.querySelector("#counter");
let start = document.querySelector("#start");

let result = document.querySelector("#result");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let error = document.querySelector("#error");

let typingText = document.querySelector("#typingText");
let userInput = document.querySelector("#userInput");

let timer = 0;
let interval = null;

let errorCounter = 0;
let wordsCounter = "";
let index = 0;

let text = `There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on. Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law. `;

userInput.disabled = true;

start.addEventListener("click" , ()=>{
    start.innerText = `Start Typing`;
    userInput.disabled = false;

    text.split("").forEach(characters =>{
        let spanTxt = document.createElement("span");
        spanTxt.innerText = characters;
        typingText.appendChild(spanTxt);
    })

    interval = setInterval(countDown , 1000);
    time.style.display = "grid";
    result.style.display = "none";
    start.style.pointerEvents = "none";
});

let countDown = ()=>{
    if(timer < 60){
        timer++;
        counter.innerText = timer;
    }
    else
    {
        userInput.disabled = true;
        time.style.display = "none";
        result.style.display = "flex";

        wordsCounter = userInput.value;
        characters.innerText = index;
        words.innerText = wordsCounter.split(" ").length;
        error.innerText = errorCounter;

        clearInterval(interval);
        timer = 0;
    }
}

userInput.addEventListener("input" , e =>{
let userValue = userInput.value.split("");

let randomText = typingText.querySelectorAll("span");

if(e.inputType === "deleteContentBackward"){
    index--;
    randomText[index].classList.remove("correct");
    randomText[index].classList.remove("incorrect");
}
else if(userValue[index] === randomText[index].innerText){
    randomText[index].classList.add("correct");
    index++;
}
else
{
    {
    randomText[index].classList.add("incorrect");
    index++;
    errorCounter++;
}
}
});