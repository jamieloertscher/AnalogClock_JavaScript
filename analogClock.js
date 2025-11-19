// Function updateClock
function updateClock() {

// Takes the current Time
    const now = new Date();
    
// Caluculates the smooth movement of the pointers
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;
    
// Caluculates the smooth movement of the pointers
    const totalSeconds = seconds + milliseconds / 1000;
    const totalMinutes = minutes + totalSeconds / 60;
    const totalHours = hours + totalMinutes / 60;
    
// Calculates the degrees for the pointers
    const secondDegrees = (totalSeconds / 60) * 360;
    const minuteDegrees = (totalMinutes / 60) * 360;
    const hourDegrees = (totalHours / 12) * 360;
    
// Selects the pointer
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

// Rotates the pointers
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Updates the clock every 50 milliseconds
setInterval(updateClock, 50);
updateClock();
