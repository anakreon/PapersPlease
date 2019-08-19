import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation, Vaccine } from '../../../types';

export class NoLongerRequireVaccinationForNationExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^Citizens of (.*) no longer require (.*) vaccination$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length !== 3) {
            throw 'Invalid input: ' + line;
        }
        const nations = lineDecomposition[1];
        const vaccine = <Vaccine>lineDecomposition[2];
        nations.split(', ').forEach((nation: Nation) => {
            bulletin.noLongerRequireVaccinationForNation(nation, vaccine);                   
        });
    }
}
