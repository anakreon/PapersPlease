import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation } from '../../../types';

export class DenyExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Deny citizens of (.*)$/;
    }
    protected processMatches ([nations]: string[], bulletin: Bulletin): void {
        nations
            .split(', ')
            .forEach((nation: Nation) => bulletin.deny(nation));
    }
}
