import { Papers } from '../../src/Papers';
import { Validator } from '../../src/types';
import { ImplicativeValidator } from '../../src/validators/ImplicativeValidator';

describe('ImplicativeValidator', () => {
    it('true, true => true', function () {
        const papers = new Papers();
        const premise: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const conclusion: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const implicativeValidator = new ImplicativeValidator(premise, conclusion);
        expect(implicativeValidator.validate(papers)).toBeTruthy();
    });
    it('false, true => false', function () {
        const papers = new Papers();
        const premise: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const conclusion: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const implicativeValidator = new ImplicativeValidator(premise, conclusion);
        expect(implicativeValidator.validate(papers)).toBeFalsy();
    });
    it('true, false => true', function () {
        const papers = new Papers();
        const premise: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const conclusion: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const implicativeValidator = new ImplicativeValidator(premise, conclusion);
        expect(implicativeValidator.validate(papers)).toBeTruthy();
    });
    it('true, false => fale', function () {
        const papers = new Papers();
        const premise: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const conclusion: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const implicativeValidator = new ImplicativeValidator(premise, conclusion);
        expect(implicativeValidator.validate(papers)).toBeTruthy();
    });
});
