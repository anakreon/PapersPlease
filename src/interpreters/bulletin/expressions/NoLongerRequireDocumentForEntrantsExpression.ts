import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class NoLongerRequireDocumentForEntrantsExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^Entrants no longer require ((.(?!vaccination$))+)$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length !== 3) {
            throw 'Invalid input: ' + line;
        }
        const document = <Document>lineDecomposition[1];
        bulletin.noneRequireDocument(document);
    }
}
