import { WeightConsistencyValidator } from '../../../src/validators/consistencyValidators/WeightConsistencyValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';
import { AccessPermit } from '../../../src/papers/AccessPermit';
import { IdCard } from '../../../src/papers/IdCard';

describe('WeightConsistencyValidator', () => {
    it('all weights consistent', function () {
        const weight = '177';
        
        const accessPermit = new AccessPermit();
        accessPermit.setWeight(weight);
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setWeight(weight);

        const idCard = new IdCard();
        idCard.setWeight(weight);

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new WeightConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has all weights, all different', function () {
        const accessPermit = new AccessPermit();
        accessPermit.setWeight('178');
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setWeight('179');

        const idCard = new IdCard();
        idCard.setWeight('180');

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new WeightConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('some papers missing, other same', function () {
        const weight = '177';

        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setWeight(weight);

        const idCard = new IdCard();
        idCard.setWeight(weight);

        const papers = new Papers();
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new WeightConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('some papers missing, other different', function () {
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setWeight('177');

        const idCard = new IdCard();
        idCard.setWeight('178');

        const papers = new Papers();
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new WeightConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('all papers missing', function () {
        const papers = new Papers();

        const validator = new WeightConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});
