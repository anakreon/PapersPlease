import { Nation, Group, Document } from './types';
import { allNations } from './constants';

export class Bulletin {
    private denied: Set<Nation>;
    private citizensOfNationRequireDocument: { [nation: string]: Set<Document> };
    private groupRequireDocument: { [group: string]: Set<Document> };
    private wantedName: string;

    constructor () {
        this.denied = new Set<Nation>();
        this.citizensOfNationRequireDocument = {};
        this.groupRequireDocument = {};
        this.wantedName = '';
    }
    
    public allow (nation: Nation): void {
        if (this.denied.has(nation)) {
            this.denied.delete(nation);
        }
    }
    public deny (nation: Nation): void {
        this.denied.add(nation);
    }
    public citizensOfNationRequire (nation: Nation, document: Document): void {
        this.citizensOfNationRequireDocument[nation] = this.citizensOfNationRequireDocument[nation] || new Set<Document>();
        this.citizensOfNationRequireDocument[nation].add(document);
    }
    public citizensOfNationNoLongerRequire (nation: Nation, document: Document): void {
        this.citizensOfNationRequireDocument[nation] = this.citizensOfNationRequireDocument[nation] || new Set<Document>();
        this.citizensOfNationRequireDocument[nation].delete(document);
    }
    public groupRequire (group: Group, document: Document): void {
        this.groupRequireDocument[group] = this.groupRequireDocument[group] || new Set<Document>();
        this.groupRequireDocument[group].add(document);
    }
    public groupNoLongerRequire (group: Group, document: Document): void {
        this.groupRequireDocument[group] = this.groupRequireDocument[group] || new Set<Document>();
        this.groupRequireDocument[group].delete(document);
    }
    public allRequire (document: Document): void {
        allNations.forEach((nation: Nation) => {
            this.citizensOfNationRequire(<Nation>nation, document);
        });
    }
    public noneRequire (document: Document): void {
        for (var nation in this.citizensOfNationRequireDocument) {
            if (this.citizensOfNationRequireDocument.hasOwnProperty(nation)) {
                this.citizensOfNationNoLongerRequire(<Nation>nation, document);
            }
        }
        for (var group in this.groupRequireDocument) {
            if (this.groupRequireDocument.hasOwnProperty(group)) {
                this.groupNoLongerRequire(<Group>group, document);
            }
        }
    }

    public want (name: string): void {
        this.wantedName = name;
    }
    public clearWanted (): void {
        this.wantedName = '';
    }
}