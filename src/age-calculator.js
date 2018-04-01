export class AgeCalculator {

  constructor(){
    this.now = Date.now();
  }

  getAge(bdayObj){
    const secondsInYear = 31556952;
    let birthday = new Date(`${bdayObj.year}-${bdayObj.month}-${bdayObj.day}`);
    let ageInSeconds = this.getTimeDifference(this.now, birthday);
    return Math.floor(ageInSeconds / secondsInYear)
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

  ageOn(age = this.age){
    let conversions = {
      mercury: .24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
    };
    let ages = {};
    Object.keys(conversions).forEach(function(key){
      ages[key] = age / conversions[key];
    });
    return ages;
  }
}
