import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Document } from '../../../types';

export class NoLongerRequireDocumentForWorkersExpression extends Expression {
    protected getRegExp (): RegExp {
        return /^Workers no longer require ((.(?!vaccination$))+)$/;
    }
    protected processMatches ([document]: string[], bulletin: Bulletin): void {
        bulletin.noLongerRequireDocumentForWorkers(<Document>document);
    }
}
