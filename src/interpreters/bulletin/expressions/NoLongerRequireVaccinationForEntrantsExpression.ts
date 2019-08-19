import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Vaccine } from '../../../types';

export class NoLongerRequireVaccinationForEntrantsExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Entrants no longer require (.*) vaccination$/;
    }
    protected processMatches ([vaccine]: string[], bulletin: Bulletin): void {
        bulletin.noneRequireVaccination(<Vaccine>vaccine);
    }
}
