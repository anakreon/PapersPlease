import { Inspector } from '../src/Inspector';
import data from './data';
import { Papers } from '../src/Papers';
import { Passport } from '../src/papers/Passport';

describe('Inspector', () => {
    let inspector: Inspector;
    beforeEach(function () {
        inspector = new Inspector();
    });
    describe('receiveBulletin', () => {
        it('', () => {
            /*const bulletin = `Entrants require passport
                Allow citizens of Arstotzka, Obristan`;
            inspector.receiveBulletin(bulletin);
            const inst: any = inspector;


            const papers = new Papers();
            const passport = new Passport();
            papers.setPassport(passport);*/

            //inst.ruleset.getDetainmentRule(papers)
            //inst.ruleset.getDenialRule(papers)
        
        });
    });

    /*it('async', (done) => {
        setTimeout(() => {
            expect(1).toEqual(1);
            done();
        }, 3000);
    });*/
});