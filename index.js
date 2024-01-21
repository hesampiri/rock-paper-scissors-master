let option = document.querySelectorAll('.options');
let score = document.querySelector('.score');
window.onload = getitem();
let container = document.querySelector('.play');
container.style.display = 'block';
let playcontainer = document.querySelector('.playcontainer').style;
let resultpage = document.querySelector('.result'); 
let state = document.querySelector('.middle>h1');
let middle = document.querySelector('.middle');
middle.style.display = 'none';
let botton = document.querySelector('.again');
let leftcircel = document.querySelector('.left');
let rightcircel = document.querySelector('.right');
let rightring = document.querySelector('.right-ring');
let leftring = document.querySelector('.left-ring')
rightring.style.display = 'none';
let loaderdiv = document.querySelector('.load-div');
resultpage.style.display = 'none';
let rules = document.querySelector('.rules-button');
let main = document.querySelector('.main-container');
let popup = document.querySelector('.popup');
let closepop = document.querySelector('.close-pop')
var choosed = 'nothing';
var pc = '';

option.forEach(item=>{
    item.addEventListener( "click" , ()=>{
        choosed = item.id;
        computer();
        comparison();
        hidder();
        setimg();
    });
})

function getitem(){
    if(sessionStorage.getItem('score')){
        score.innerHTML = sessionStorage.getItem('score');
    }else{
        null;
    }
}

function computer(){
    const cases = ['rock' , 'paper' , 'scissors'];
    let x = Math.floor(Math.random()*3);
    // console.log(x); to make sure function is making random numbers.
    pc = cases[x];
}

function winner(){
    setTimeout(()=>{
        score.innerHTML = Number(score.innerHTML)  + 1 ;  
        state.innerHTML = 'you win';
        sessionStorage.setItem("score" , score.innerHTML);
    } , 3000);
}

function loser(){
    state.innerHTML = 'you lose';
}


function comparison(){

    if(choosed == pc){
        state.innerHTML = 'tied'
    }
    else if(choosed == 'rock'){
        if(pc == 'scissors'){
            winner()
        }else if(pc == 'paper'){
            loser()
        }
    }
    else if(choosed == 'paper'){
        if(pc == 'rock'){
            winner();
        }
        else if(pc == 'scissors'){
            loser()
        }
    }
    else if(choosed == 'scissors'){
        if(pc == 'paper'){
            winner();
        }else if(pc == 'rock'){
            loser()
        }
    }
    
}

function hidder(){

    if(container.style.display == 'block'){
        container.style.display = 'none' ; 
        playcontainer.backgroundImage = "none"
        resultpage.style.display = 'block'
        circlepop().then(() => statepop());
    }else{
        container.style.display = 'block' ; 
        playcontainer.backgroundImage = 'url("./images/bg-triangle.svg")'
        resultpage.style.display = 'none'
    }
    // statepop()
}

function setimg(){
    leftcircel.style.backgroundImage = `url("./images/icon-${choosed}.svg")`
    rightcircel.style.backgroundImage = `url("./images/icon-${pc}.svg")`
    rightring.classList.add(pc);
    leftring.classList.add(choosed);
}

botton.addEventListener('click' , ()=>{
    hidder();
    circlepop().then(() => statepop());
    rightring.classList.remove(pc);
    leftring.classList.remove(choosed);
})

function statepop(){
    if(middle.style.display == 'flex'){
        middle.style.display = "none";
    }else{
        setTimeout(() => {
        middle.style.display = "flex";
        }, 3000);
    }
}

function circlepop(){

    return new Promise(resolve =>{
        if(rightring.style.display == ''){
            rightring.style.display = 'none';
            loaderdiv.style.display = '';
        }else{
            setTimeout(() => {
                rightring.style.display = '';
                loaderdiv.style.display = 'none';
            }, 2000);
        }

        resolve();
    });
}

rules.addEventListener("click" , ()=>{

    main.classList.toggle('active');
    popup.classList.toggle('active');

})

closepop.addEventListener('click' , ()=>{
    
    main.classList.toggle('active');
    popup.classList.toggle('active');

})






