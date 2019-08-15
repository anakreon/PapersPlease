import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation } from '../../../types';

export class AllowDenyExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const allowDenyRegex = /^(Allow|Deny) citizens of (.*)$/;
        const lineDecomposition = line.trim().match(allowDenyRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length != 3) {
            throw 'Invalid input: ' + line;
        }
        const operation = lineDecomposition[1]; 
        const nations = lineDecomposition[2].split(',');
        if (operation === 'Allow') {
            console.log('allow nations', nations);
            nations.forEach((nation: Nation) => bulletin.allow(nation));
        } else {
            console.log('deny nations', nations);
            nations.forEach((nation: Nation) => bulletin.deny(nation));
        }
    }
}
