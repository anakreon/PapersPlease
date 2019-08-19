import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class RequireDocumentForForeignersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Foreigners require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([document]: string[], bulletin: Bulletin): void {
        bulletin.requireDocumentForForeigners(<Document>document);
    }
}