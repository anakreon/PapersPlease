import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation, Document } from '../../../types';

export class RequireDocumentForNationExpression extends Expression {
    protected shouldIgnoreLine (line: string): boolean {
        return line.includes('no longer');
    }
    protected getRegExp (): RegExp {
        return /^Citizens of (.*) require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([nations, document]: string[], bulletin: Bulletin): void {
        nations
            .split(', ')
            .forEach((nation: Nation) => {
                bulletin.requireDocumentForNation(nation, <Document>document);                   
            });
    }
}
