import { NameConsistencyValidator } from '../../../src/validators/consistencyValidators/NameConsistencyValidator';
import { Papers } from '../../../src/Papers';
import { GrantOfAsylum } from '../../../src/papers/GrantOfAsylum';
import { AccessPermit } from '../../../src/papers/AccessPermit';
import { DiplomaticAuthorization } from '../../../src/papers/DiplomaticAuthorization';
import { Passport } from '../../../src/papers/Passport';
import { IdCard } from '../../../src/papers/IdCard';

describe('NameConsistencyValidator', () => {
    it('all names consistent', function () {
        const name = 'Firstname Lastname';
        
        const accessPermit = new AccessPermit();
        accessPermit.setName(name);

        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setName(name)
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setName(name);

        const passport = new Passport();
        passport.setName(name);

        const idCard = new IdCard();
        idCard.setName(name);

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NameConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('has all ids, all different', function () {                
        const accessPermit = new AccessPermit();
        accessPermit.setName('nameone');

        const diplomaticAuthorization = new DiplomaticAuthorization();
        diplomaticAuthorization.setName('nametwo')
        
        const grantOfAsylum = new GrantOfAsylum();
        grantOfAsylum.setName('namethree');

        const passport = new Passport();
        passport.setName('namefour');

        const idCard = new IdCard();
        idCard.setName('namefive');

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setDiplomaticAuthorization(diplomaticAuthorization);
        papers.setGrantOfAsylum(grantOfAsylum);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NameConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('some papers missing, other same', function () {
        const name = 'Firstname Lastname';
        
        const accessPermit = new AccessPermit();
        accessPermit.setName(name);

        const passport = new Passport();
        passport.setName(name);

        const idCard = new IdCard();
        idCard.setName(name);

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NameConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
    it('some papers missing, other different', function () {
        const accessPermit = new AccessPermit();
        accessPermit.setName('nameone');

        const passport = new Passport();
        passport.setName('namefour');

        const idCard = new IdCard();
        idCard.setName('namefive');

        const papers = new Papers();
        papers.setAccessPermit(accessPermit);
        papers.setPassport(passport);
        papers.setIdCard(idCard);

        const validator = new NameConsistencyValidator();
        expect(validator.validate(papers)).toBeFalsy();
    });
    it('all papers missing', function () {
        const papers = new Papers();

        const validator = new NameConsistencyValidator();
        expect(validator.validate(papers)).toBeTruthy();
    });
});
