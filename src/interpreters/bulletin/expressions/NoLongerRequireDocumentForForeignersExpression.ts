import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class NoLongerRequireDocumentForForeignersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Foreigners no longer require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([document]: string[], bulletin: Bulletin): void {
        bulletin.noLongerRequireDocumentForForeigners(<Document>document);
    }
}