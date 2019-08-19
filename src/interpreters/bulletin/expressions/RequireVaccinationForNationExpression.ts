import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation, Vaccine } from '../../../types';

export class RequireVaccinationForNationExpression extends Expression {
    protected shouldIgnoreLine (line: string): boolean {
        return line.includes('no longer');
    }
    protected getRegExp (): RegExp {
        return /^Citizens of (.*) require (.*) vaccination$/;
    }
    protected processMatches ([nations, vaccine]: string[], bulletin: Bulletin): void {
        nations
            .split(', ')
            .forEach((nation: Nation) => {
                bulletin.requireVaccinationForNation(nation, <Vaccine>vaccine);                   
            });
    }
}
