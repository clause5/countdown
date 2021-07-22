const daysCounter = document.getElementById('days');
const hoursCounter = document.getElementById('hours');
const minutesCounter = document.getElementById('minutes');
const secondsCounter = document.getElementById('seconds');

const finalDate = new Date().setDate(new Date().getDate() +14);

function countdown(){
    let dateNow = new Date();
    let remaningTime  = finalDate - dateNow;

    days = Math.floor(remaningTime / (24*60*60*1000));
    daysms= remaningTime  % (24*60*60*1000);

    hours = Math.floor((daysms)/(60*60*1000));
    hoursms= remaningTime  % (60*60*1000);

    minutes = Math.floor((hoursms)/(60*1000));
    minutesms= remaningTime  % (60*1000);

    seconds = Math.floor((minutesms)/(1000));
    
    daysCounter.innerText = `${days}`;
    hoursCounter.innerText =`${hours}`;
    minutesCounter.innerText =`${minutes}`;
    secondsCounter.innerText = `${seconds}`
    console.log(days+":"+hours+":"+minutes+":"+sec);
}

window.document.onload = setInterval(countdown,1000)