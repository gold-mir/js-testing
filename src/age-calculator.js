export class AgeCalculator {
  getAgeInSeconds(age){
    const secondsInYear = 31556952;
    return age * secondsInYear;
  }

  getTimeDifference(date1, date2){
    let date1MS = date1.getTime();
    let date2MS = date2.getTime();

    return Math.floor((date1MS - date2MS)/1000);
  }
}
