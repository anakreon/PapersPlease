import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Vaccine } from '../../../types';

export class RequireVaccinationForWorkersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Workers require (.*) vaccination$/;
    }
    protected processMatches ([vaccine]: string[], bulletin: Bulletin): void {
        bulletin.requireVaccinationForWorkers(<Vaccine>vaccine);
    }
}
