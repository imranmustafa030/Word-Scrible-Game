const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span") 
const inputField = document.querySelector("input") 
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
const timeText = document.querySelector(".time b")

let correctWord,timer;

const initTimer = maxTime => {
    timer = setInterval(()=>{
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time End! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    },1000);
}

const initGame = ()=>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i = wordArray.length - 1; i>0 ; i--){
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]]; 
    }
    wordText.textContent = wordArray.join("");
    hintText.textContent = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log(wordArray, randomObj.word);
}
initGame();

const checkWord = ()=>{
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert(`Please enter a word`);
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not correct word`);
    alert(`Congrats!  ${userWord.toUpperCase()} is a correct word`);
    initGame();
}
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);