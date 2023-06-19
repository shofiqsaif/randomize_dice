var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;
var pic1 ;
var pic2;
var heading ;
var wins;

if(p1 > p2){
        wins = 1;
}
else if(p1==p2){
        wins = 0;
}
else{
        wins = 2;
}

if(wins){
        heading = "Player "+wins+" has won!";
}
else{
        heading = "DRAW";
}

pic1 = './images/dice'+p1+'.png';
pic2 = './images/dice'+p2+'.png';

document.getElementsByClassName('img1')[0].setAttribute("src",pic1);
document.getElementsByClassName('img2')[0].setAttribute("src",pic2);
document.querySelector('h1').textContent = heading;