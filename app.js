const dayElement = document.querySelector('#day');
const timeElement = document.querySelector('#time');

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


setInterval(() => {
    const day = DAYS[new Date().getUTCDay()];
    const hours = String(new Date().getUTCHours()).padStart(2, "0");
    const minutes = String(new Date().getUTCMinutes()).padStart(2, "0");
    const seconds = String(new Date().getUTCSeconds()).padStart(2, "0");
    dayElement.textContent = day;
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);