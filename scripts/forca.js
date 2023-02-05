import {bancoDeDadosThemeWord} from "./bancoDeDados.js";

let wordPanel = '';
let wordComplete = ''; 
let chances = 5;
let wordinscriber = document.querySelector('.panel-wcord-insriber');
const btnGenerator = document.querySelector('.btnGenerator');
btnGenerator.addEventListener('click', () => {
    wordComplete = randowWord(wordPanel);
    console.log(wordComplete)

})

const btnA = document.querySelector('button.letterA')
btnA.addEventListener('click', ()=>{
    const span = document.querySelector('.container-form-etc-span');
    if(chances>0 && btnA.value != 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='a'){
                wordNewPanel += 'a';
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
            btnA.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`;
        }else {
            btnA.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnA.value = 'clicou'
        if(!wordPanel.includes('_')){
            wordinscriber.innerHTML = "Parabens"
        }
}
})

const btnS = document.querySelector('.letterS')
btnS.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span');
    if(chances>0 && btnS.value != 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='s'){
                wordNewPanel += 's';
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
            btnS.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnS.style.backgroundColor = '#32CD32'
        }
        btnS.value = 'clicou';
        console.log(wordPanel)
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnD = document.querySelector('.letterD')
btnD.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnD.value != 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='d'){
                wordNewPanel += 'd';
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
            btnD.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnD.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnD.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnF = document.querySelector('.letterF')
btnF.addEventListener('click', ()=>{
    if(chances>0 && btnF !== 'clicou'){
        let span = document.querySelector('.container-form-etc-span')
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='f'){
                wordNewPanel += 'f';
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
            btnF.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnF.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnF.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnG = document.querySelector('.letterG')
btnG.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnG.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='g'){
                wordNewPanel += 'g';
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
            btnG.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnG.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnG.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnH = document.querySelector('.letterH')
btnH.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnH.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='h'){
                wordNewPanel += 'h';
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
            btnH.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnH.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnH.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnJ = document.querySelector('.letterJ')
btnJ.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnJ.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='j'){
                wordNewPanel += 'j';
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
            btnJ.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnJ.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnJ.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnK = document.querySelector('.letterK')
btnK.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnK.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='k'){
                wordNewPanel += 'k';
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
            btnK.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnK.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnK.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnL = document.querySelector('.letterL')
btnL.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnL.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='l'){
                wordNewPanel += 'l';
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
            btnL.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnL.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnL.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnQ = document.querySelector('.letterQ')
btnQ.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnQ.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='q'){
                wordNewPanel += 'q';
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
            btnQ.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnQ.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnQ.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnW = document.querySelector('.letterW')
btnW.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnW.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='w'){
                wordNewPanel += 'w';
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
            btnW.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnW.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnW.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnE = document.querySelector('.letterE')
btnE.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnE.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='e'){
                wordNewPanel += 'e';
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
            btnE.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnE.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnE.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnR = document.querySelector('.letterR')
btnR.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnR.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='r'){
                wordNewPanel += 'r';
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
            btnR.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnR.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnR.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnT = document.querySelector('.letterT')
btnT.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnT.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='t'){
                wordNewPanel += 't';
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
            btnT.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnT.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnT.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnY = document.querySelector('.letterY')
btnY.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnT.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='y'){
                wordNewPanel += 'y';
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
            btnY.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnY.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnY.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnU = document.querySelector('.letterU')
btnU.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnU.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='u'){
                wordNewPanel += 'u';
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
            btnU.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnU.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnU.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnI = document.querySelector('.letterI')
btnI.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnI.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='i'){
                wordNewPanel += 'i';
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
            btnI.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnI.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnI.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnO = document.querySelector('.letterO')
btnO.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnO.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='o'){
                wordNewPanel += 'o';
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
            btnO.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnO.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnO.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnP = document.querySelector('.letterP')
btnP.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnP.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='p'){
                wordNewPanel += 'p';
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
            btnP.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnP.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnP.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnZ = document.querySelector('.letterZ')
btnZ.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnZ.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='z'){
                wordNewPanel += 'z';
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
            btnZ.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnZ.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnZ.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnX = document.querySelector('.letterX')
btnX.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnX.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='x'){
                wordNewPanel += 'x';
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
            btnX.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnX.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnX.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnC = document.querySelector('.letterC')
btnC.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnC.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='c'){
                wordNewPanel += 'c';
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
            btnC.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnC.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnC.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnV = document.querySelector('.letterV')
btnV.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnV.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='v'){
                wordNewPanel += 'v';
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
            btnV.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnV.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnV.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnB = document.querySelector('.letterB')
btnB.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnB.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='b'){
                wordNewPanel += 'b';
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
            btnB.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnB.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnB.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnN = document.querySelector('.letterN')
btnN.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnN.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='n'){
                wordNewPanel += 'n';
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
            btnN.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnN.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnN.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

const btnM = document.querySelector('.letterM')
btnM.addEventListener('click', ()=>{
    let span = document.querySelector('.container-form-etc-span')
    if(chances>0 && btnM.value !== 'clicou'){
        let wordNewPanel = ''
        let wordinscriber = document.querySelector('.panel-wcord-insriber');
        let value = true;
        wordinscriber.style.display = 'block';
        wordinscriber.innerHTML = '';
        for(let i in wordPanel){
            if(wordComplete[i]==='m'){
                wordNewPanel += 'm';
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
            btnM.style.backgroundColor = 'red';
            chances--
            span.innerHTML = `${chances}`
        }else {
            btnM.style.backgroundColor = '#32CD32'
        }
        console.log(wordPanel)
        btnM.value = 'clicou'
    }
    if(!wordPanel.includes('_')){
        wordinscriber.innerHTML = "Parabens"
    }
})

function randowWord(){
    btnA.value = '';
    btnA.style.backgroundColor = 'white';
    btnS.value = '';
    btnS.style.backgroundColor = 'white';
    btnD.value = '';
    btnD.style.backgroundColor = 'white';
    btnF.value = '';
    btnF.style.backgroundColor = 'white';
    btnG.value = '';
    btnG.style.backgroundColor = 'white';
    btnH.value = '';
    btnH.style.backgroundColor = 'white';
    btnJ.value = '';
    btnJ.style.backgroundColor = 'white';
    btnK.value = '';
    btnK.style.backgroundColor = 'white';
    btnL.value = '';
    btnL.style.backgroundColor = 'white';
    btnQ.value = '';
    btnQ.style.backgroundColor = 'white';
    btnW.value = '';
    btnW.style.backgroundColor = 'white';
    btnE.value = '';
    btnE.style.backgroundColor = 'white';
    btnR.value = '';
    btnR.style.backgroundColor = 'white';
    btnT.value = '';
    btnT.style.backgroundColor = 'white';
    btnY.value = '';
    btnY.style.backgroundColor = 'white';
    btnU.value = '';
    btnU.style.backgroundColor = 'white';
    btnI.value = '';
    btnI.style.backgroundColor = 'white';
    btnU.value = '';
    btnU.style.backgroundColor = 'white';
    btnI.value = '';
    btnI.style.backgroundColor = 'white';
    btnO.value = '';
    btnO.style.backgroundColor = 'white';
    btnP.value = '';
    btnP.style.backgroundColor = 'white';
    btnZ.value = '';
    btnZ.style.backgroundColor = 'white';
    btnX.value = '';
    btnX.style.backgroundColor = 'white';
    btnC.value = '';
    btnC.style.backgroundColor = 'white';
    btnV.value = '';
    btnV.style.backgroundColor = 'white';
    btnB.value = '';
    btnB.style.backgroundColor = 'white';
    btnN.value = '';
    btnN.style.backgroundColor = 'white';
    btnM.value = '';
    btnM.style.backgroundColor = 'white';

    chances = 5;
    const span = document.querySelector('.container-form-etc-span')
    span.innerHTML = "5";
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
