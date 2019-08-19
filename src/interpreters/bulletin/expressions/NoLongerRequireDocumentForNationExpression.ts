import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation, Document } from '../../../types';

export class NoLongerRequireDocumentForNationExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^Citizens of (.*) no longer require ((.(?!vaccination$))+)$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length !== 4) {
            throw 'Invalid input: ' + line;
        }
        const nations = lineDecomposition[1];
        const document = <Document>lineDecomposition[2];
        nations.split(', ').forEach((nation: Nation) => {
            bulletin.noLongerRequireDocumentForNation(nation, document);                   
        });
    }
}
