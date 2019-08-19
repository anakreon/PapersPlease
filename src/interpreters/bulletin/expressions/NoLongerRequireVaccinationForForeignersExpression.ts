import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Vaccine } from '../../../types';

export class NoLongerRequireVaccinationForForeignersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Foreigners no longer require (.*) vaccination$/;
    }
    protected processMatches ([vaccine]: string[], bulletin: Bulletin): void {
        bulletin.noLongerRequireVaccinationForForeigners(<Vaccine>vaccine);
    }
}
