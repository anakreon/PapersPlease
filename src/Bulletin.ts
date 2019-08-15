import { Nation, Group, Document } from './types';
import { allNations } from './constants';

export class Bulletin {
    private denied: Set<Nation>;
    private requiredDocumentsByNation: { [nation: string]: Set<Document> };
    private requiredDocumentsByGroup: { [group: string]: Set<Document> };
    private wantedName: string;

    constructor () {
        this.denied = new Set<Nation>();
        this.requiredDocumentsByNation = {};
        this.requiredDocumentsByGroup = {};
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
    public requireDocumentForNation (nation: Nation, document: Document): void {
        this.requiredDocumentsByNation[nation] = this.requiredDocumentsByNation[nation] || new Set<Document>();
        this.requiredDocumentsByNation[nation].add(document);
    }
    public noLongerRequireDocumentForNation (nation: Nation, document: Document): void {
        this.requiredDocumentsByNation[nation] = this.requiredDocumentsByNation[nation] || new Set<Document>();
        this.requiredDocumentsByNation[nation].delete(document);
    }
    public requireDocumentForGroup (group: Group, document: Document): void {
        this.requiredDocumentsByGroup[group] = this.requiredDocumentsByGroup[group] || new Set<Document>();
        this.requiredDocumentsByGroup[group].add(document);
    }
    public noLongerRequireDocumentForGroup (group: Group, document: Document): void {
        this.requiredDocumentsByGroup[group] = this.requiredDocumentsByGroup[group] || new Set<Document>();
        this.requiredDocumentsByGroup[group].delete(document);
    }
    public allRequire (document: Document): void {
        allNations.forEach((nation: Nation) => {
            this.requireDocumentForNation(<Nation>nation, document);
        });
    }
    public noneRequire (document: Document): void {
        for (var nation in this.requiredDocumentsByNation) {
            if (this.requiredDocumentsByNation.hasOwnProperty(nation)) {
                this.noLongerRequireDocumentForNation(<Nation>nation, document);
            }
        }
        for (var group in this.requiredDocumentsByGroup) {
            if (this.requiredDocumentsByGroup.hasOwnProperty(group)) {
                this.noLongerRequireDocumentForGroup(<Group>group, document);
            }
        }
    }

    public want (name: string): void {
        this.wantedName = name;
    }
    public clearWanted (): void {
        this.wantedName = '';
    }

    public getDenied (): Set<Nation> {
        return this.denied;
    }
    public getRequiredDocumentsByNation (): { [nation: string]: Set<Document> } {
        return this.requiredDocumentsByNation;
    }
    public getRequiredDocumentsByGroup (): { [group: string]: Set<Document> } {
        return this.requiredDocumentsByGroup;
    }
    public getWantedName (): string {
        return this.wantedName;
    }
}