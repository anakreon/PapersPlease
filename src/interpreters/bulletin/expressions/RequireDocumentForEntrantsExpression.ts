import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class RequireDocumentForEntrantsExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^Entrants require ((.(?!vaccination$))+)$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length !== 3) {
            throw 'Invalid input: ' + line;
        }
        const document = <Document>lineDecomposition[1];
        bulletin.allRequireDocument(document);
    }
}
