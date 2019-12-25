import { Papers } from '../../src/Papers';
import { Validator } from '../../src/types';
import { DisjunctiveValidator } from '../../src/validators/DisjunctiveValidator';

describe('DisjunctiveValidator', () => {
    it('true, true || true', function () {
        const papers = new Papers();
        const validatorA: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const validatorB: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const disjunctiveValidator = new DisjunctiveValidator(validatorA, validatorB);
        expect(disjunctiveValidator.validate(papers)).toBeTruthy();
    });
    it('true, true || false', function () {
        const papers = new Papers();
        const validatorA: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const validatorB: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const disjunctiveValidator = new DisjunctiveValidator(validatorA, validatorB);
        expect(disjunctiveValidator.validate(papers)).toBeTruthy();
    });
    it('true, false || true', function () {
        const papers = new Papers();
        const validatorA: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const validatorB: Validator = {
            validate (papers: Papers) {
                return true;
            }
        };
        const disjunctiveValidator = new DisjunctiveValidator(validatorA, validatorB);
        expect(disjunctiveValidator.validate(papers)).toBeTruthy();
    });
    it('false, false || fale', function () {
        const papers = new Papers();
        const validatorA: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const validatorB: Validator = {
            validate (papers: Papers) {
                return false;
            }
        };
        const disjunctiveValidator = new DisjunctiveValidator(validatorA, validatorB);
        expect(disjunctiveValidator.validate(papers)).toBeFalsy();
    });
});
