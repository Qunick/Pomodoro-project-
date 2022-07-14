// Timer to develop

const pomodoroTab = document.getElementById("Pomodoro");
const ShortbreakTab = document.getElementById("Shortbreak");
const LongbreakTab = document.getElementById("Longbreak");

const pomodoroTabcontent =document.getElementById("pomodoro-content");
const ShortbreakTabcontent =document.getElementById("Shortbreak-content");
const LongbreakTabcontent =document.getElementById("longbreak-content");



pomodoroTab.addEventListener("click",function() {

    ShortbreakTab.classList.remove("active");
    LongbreakTab.classList.remove("active");
    pomodoroTab.classList.add("active");
    ShortbreakTabcontent.classList.remove("active");
    LongbreakTabcontent.classList.remove("active");
    pomodoroTabcontent.classList.add("active");
});
ShortbreakTab.addEventListener("click",function() {

    ShortbreakTabcontent.classList.add("active");
    LongbreakTabcontent.classList.remove("active");
    pomodoroTabcontent.classList.remove("active");
    ShortbreakTabcontent.classList.add("active");
    LongbreakTabcontent.classList.remove("active");
    pomodoroTabcontent.classList.remove("active");
});

LongbreakTab.addEventListener("click",function() {

    ShortbreakTab.classList.remove("active");
    LongbreakTab.classList.add("active");
    pomodoroTab.classList.remove("active");
    ShortbreakTabcontent.classList.remove("active");
    LongbreakTabcontent.classList.add("active");
    pomodoroTabcontent.classList.remove("active");
});

/*setInterval(function() {
   console.log(new Date().toISOString())
},1000)*/

function timer(seconds) {
   //console.log(Date.now());
   const now = Date.now();
   const then =now + (seconds*1000);

  const timerinterval = setInterval(function() {
    const secondsLeft = Math.round((then-Date.now())/1000);
    displayTime(secondsLeft, pomodoroTime);

    
    if(secondsLeft <1) {
        clearInterval(timerinterval);
        
    }
   },1000);
};

function displayTime(seconds , element){
    const minute = Math.floor(seconds/60);
    const second = seconds % 60;

    console.log({minute,second});

    element.innerText =minute + " : " + second;



}
const pomodoroTime = document.getElementById("pomodoroTime");

const pomodoroButton = document.getElementById("pomodoroButton");
pomodoroButton.addEventListener("click",function(){
    const pomodoroTotalTime =1500;
    timer(pomodoroTotalTime);
});


