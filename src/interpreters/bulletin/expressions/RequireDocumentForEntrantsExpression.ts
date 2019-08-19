import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class RequireDocumentForEntrantsExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Entrants require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([document]: string[], bulletin: Bulletin): void {
        bulletin.allRequireDocument(<Document>document);
    }
}
