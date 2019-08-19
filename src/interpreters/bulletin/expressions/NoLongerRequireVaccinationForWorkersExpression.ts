import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Vaccine } from '../../../types';

export class NoLongerRequireVaccinationForWorkersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Workers no longer require (.*) vaccination$/;
    }
    protected processMatches ([vaccine]: string[], bulletin: Bulletin): void {
        bulletin.noLongerRequireVaccinationForWorkers(<Vaccine>vaccine);
    }
}
