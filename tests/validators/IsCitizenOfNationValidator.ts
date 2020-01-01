import { IsCitizenOfNationValidator } from '../../src/validators/IsCitizenOfNationValidator';
import { Papers } from '../../src/Papers';
import { Passport } from '../../src/papers/Passport';

describe('IsCitizenOfNationValidator', () => {
    it('is, has nation set from passport #passportValidator', function () {
        const papers = new Papers();
        const passport = new Passport();
        passport.setNation('Arstotzka');
        papers.setPassport(passport);

        const validator = new IsCitizenOfNationValidator('Arstotzka');
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('is not, wrong nation, has nation set from passport #passportValidator', function () {
        const papers = new Papers();
        const passport = new Passport();
        passport.setNation('Impor');
        papers.setPassport(passport);

        const validator = new IsCitizenOfNationValidator('Arstotzka');
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('is not, has no nation set', function () {
        const papers = new Papers();
        
        const validator = new IsCitizenOfNationValidator('Arstotzka');
        expect(validator.validate(papers)).toBeFalsy();
    });
});
