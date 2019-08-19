import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class NoLongerRequireDocumentForWorkersExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^Workers no longer require ((.(?!vaccination$))+)$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length !== 3) {
            throw 'Invalid input: ' + line;
        }
        const document = <Document>lineDecomposition[1];
        bulletin.noLongerRequireDocumentForWorkers(document);
    }
}
