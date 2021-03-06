import { AgeCalculator } from '../src/age-calculator';

describe('AgeCalculator utilities', function(){
  let ageCalc;
  beforeEach(function(){
    ageCalc = new AgeCalculator();
  });

  it('should convert an inputted age to seconds', function(){
    let myAgeInSeconds = ageCalc.getAgeInSeconds(21);

    expect(myAgeInSeconds).toEqual(662695992);
  });

  it('should get an age from a birth date', function(){
    let myBirthday = {year: 1996, month: 8, day: 11};
    let now = new Date(1522551468624);
    ageCalc.now = now;

    let myAge = ageCalc.getAge(myBirthday.year, myBirthday.month, myBirthday.day);
    expect(myAge).toEqual(21);
  });

  it('should get the difference between two dates in seconds', function(){
    let longTimeAgo = new Date('August 11, 1996');
    let now = new Date(Date.now());

    let timeDifference = ageCalc.getTimeDifference(now, longTimeAgo);
    expect(timeDifference).toEqual(Math.floor((now.getTime() - longTimeAgo.getTime())/1000));
  });
});

describe('AgeCalculator.ageOn()', function(){
  let ageCalc;
  let ageOn;

  beforeEach(function(){
    ageCalc = new AgeCalculator();
    ageCalc.setAge(21);
    ageOn = ageCalc.ageOn();
  });

  it('should let you set your age', function(){
    ageCalc.setAge(40);
    expect(ageCalc.age).toEqual(40);
  });

  it('should return an object', function(){
    expect(typeof ageOn).toEqual('object');
  });

  it('should convert to mercury years', function(){
    expect(ageOn.mercury).toEqual(21/.24);
  });

  it('should convert to venus years', function(){
    expect(ageOn.venus).toEqual(21/.62);
  });

  it('should convert to mars years', function(){
    expect(ageOn.mars).toEqual(21/1.88);
  });

  it('should convert to jupiter years', function(){
    expect(ageOn.jupiter).toEqual(21/11.86);
  });
});

describe('AgeCalculator.getTimeLeft()', function(){
  let ageCalc;
  let timeLeft;

  beforeEach(function(){
    ageCalc = new AgeCalculator();
    ageCalc.setAge(21);
    timeLeft = ageCalc.getTimeLeft(80);
  });

  it('should tell you how much time you have left to live on various planets', function(){
    expect(timeLeft.mercury).toEqual(245.83333333333334);
    expect(timeLeft.venus).toEqual(95.16129032258064);
    expect(timeLeft.earth).toEqual(59);
    expect(timeLeft.mars).toEqual(31.382978723404257);
    expect(timeLeft.jupiter).toEqual(4.974704890387859);
  });

  it("should return an error message if you've passed your expected lifespan already", function(){
    ageCalc.setAge(9000);
    timeLeft = ageCalc.getTimeLeft(80);
    expect(typeof timeLeft).toEqual("string");
  });
});
