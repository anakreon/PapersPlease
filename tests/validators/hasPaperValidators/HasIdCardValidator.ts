import { HasIdCardValidator } from '../../../src/validators/hasPaperValidators/HasIdCardValidator';
import { Papers } from '../../../src/Papers';
import { IdCard } from '../../../src/papers/IdCard';

describe('HasIdCardValidator', () => {
    it('has id card', function () {
        const papers = new Papers();
        const idCard = new IdCard();
        papers.setIdCard(idCard);

        const validator = new HasIdCardValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('no id card', function () {
        const papers = new Papers();

        const validator = new HasIdCardValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
});
