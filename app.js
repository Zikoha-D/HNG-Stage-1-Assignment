// Get current time in UTC
let time = new Date();

// Get element that will display the current time in UTC
let currentTime = document.querySelector(".timeDisplay");

// Extract the hours, minutes, and seconds in UTC
let hours = time.getUTCHours().toString().padStart(2, '0');
let minutes = time.getUTCMinutes().toString().padStart(2, '0');

// Format the time in HH:MM format
let utcTime = `${hours}:${minutes}`;

// Display time in UTC
currentTime.innerHTML = `<b>Time: </b>${utcTime}`;

// Get element that will display the current day of the week
let currentDay = document.querySelector(".dayDisplay");

// Get current day of the week
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let Day = days[time.getDay()];

// Display the day of the week
currentDay.innerHTML = `<b>Day: </b>${Day}`;
