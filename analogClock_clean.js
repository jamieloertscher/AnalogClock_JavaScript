// Update the analog clock
function updateClock() {
    const now = new Date();

    // Get current time
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Calculate smooth movement
    const totalSeconds = seconds + milliseconds / 1000;
    const totalMinutes = minutes + totalSeconds / 60;
    const totalHours = hours + totalMinutes / 60;

    // Convert to degrees
    const secondDegrees = (totalSeconds / 60) * 360;
    const minuteDegrees = (totalMinutes / 60) * 360;
    const hourDegrees = (totalHours / 12) * 360;

    // Select clock hands
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    // Rotate clock hands
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Run update every 50ms
setInterval(updateClock, 50);
updateClock();