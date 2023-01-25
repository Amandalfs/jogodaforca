import {bancoDeDadosThemeWord} from "./bancoDeDados.js";

console.log(bancoDeDadosThemeWord[0].fruta[80])
let word = '';

const btnGenerator = document.querySelector('.btnGenerator');
btnGenerator.addEventListener('click', () => {
    word = randowWord(word);

})

function randowWord(word){
    const theme = document.querySelector('.themeSelect').value;
    const panelGame = document.querySelector('.panel-game');
    let wordinscriber = document.querySelector('.panel-wcord-insriber');
    panelGame.style.display = 'none';
    wordinscriber.innerHTML = '';
    if(theme==='animal') {
        panelGame.style.display = 'block';
        let num = (Math.random()*(bancoDeDadosThemeWord[0].animal.length)).toFixed(0);
        for(let el of bancoDeDadosThemeWord[0].animal[num]) {
            wordinscriber.innerHTML += `_ `;
        }
        return word = bancoDeDadosThemeWord[0].animal[num];
    } else if(theme==='fruta') {
        panelGame.style.display = 'block';
        let num = (Math.random()*(bancoDeDadosThemeWord[0].fruta.length)).toFixed(0);
        for(let el of bancoDeDadosThemeWord[0].animal[num]) {
            wordinscriber.innerHTML += `_ `;
        }
        return word = bancoDeDadosThemeWord[0].animal[num];
    } else {
        alert("Escolha o tema para iniciar o jogo");
    }
    
}
