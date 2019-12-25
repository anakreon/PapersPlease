import { NegateValidator } from '../../src/validators/NegateValidator';
import { Validator } from '../../src/types';
import { Papers } from '../../src/Papers';

describe('NegateValidator', () => {
    it('negative input', function () {
        const papers = new Papers();
        const inputValidator: Validator = {
            validate () {
                return false;
            }
        };
        const negateValidator = new NegateValidator(inputValidator);
        expect(negateValidator.validate(papers)).toBeTruthy();
    });
    it('positive input', function () {
        const papers = new Papers();
        const inputValidator: Validator = {
            validate () {
                return true;
            }
        };
        const negateValidator = new NegateValidator(inputValidator);
        expect(negateValidator.validate(papers)).toBeFalsy();
    });
});
