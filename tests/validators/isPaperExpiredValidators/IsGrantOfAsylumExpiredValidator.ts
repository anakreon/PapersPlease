import { IsGrantOfAsylumExpiredValidator } from '../../../src/validators/isPaperExpiredValidators/IsGrantOfAsylumExpiredValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';

describe('IsGrantOfAsylumExpiredValidator', () => {
    it('no grant of asylum, not expired', function () {
        const papers = new Papers();
        const validator = new IsGrantOfAsylumExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('has grant of asylum, is expired', function () {
        const papers = new Papers();
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setExpirationDate(new Date('November 20, 1982'));
        papers.setGrantOfAsylum(grantOfAsylum);

        const validator = new IsGrantOfAsylumExpiredValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has grant of asylum, not expired', function () {
        const papers = new Papers();
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setExpirationDate(new Date('November 25, 1982'));
        papers.setGrantOfAsylum(grantOfAsylum);

        const validator = new IsGrantOfAsylumExpiredValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});