
const newYears = '2 Feb 2022';

const dayss = document.getElementById('days');
const hourss = document.getElementById('hours');
const minss = document.getElementById('mins');
const sec = document.getElementById('sec');

function countDown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const totalSecs = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600  / 24);
    const hours = Math.floor(totalSecs /3600) % 24;
    const mins = Math.floor(totalSecs / 60) % 60;
    const secs = Math.floor(totalSecs) % 60;

    dayss.innerHTML = formatTime(days);
    hourss.innerHTML = formatTime(hours);
    minss.innerHTML = formatTime(mins);
    sec.innerHTML = formatTime(secs);

    console.log(days, hours, mins, secs)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}



setInterval(countDown, 1000)