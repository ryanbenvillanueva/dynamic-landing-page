// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros to minutes and seconds 
function addZero(number) {
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = "Good Morning, ";
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon, ";
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = "Good Evening, ";
    }
}

// Run
showTime();
setBgGreet();