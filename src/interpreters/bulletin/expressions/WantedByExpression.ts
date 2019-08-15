import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';

export class WantedByExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^Wanted by the State: (.*)$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length != 2) {
            throw 'Invalid input: ' + line;
        }
        const name = lineDecomposition[1];
        bulletin.want(name);
        console.log('want', name);
    }
}
