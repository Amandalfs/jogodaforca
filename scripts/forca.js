import {bancoDeDadosThemeWord} from "./bancoDeDados.js";

const img = document.querySelector('.img-forcar');
let wordPanel = '';
let wordComplete = ''; 
let chances = 6;
let wordinscriber = document.querySelector('.panel-wcord-insriber');
const btnGenerator = document.querySelector('.btnGenerator');
btnGenerator.addEventListener('click', () => {
    wordPanel = '';
    wordComplete = ''; 
    wordComplete = randowWord(wordPanel);
    img.innerHTML = `<img src="assets/imgs/forca-mode1.png" alt="">`;
})

const btn = document.querySelector('.container-game-word')
btn.addEventListener('click', (el)=>{
    if(el.target.classList.contains('letter')){const tag = el.target;
    const letter = el.target.innerText.toLowerCase();
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && el.target.value !== 'clicou'){
        let wordNewPanel = '';
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]=== letter){
                wordNewPanel += letter;
                value = false;
            } else {
                wordNewPanel += wordPanel[i]
            }
        }
        wordPanel = wordNewPanel;
        for(let i in wordPanel){
            wordinscriber.innerHTML += `${wordPanel[i]} `;
        }
        
        if(value){
            tag.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            tag.style.backgroundColor = '#32CD32';
        }
        tag.value = 'clicou';
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens";
    }}
    switch(chances){
        case 5: 
            img.innerHTML = `<img src="assets/imgs/forca-mode2.png" alt="">`;
            break;
        case 4:
            img.innerHTML = `<img src="assets/imgs/forca-mode3.png" alt="">`;
            break;
        case 3:
            img.innerHTML = `<img src="assets/imgs/forca-mode4.png" alt="">`;
            break;
        case 2:
            img.innerHTML = `<img src="assets/imgs/forca-mode5.png" alt="">`;
            break;
        case 1:
            img.innerHTML = `<img src="assets/imgs/forca-mode6.png" alt="">`;
            break;
        case 0:
            img.innerHTML = `<img src="assets/imgs/forca-mode7.png" alt="">`;
            break;
    }
})

function randowWord(){
    const btnSolo = document.querySelectorAll('.letter');
    for(let elemento of btnSolo){
        elemento.style.backgroundColor = 'rgb(255, 167, 211)';
        elemento.value = '';
    }
    chances = 6;
    const span = document.querySelector('.container-form-etc-span')
    span.innerHTML = "6";
    const theme = document.querySelector('.themeSelect').value;
    const panelGame = document.querySelector('.panel-game');
    panelGame.style.display = 'none';
    wordinscriber.innerHTML = '';
    if(theme==='animal') {
        panelGame.style.display = 'block';
        let num = (Math.random()*(bancoDeDadosThemeWord[0].animal.length)).toFixed(0);
        wordComplete = bancoDeDadosThemeWord[0].animal[num]
        for(let el of bancoDeDadosThemeWord[0].animal[num]) {
            wordPanel += '_';
            wordinscriber.innerHTML += `_ `;
        }
        return wordComplete = bancoDeDadosThemeWord[0].animal[num];
    } else if(theme==='fruta') {
        panelGame.style.display = 'block';
        let num = (Math.random()*(bancoDeDadosThemeWord[0].fruta.length)).toFixed(0);
        wordComplete = bancoDeDadosThemeWord[0].animal[num]
        for(let el of bancoDeDadosThemeWord[0].animal[num]) {
            wordPanel += '_';
            wordinscriber.innerHTML += `_ `;
        }
        return wordComplete = bancoDeDadosThemeWord[0].animal[num];
    } else {
        alert("Escolha o tema para iniciar o jogo");
    }
    
}
