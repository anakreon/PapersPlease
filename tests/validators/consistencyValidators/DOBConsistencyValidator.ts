import { DOBConsistencyValidator } from '../../../src/validators/consistencyValidators/DOBConsistencyValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';
import { Passport } from '../../../src/papers/Passport';


describe('DOBConsistencyValidator', () => {
    it('all dates consistent', function () {
        const dateOfBirth = new Date('10-05-2015');
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setDateOfBirth(dateOfBirth);
        
        const passport = new Passport();
        passport.setDateOfBirth(dateOfBirth);

        const papers = new Papers();
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);

        const validator = new DOBConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has all dates, all different', function () {
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setDateOfBirth(new Date('10-05-2015'));
        
        const passport = new Passport();
        passport.setDateOfBirth(new Date('11-05-2015'));

        const papers = new Papers();
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);

        const validator = new DOBConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('some papers missing', function () {
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setDateOfBirth(new Date('10-05-2015'));

        const papers = new Papers();
        papers.setGrantOfAsylum(grantOfAsylum);

        const validator = new DOBConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('all papers missing', function () {
        const papers = new Papers();

        const validator = new DOBConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});
