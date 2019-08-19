import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Vaccine } from '../../../types';

export class RequireVaccinationForForeignersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Foreigners require (.*) vaccination$/;
    }
    protected processMatches ([vaccine]: string[], bulletin: Bulletin): void {
        bulletin.requireVaccinationForForeigners(<Vaccine>vaccine);
    }
}
