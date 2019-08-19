import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation, Document } from '../../../types';

export class NoLongerRequireDocumentForNationExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Citizens of (.*) no longer require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([nations, document]: string[], bulletin: Bulletin): void {
        nations
            .split(', ')
            .forEach((nation: Nation) => {
                bulletin.noLongerRequireDocumentForNation(nation, <Document>document);                   
            });
    }
}
