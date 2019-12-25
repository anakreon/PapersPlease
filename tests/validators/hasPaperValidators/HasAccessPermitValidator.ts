import { HasAccessPermitValidator } from '../../../src/validators/hasPaperValidators/HasAccessPermitValidator';
import { Papers } from '../../../src/Papers';
import { AccessPermit } from '../../../src/papers/AccessPermit';

describe('HasAccessPermitValidator', () => {
    it('has access permit', function () {
        const papers = new Papers();
        const accessPermit = new AccessPermit();
        papers.setAccessPermit(accessPermit);

        const validator = new HasAccessPermitValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('no access permit', function () {
        const papers = new Papers();

        const validator = new HasAccessPermitValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});
