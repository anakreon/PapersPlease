import { IsPassportExpiredValidator } from '../../../src/validators/isPaperExpiredValidators/IsPassportExpiredValidator';
import { Papers } from '../../../src/Papers';
import { Passport } from '../../../src/papers/Passport';

describe('IsPassportExpiredValidator', () => {
    it('no passport, not expired', function () {
        const papers = new Papers();
        const validator = new IsPassportExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has passport, is expired', function () {
        const papers = new Papers();
        const passport = new Passport();
        passport.setExpirationDate(new Date('November 20, 1982'));
        papers.setPassport(passport);

        const validator = new IsPassportExpiredValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has passport, not expired', function () {
        const papers = new Papers();
        const passport = new Passport();
        passport.setExpirationDate(new Date('November 25, 1982'));
        papers.setPassport(passport);

        const validator = new IsPassportExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});