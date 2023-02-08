const computerchoicedis = document.getElementById('computer-choice')
const userchoicedis = document.getElementById('user-choice')
const resultdis = document.getElementById('result')
const possible = document.querySelectorAll('button')

let userchoice
let computerchoice
let result

possible.forEach(possible=>possible.addEventListener('click',(e)=>
{
    userchoice=e.target.id
    userchoicedis.innerHTML=userchoice
    getrandom()
    getresult()
}))

function getrandom()
{
    const rand=Math.floor(Math.random()*3)+1
    
    if(rand ===1) 
    computerchoice='Rock'
    else if(rand===2)
    computerchoice='Paper'
    else
    computerchoice='Scissors'

    computerchoicedis.innerHTML=computerchoice
}

function getresult()
{
    if(computerchoice==userchoice)
    result="It's a Draw!"
    if(computerchoice=='Rock' && userchoice=='Paper')
    result='You Win!'
    if(computerchoice=='Rock' && userchoice=='Scissors')
    result='You Loose!'
    if(computerchoice=='Paper' && userchoice=='Scissors')
    result='You Win!'
    if(computerchoice=='Paper' && userchoice=='Rock')
    result='You Loose!'
    if(computerchoice=='Scissors' && userchoice=='Paper')
    result='You Loose!'
    if(computerchoice=='Scissors' && userchoice=='Rock')
    result='You Win!'

    resultdis.innerHTML=result
    
}
