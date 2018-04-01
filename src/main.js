import { AgeCalculator } from './age-calculator';

let ageCalc = new AgeCalculator();

let year = prompt('Enter your birth year:');
let month = prompt('Enter your birth month (numerical):');
let day = prompt('Enter your birth day');

let age = ageCalc.getAge(year, month, day);
ageCalc.setAge(age);
let ageOn = ageCalc.ageOn();

alert(`You are ${age} years old on earth.
  You are ${ageOn.mercury} on mercury.
  You are You are ${ageOn.venus} on venus.
  You are ${ageOn.mars} on mars.
  You are ${ageOn.jupiter} on jupiter.`);

let lifeExpectancy = prompt('Enter the average life expectancy for your demographic:');
let timeLeft = ageCalc.getTimeLeft(lifeExpectancy);

if(typeof timeLeft === "string"){
  alert(timeLeft);
} else {
  alert (`You have ${timeLeft.earth} years left to live on earth.
    You have ${timeLeft.mercury} years left to live on mercury.
    You have ${timeLeft.venus} years left to live on venus.
    You have ${timeLeft.mars} years left to live on mars.
    You have ${timeLeft.jupiter} years left to live on earth.
    Use them wisely!`);
}
