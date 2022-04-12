const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(hours);

    if (hours >= 0 && hours <= 4) {
        document.body.style.backgroundImage = 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)';
    } else if (hours >= 5 && hours <= 7) {
        document.body.style.backgroundImage = 'linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)'; 
    } else if (hours >= 8 && hours <= 13) {
        document.body.style.backgroundImage = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
    } else if (hours >= 14 && hours <= 17) {
        document.body.style.backgroundImage = 'linear-gradient(to right, #fa708a 0%, #fee1a1 100%)';
    } else if (hours >= 18 && hours <= 23) {
        document.body.style.backgroundImage = 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)';
    } 
}

setInterval(setDate, 1000);
setDate();