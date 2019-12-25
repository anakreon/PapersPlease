import { HasWorkPassValidator } from '../../../src/validators/hasPaperValidators/HasWorkPassValidator';
import { Papers } from '../../../src/Papers';
import { WorkPass } from '../../../src/papers/WorkPass';

describe('HasWorkPassValidator', () => {
    it('has work pass', function () {
        const papers = new Papers();
        const workPass = new WorkPass();
        papers.setWorkPass(workPass);

        const validator = new HasWorkPassValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('no work pass', function () {
        const papers = new Papers();

        const validator = new HasWorkPassValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});
