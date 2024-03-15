//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen.
//Initial Reference
let dayTxt = document.querySelector('.container .inner-container .day');
let otherDateInfo = document.querySelector('.container .inner-container .other-date-info');
let hrMin = document.querySelector('.container .inner-container .hr-min');
let amPmTxt = document.querySelector('.container .inner-container  .am-pm');
let seconds = document.querySelector('.container .inner-container .second-box .second');
//Weeks
const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

let getDates = () => {
        let d = new Date();
        let day = weeks[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        dayTxt.innerHTML = day;
        otherDateInfo.innerHTML = `${date} ${month} ${year}`;
}

let getTime = () => {
        let d = new Date();
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let amPm = "AM";

        if (hr > 12) {
                amPm = "PM";
                hr = hr - 12;
        }

        if (hr < 10) {
                hr = "0" + hr;
        }

        if (min < 10) {
                min = "0" + min;
        }

        if (sec < 10) {
                sec = "0" + sec;
        }

        hrMin.innerHTML = `${hr} : ${min}`;
        amPmTxt.innerHTML = `${amPm}`;
        seconds.innerHTML = `00 : ${sec}`;
};

setInterval(getTime, 1000);
getDates();

//move sec hand
let deg = 6;
let secHand = document.querySelector('.sec-hand');
setInterval(() => {
        let day = new Date();
        let ss = day.getSeconds() * deg;
        secHand.style.transform = `rotateZ(${ss}deg)`;
})
