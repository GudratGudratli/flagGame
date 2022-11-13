let mainFlag = document.querySelector(".flag")
let content = document.querySelector(".container")
let score = document.querySelector(".score")
let jsonCreate = jsonCreater()
var scoreIndex = 0;

async function jsonCreater() {
    await fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {jsonCreate = data}) 
}

function randFlag() {
    let randNum = Math.floor(Math.random() * 250)
    let rand2 = Math.floor(Math.random() * 250)
    let rand3 = Math.floor(Math.random() * 250)
    let rand4 = Math.floor(Math.random() * 250)
    
    mainFlag.innerHTML = 
    `
    <div class="img">
        <img src="${jsonCreate[randNum].flags.png}" alt="">
        <hr>
    </div>
    `
    Correct(randNum,rand2,rand3,rand4)
}

function Correct(randNum,rand2,rand3,rand4) {
        let btn = randBtn()
        for (let index = 0; index < jsonCreate.length; index++) {
            if (index == randNum) {
                btn[3].innerHTML =
                `<button onclick="randFlag();addScore();">${jsonCreate[index].name.common}</button>`
            }
        }
        
        for (let index = 0; index < jsonCreate.length; index++) {
            if (index == rand2) {
                btn[0].innerHTML =
                `<button onclick="decreaseScore();this.remove();">${jsonCreate[index].name.common}</button>`
            }
        }
        
        for (let index = 0; index < jsonCreate.length; index++) {
            if (index == rand3) {
                btn[1].innerHTML =
                `<button onclick="decreaseScore();this.remove();">${jsonCreate[index].name.common}</button>`
            }
        }

        for (let index = 0; index < jsonCreate.length; index++) {
            if (index == rand4) {
                btn[2].innerHTML =
                `<button onclick="decreaseScore();this.remove();">${jsonCreate[index].name.common}</button>`
            }
        }
}

function randBtn() {
    const randomIndex = Math.floor(Math.random() * 4) + 1;
    let btnIndex = randomIndex - 1;
    let array = []
    for (let i = 0; i < 4; i++) {
        array[i] = document.getElementsByClassName('btn')[btnIndex];
        btnIndex += 1
        
        if (btnIndex > 3) {
            btnIndex -= 4
        }
    }
    return array
}   

function addScore() {
    scoreIndex++
    score.innerHTML = `<h1>Score: ${scoreIndex}</h1>`
}

function decreaseScore() {
    // parentNode.removeChild();
    scoreIndex--
    score.innerHTML = `<h1>Score: ${scoreIndex}</h1>`
}