import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Vaccine } from '../../../types';

export class NoLongerRequireVaccinationForWorkersExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^Workers no longer require (.*) vaccination$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length !== 2) {
            throw 'Invalid input: ' + line;
        }
        const vaccine = <Vaccine>lineDecomposition[1];
        bulletin.noLongerRequireVaccinationForWorkers(vaccine);
    }
}
