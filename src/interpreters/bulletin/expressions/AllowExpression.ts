import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation } from '../../../types';

export class AllowExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Allow citizens of (.*)$/;
    }
    protected processMatches ([nations]: string[], bulletin: Bulletin): void {
        nations
            .split(', ')
            .forEach((nation: Nation) => bulletin.allow(nation));
    }
}
