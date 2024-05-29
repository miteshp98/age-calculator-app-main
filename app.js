"use strict";

const submitBtn = document.querySelector(".submit");
const inputLabel = document.querySelectorAll("label");
const userInput = document.querySelectorAll("input");
const age = document.querySelectorAll(".age");
const errorMsg = document.querySelectorAll(".error");
const date = new Date();
let currentDate = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

//Show Error If Input Is Not Valid
function toggleError(index, msg) {
  if (msg) {
    errorMsg[index].classList.add("visible-error");
    inputLabel[index].classList.add("red-error");
    errorMsg[index].innerHTML = msg;
    userInput[index].style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    setTimeout(() => {
      errorMsg[index].classList.remove("visible-error");
      inputLabel[index].classList.remove("red-error");
      userInput[index].style.borderColor = "hsl(0, 0%, 86%)";
    }, 3000);
  }
}

//Check is User Day Is Valid or Not
function checkValidDay() {
  const userBirthDay = +userInput[0].value;
  const userBirthMonth = +userInput[1].value;
  const longMonths = [1, 3, 5, 7, 8, 10, 12];

  if (!userBirthDay) {
    toggleError(0, `<em>This Field is required</em>`);
    toggleError(0);
  } else if (userBirthDay <= 0 || userBirthDay > 31) {
    toggleError(0, `<em>Must be valid day</em>`);
    toggleError(0);
  } else if (userBirthDay == 31 && !longMonths.includes(userBirthMonth)) {
    toggleError(0, `<em>Must be valid date</em>`);
    toggleError(0);
  } else if (
    userBirthMonth == 2 &&
    userBirthDay > (isLeapYear(currentYear) ? 29 : 28)
  ) {
    toggleError(0, `<em>Must be valid date</em>`);
    toggleError(0);
  } else {
    return userBirthDay;
  }
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//Check If Month is Valid or Not
function checkValidMonth() {
  const userBirthMonth = +userInput[1].value;

  if (!userBirthMonth) {
    toggleError(1, `<em>This Field is required</em>`);
    toggleError(1);
  } else if (userBirthMonth <= 0 || userBirthMonth > 12) {
    toggleError(1, `<em>Must be valid month</em>`);
    toggleError(1);
  } else {
    return userBirthMonth;
  }
}

//Check If Year is Valid & Not Greater then Current
function checkValidYear() {
  const userBirthYear = +userInput[2].value;

  if (!userBirthYear) {
    toggleError(2, `<em>This Field is required</em>`);
    toggleError(2);
  } else if (userBirthYear > currentYear) {
    toggleError(2, `<em>Must be in the past</em>`);
    toggleError(2);
  } else {
    return userBirthYear;
  }
}

//Show Output
function showOutput(years, months, days) {
  age[0].textContent = years;
  age[1].textContent = months;
  age[2].textContent = days;
}

//Calculate Age
function calculateAge() {
  const birthDate = checkValidDay();
  const birthMonth = checkValidMonth();
  const birthYear = checkValidYear();

  if (!birthDate || !birthMonth || !birthYear) {
    showOutput("--", "--", "--");
  } else {
    let userYears = Math.abs(currentYear - birthYear);
    let userMonths = Math.abs(currentMonth - birthMonth);
    let userDays = Math.abs(currentDate - birthDate);
    showOutput(userYears, userMonths, userDays);
  }
}

submitBtn.addEventListener("click", calculateAge);
