import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation, Vaccine } from '../../../types';

export class NoLongerRequireVaccinationForNationExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Citizens of (.*) no longer require (.*) vaccination$/;
    }
    protected processMatches ([nations, vaccine]: string[], bulletin: Bulletin): void {
        nations
            .split(', ')
            .forEach((nation: Nation) => {
                bulletin.noLongerRequireVaccinationForNation(nation, <Vaccine>vaccine);                   
            });
    }
}
