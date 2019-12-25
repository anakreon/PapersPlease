import { HeightConsistencyValidator } from '../../../src/validators/consistencyValidators/HeightConsistencyValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';
import { AccessPermit } from '../../../src/papers/AccessPermit';
import { IdCard } from '../../../src/papers/IdCard';

describe('HeightConsistencyValidator', () => {
    it('all heights consistent', function () {
        const height = '177';
        
        const accessPermit = new AccessPermit();
        accessPermit.setHeight(height);
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setHeight(height);

        const idCard = new IdCard();
        idCard.setHeight(height);

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new HeightConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has all heights, all different', function () {
        const accessPermit = new AccessPermit();
        accessPermit.setHeight('178');
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setHeight('179');

        const idCard = new IdCard();
        idCard.setHeight('180');

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new HeightConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('some papers missing, other same', function () {
        const height = '177';

        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setHeight(height);

        const idCard = new IdCard();
        idCard.setHeight(height);

        const papers = new Papers();
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new HeightConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('some papers missing, other different', function () {
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setHeight('177');

        const idCard = new IdCard();
        idCard.setHeight('178');

        const papers = new Papers();
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setIdCard(idCard);

        const validator = new HeightConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('all papers missing', function () {
        const papers = new Papers();

        const validator = new HeightConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});
