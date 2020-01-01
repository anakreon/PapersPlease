import { IsCitizenOfUnknownNationValidator } from '../../src/validators/IsCitizenOfUnknownNationValidator';
import { Papers } from '../../src/Papers';
import { Passport } from '../../src/papers/Passport';

describe('IsCitizenOfUnknownNationValidator', () => {
    it('has nation set from passport #passportValidator', function () {
        const papers = new Papers();
        const passport = new Passport();
        passport.setNation('Arstotzka');
        papers.setPassport(passport);

        const validator = new IsCitizenOfUnknownNationValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has no nation set', function () {
        const papers = new Papers();
        
        const validator = new IsCitizenOfUnknownNationValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});
