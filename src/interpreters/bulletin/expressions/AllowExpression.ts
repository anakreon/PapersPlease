import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation } from '../../../types';

export class AllowExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const allowRegex = /^Allow citizens of (.*)$/;
        const lineDecomposition = line.trim().match(allowRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length != 2) {
            throw 'Invalid input: ' + line;
        }
        const nations = lineDecomposition[1].split(', ');
        nations.forEach((nation: Nation) => bulletin.allow(nation));
    }
}
