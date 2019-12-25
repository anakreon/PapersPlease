import { HasPassportValidator } from '../../../src/validators/hasPaperValidators/HasPassportValidator';
import { Papers } from '../../../src/Papers';
import { Passport } from '../../../src/papers/Passport';

describe('HasPassportValidator', () => {
    it('has passport', function () {
        const papers = new Papers();
        const passport = new Passport();
        papers.setPassport(passport);

        const validator = new HasPassportValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('no passport', function () {
        const papers = new Papers();

        const validator = new HasPassportValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});
