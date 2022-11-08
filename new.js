let musquitoImg = document.getElementById('musquitoImage');
let posx;
let posy;
let maxTime = 30;
let time = document.getElementById('timer-hours');
time.textContent = maxTime;

var gameLogic = function () {
    //dynamically change the position of the Musquito         
    function musquitoPosition(){
        posx = Math.trunc(Math.random() *900)+1;
        posy = Math.trunc(Math.random() *500)+1;  
        // do whatever you like here
        musquitoImg.style.left = posx+'px';
            musquitoImg.style.top = posy+'px';
        setTimeout(musquitoPosition, 1050);
    }
    musquitoPosition();

// Get Click event on the image
musquitoImg.addEventListener('click', function(){
    currentScore = Number(document.getElementById('scoreCount').textContent)+1;
    document.getElementById('scoreCount').textContent= currentScore
    console.log(Number(document.getElementById('scoreCount').textContent));
});  

setInterval(function(){
            maxTime--;
            time.textContent = maxTime;
            console.log( 'Max Time is ' +maxTime);
}, 1000);


setInterval(setTimeout(function(){
    alert('Time Over... Do you want to play the game again');
    document.getElementById('scoreCount').textContent = 0;  
    maxTime = 31; 
    time.textContent = maxTime; 
}, 30000), 3000);

// var scores = [];
// let scoresVariable=[];
// let currentScore;

// var playerName = prompt('Please enter your Name');
// document.getElementById('playerName').textContent = `Hello, ${playerName}`;
}

setInterval(gameLogic(), 3000);



ananth = {
    firstname: 'Soumya',
    lastName: 'Prasanna',
    fullName: `${this.firstname}+${this.lastName}`
    }
console.log(ananth.fullName);

let dateDetails =new Date(12-26-1995);
dayDetails = new Date();
dayInfo = dateDetails.getDay()
console.log('dddd', dayInfo);
console.log(dateDetails)