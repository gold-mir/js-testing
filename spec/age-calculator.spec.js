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
});
