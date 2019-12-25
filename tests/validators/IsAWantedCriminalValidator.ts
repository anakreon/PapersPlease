import { IsAWantedCriminalValidator } from '../../src/validators/IsAWantedCriminalValidator';
import { Papers } from '../../src/Papers';
import { Passport } from '../../src/papers/Passport';

describe('IsAWantedCriminalValidator', () => {
    let criminalName = '';
    beforeEach(function () {
        criminalName = 'Bad Criminal';
    });

    it('is, has name set from passport', function () {
        const papers = new Papers();
        const passport = new Passport();
        passport.setName(criminalName);
        papers.setPassport(passport);

        const validator = new IsAWantedCriminalValidator(criminalName);
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('is not, different name, has name set from passport', function () {
        const papers = new Papers();
        const passport = new Passport();
        passport.setName('ImNot Criminal');
        papers.setPassport(passport);

        const validator = new IsAWantedCriminalValidator(criminalName);
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('is not, has no name set', function () {
        const papers = new Papers();
        
        const validator = new IsAWantedCriminalValidator(criminalName);
        expect(validator.validate(papers)).toBeFalsy();
    });
});
