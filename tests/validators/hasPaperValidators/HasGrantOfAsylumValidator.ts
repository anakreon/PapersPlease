import { HasGrantOfAsylumValidator } from '../../../src/validators/hasPaperValidators/HasGrantOfAsylumValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';

describe('HasGrantOfAsylumValidator', () => {
    it('has grant of asylum', function () {
        const papers = new Papers();
        const grantOfAsylum = new GrantOfAsylum();
        papers.setGrantOfAsylum(grantOfAsylum);

        const validator = new HasGrantOfAsylumValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('no grant of asylum', function () {
        const papers = new Papers();

        const validator = new HasGrantOfAsylumValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});
