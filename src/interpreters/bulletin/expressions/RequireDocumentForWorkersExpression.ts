import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class RequireDocumentForWorkersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Workers require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([document]: string[], bulletin: Bulletin): void {
        bulletin.requireDocumentForWorkers(<Document>document);
    }
}
