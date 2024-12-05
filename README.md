# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [ solution URL ](https://github.com/miteshp98/age-calculator-app-main)
- Live Site URL: [ live site URL ](https://miteshp98.github.io/age-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- DOM Manipulation: I learned how to interact with the Document Object Model (DOM) using JavaScript to dynamically update the content and styling of HTML elements based on user input and application logic.

- Input Validation: I improved my understanding of input validation techniques in JavaScript, such as checking for valid day, month, and year values, and providing meaningful error messages to the user to enhance the user experience.

- Error Handling: I implemented error handling mechanisms to gracefully handle invalid user input, ensuring that the application remains robust and user-friendly even in the face of unexpected scenarios.

- Date Manipulation: Through working with dates in JavaScript, particularly in calculating age based on birthdate and current date, I enhanced my knowledge of date manipulation techniques and how to handle edge cases like leap years and dates within the same year.

- Code Organization and Modularity: I practiced structuring my code in a modular and organized manner, separating concerns into individual functions for input validation, age calculation, error handling, and DOM manipulation. This approach improves code readability, maintainability, and reusability.

## Features

- Validates user input for day, month, and year.
- Calculates the user's age based on the current date.
- Displays error messages for invalid input.
- Handles edge cases like leap years and dates before the birthdate within the same year.

To see how you can add code snippets, see below:

```js
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

- Enhanced Error Handling: I will explore additional error handling techniques to provide more informative feedback to the user, such as highlighting the specific input field causing the error or suggesting valid input formats.

- Performance Optimization: I will optimize the performance of the Age Calculator by identifying and addressing bottlenecks in the code, minimizing resource consumption, and implementing caching strategies where applicable.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
