import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation } from '../../../types';

export class DenyExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const denyRegex = /^Deny citizens of (.*)$/;
        const lineDecomposition = line.trim().match(denyRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length != 2) {
            throw 'Invalid input: ' + line;
        }
        const nations = lineDecomposition[1].split(', ');
        nations.forEach((nation: Nation) => bulletin.deny(nation));
    }
}
