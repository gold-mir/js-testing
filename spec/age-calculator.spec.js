import { AgeCalculator } from '../src/age-calculator';

describe('AgeCalculator', function(){
  let ageCalc;
  beforeEach(function(){
    ageCalc = new AgeCalculator();
  });

  it('should convert an inputted age to seconds', function(){
    let myAgeInSeconds = ageCalc.getAgeInSeconds(21);

    expect(myAgeInSeconds).toEqual(662695992);
  });

  it('should get the difference between two dates in seconds', function(){
    let longTimeAgo = new Date('August 11, 1996');
    let now = new Date(Date.now());

    let timeDifference = ageCalc.getTimeDifference(now, longTimeAgo);
    expect(timeDifference).toEqual(Math.floor((now.getTime() - longTimeAgo.getTime())/1000));
  });
});
