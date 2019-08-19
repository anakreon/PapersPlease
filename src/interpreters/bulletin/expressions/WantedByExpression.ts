import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';

export class WantedByExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Wanted by the State: (.*)$/;
    }
    protected processMatches ([name]: string[], bulletin: Bulletin): void {
        bulletin.want(name);
    }
}
