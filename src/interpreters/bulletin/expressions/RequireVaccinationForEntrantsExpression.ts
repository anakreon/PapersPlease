import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Vaccine } from '../../../types';

export class RequireVaccinationForEntrantsExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Entrants require (.*) vaccination$/;
    }
    protected processMatches ([vaccine]: string[], bulletin: Bulletin): void {
        bulletin.allRequireVaccination(<Vaccine>vaccine);
    }
}
