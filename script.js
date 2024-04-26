let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let laps = [];

startBtn.addEventListener("click", function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener("click", function () {
    timer = false;
});

resetBtn.addEventListener("click", function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('laps').innerHTML = "";
    laps = [];
});

lapBtn.addEventListener("click", lap);

function lap() {
    if (timer) {
        let lapTime = formatTime(hour, minute, second, count);
        laps.push(lapTime);
        displayLaps();
    }
}

function displayLaps() {
    let lapsContainer = document.getElementById('laps');
    lapsContainer.innerHTML = "";
    laps.forEach(function (lap, index) {
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${index + 1}: ${lap}`;
        lapsContainer.appendChild(lapItem);
        lapItem.style.color = "rgb(10, 238, 10)";
        lapItem.style.fontSize = "x-large"
    });
}

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        let hrString = (hour < 10) ? "0" + hour : hour;
        let minString = (minute < 10) ? "0" + minute : minute;
        let secString = (second < 10) ? "0" + second : second;
        let countString = (count < 10) ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10);
    }
}

function formatTime(hour, minute, second, count) {
    let hrString = (hour < 10) ? "0" + hour : hour;
    let minString = (minute < 10) ? "0" + minute : minute;
    let secString = (second < 10) ? "0" + second : second;
    let countString = (count < 10) ? "0" + count : count;
    return `${hrString}:${minString}:${secString}.${countString}`;
}
