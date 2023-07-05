const hourEle = document.querySelector(".hours");
const minuteEle = document.querySelector(".minutes");
const secondEle = document.querySelector(".seconds");

function updateClock(){
    const currentTime = new Date();
    setTimeout(updateClock, 1000);
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();
    const hourDegree = (currentHour/12) * 360;
    const minuteDegree = (currentMinute/60) * 360;
    const secondDegree = (currentSecond/60) * 360;
    hourEle.style.transform = 'rotate('+hourDegree+'deg)';
    minuteEle.style.transform = 'rotate('+minuteDegree+'deg)';
    secondEle.style.transform = 'rotate('+secondDegree+'deg)';
}

updateClock();