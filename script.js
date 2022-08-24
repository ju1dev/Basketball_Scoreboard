let homeScoreBoard = document.querySelector('#home-score');
let homeScore = 0;
let guestScoreBoard = document.querySelector('#guest-score');
let guestScore = 0;
let home1Point = document.querySelector('#home-1-point');
let home2Point = document.querySelector('#home-2-point');
let home3Point = document.querySelector('#home-3-point');
let guest1Point = document.querySelector('#guest-1-point');
let guest2Point = document.querySelector('#guest-2-point');
let guest3Point = document.querySelector('#guest-3-point');

home1Point.addEventListener('click', ()=> {
    
    homeScore += 1;
    homeScoreBoard.innerText = homeScore;
    return homeScore
})

home2Point.addEventListener('click', ()=> {
    
    homeScore += 2;
    homeScoreBoard.innerText = homeScore;
    return homeScore
})

home3Point.addEventListener('click', ()=> {
    
    homeScore += 3;
    homeScoreBoard.innerText = homeScore;
    return homeScore
})

guest1Point.addEventListener('click', ()=> {
    
    guestScore += 1;
    guestScoreBoard.innerText = guestScore;
    return guestScore
})

guest2Point.addEventListener('click', ()=> {
    
    guestScore += 2;
    guestScoreBoard.innerText = guestScore;
    return guestScore
})

guest3Point.addEventListener('click', ()=> {
    
    guestScore += 3;
    guestScoreBoard.innerText = guestScore;
    return guestScore
})