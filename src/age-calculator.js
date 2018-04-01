export class AgeCalculator {

  constructor(){
    this.now = new Date(Date.now());
  }

  getAge(year, month, day){
    const secondsInYear = 31556952;
    let birthday = new Date(`${year}-${month}-${day}`);
    let ageInSeconds = this.getTimeDifference(this.now, birthday);
    return Math.floor(ageInSeconds / secondsInYear);
  }

  getAgeInSeconds(age){
    const secondsInYear = 31556952;
    return age * secondsInYear;
  }

  getTimeDifference(date1, date2){
    let date1MS = date1.getTime();
    let date2MS = date2.getTime();

    return Math.floor((date1MS - date2MS)/1000);
  }

  setAge(age){
    this.age = age;
  }

  getConversions(){
    let conversions = {
      mercury: .24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
    };
    return conversions;
  }

  ageOn(age = this.age){
    let conversions = this.getConversions();
    let ages = {};
    Object.keys(conversions).forEach(function(key){
      ages[key] = age / conversions[key];
    });
    return ages;
  }

  getTimeLeft(lifeExpectancy){
    let conversions = this.getConversions();
    let timeLeft = {};
    let earthTimeLeft = lifeExpectancy - this.age;
    timeLeft.earth = earthTimeLeft;
    if(earthTimeLeft < 0){
      return `You've already past your expected lifespan by ${-earthTimeLeft} years. Good Job!`;
    }
    Object.keys(conversions).forEach(function(key){
      timeLeft[key] = earthTimeLeft / conversions[key];
    });
    return timeLeft;
  }
}
