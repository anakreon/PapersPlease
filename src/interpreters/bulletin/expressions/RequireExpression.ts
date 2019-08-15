import { Expression } from './Expression';
import { Bulletin } from '../../../Bulletin';
import { Nation, Document } from '../../../types';
import { foreignNations } from '../../../constants';

export class RequireExpression extends Expression {
    protected processLine (line: string, bulletin: Bulletin): void {
        const requireRegex = /^(.*?) ?(no longer)? require (.*)$/;
        const lineDecomposition = line.trim().match(requireRegex);
        if (!lineDecomposition) return;
        if (lineDecomposition.length !== 4) {
            throw 'Invalid input: ' + line;
        }
        const group = lineDecomposition[1];
        const document = <Document>lineDecomposition[3];
        if (!lineDecomposition[2]) {
            const nations = this.getNations(group);
            if (nations) {
                nations.forEach((nation: Nation) => {
                    bulletin.requireDocumentForNation(nation, document);
                });
            } else if (group === 'Entrants') {
                bulletin.allRequire(document);
            } else {
                bulletin.requireDocumentForGroup(<"Workers">group, document);
            }
        } else {
            const nations = this.getNations(group);
            if (nations) {
                nations.forEach((nation: Nation) => {
                    bulletin.noLongerRequireDocumentForNation(nation, document);
                });
            } else if (group === 'Entrants') {
                bulletin.noneRequire(document);
            } else {
                bulletin.noLongerRequireDocumentForGroup(<"Workers">group, document);
            }
        }
    }
 
    private getNations (group: string): Nation[] {
        if (group.startsWith('Foreigners')) {
            return foreignNations;
        } else if (group.startsWith('Citizens of ')) {
            return <Nation[]>group.slice(12).split(', ');
        }
    }
}
