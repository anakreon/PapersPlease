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
        console.log('lineDecomposition', lineDecomposition)
        const group = lineDecomposition[1];
        const document = <Document>lineDecomposition[3];
        if (!lineDecomposition[2]) {
            const nations = this.getNations(group);
            if (nations) {
                nations.forEach((nation: Nation) => {
                    console.log('citizensOfNationRequire', nation, document);
                    bulletin.citizensOfNationRequire(nation, document);
                });
            } else if (group === 'Entrants') {
                console.log('allRequire', document);
                bulletin.allRequire(document);
            } else {
                console.log('groupRequire', group, document);
                bulletin.groupRequire(<"Workers">group, document);
            }
        } else {
            const nations = this.getNations(group);
            if (nations) {
                nations.forEach((nation: Nation) => {
                    console.log('citizensOfNationNoLongerRequire', nation, document);
                    bulletin.citizensOfNationNoLongerRequire(nation, document);
                });
            } else if (group === 'Entrants') {
                console.log('noneRequire', document);
                bulletin.noneRequire(document);
            } else {
                console.log('groupNoLongerRequire', group, document);
                bulletin.groupNoLongerRequire(<"Workers">group, document);
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
