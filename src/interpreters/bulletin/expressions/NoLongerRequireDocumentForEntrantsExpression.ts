import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class NoLongerRequireDocumentForEntrantsExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Entrants no longer require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([document]: string[], bulletin: Bulletin): void {
        bulletin.noneRequireDocument(<Document>document);
    }
}
