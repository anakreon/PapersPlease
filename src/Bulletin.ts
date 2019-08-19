import { Nation, Document, Vaccine } from './types';
import { allNations, foreignNations } from './constants';

export class Bulletin {
    private denied: Set<Nation>;
    private requiredDocumentsByNation: { [nation: string]: Set<Document> };
    private requiredDocumentsForWorkers: Set<Document>;
    private requiredVaccinationsByNation: { [nation: string]: Set<Vaccine> };
    private requiredVaccinationsForWorkers: Set<Vaccine>;
    private wantedName: string;

    constructor () {
        this.denied = new Set<Nation>(allNations);
        this.requiredDocumentsByNation = {};
        this.requiredDocumentsForWorkers = new Set<Document>();
        this.requiredVaccinationsByNation = {};
        this.requiredVaccinationsForWorkers = new Set<Vaccine>();
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
    public requireDocumentForWorkers (document: Document): void {
        this.requiredDocumentsForWorkers.add(document);
    }
    public noLongerRequireDocumentForWorkers (document: Document): void {
        this.requiredDocumentsForWorkers.delete(document);
    }
    public allRequireDocument (document: Document): void {
        allNations.forEach((nation: Nation) => {
            this.requireDocumentForNation(<Nation>nation, document);
        });
    }
    public noneRequireDocument (document: Document): void {
        for (var nation in this.requiredDocumentsByNation) {
            if (this.requiredDocumentsByNation.hasOwnProperty(nation)) {
                this.noLongerRequireDocumentForNation(<Nation>nation, document);
            }
        }
        this.noLongerRequireDocumentForWorkers(document);
    }
    public requireVaccinationForNation (nation: Nation, vaccine: Vaccine): void {
        this.requiredVaccinationsByNation[nation] = this.requiredVaccinationsByNation[nation] || new Set<Vaccine>();
        this.requiredVaccinationsByNation[nation].add(vaccine);
    }
    public noLongerRequireVaccinationForNation (nation: Nation, vaccine: Vaccine): void {
        this.requiredVaccinationsByNation[nation] = this.requiredVaccinationsByNation[nation] || new Set<Vaccine>();
        this.requiredVaccinationsByNation[nation].delete(vaccine);
    }
    public requireVaccinationForWorkers (vaccine: Vaccine): void {
        this.requiredVaccinationsForWorkers.add(vaccine);
    }
    public noLongerRequireVaccinationForWorkers (vaccine: Vaccine): void {
        this.requiredVaccinationsForWorkers.delete(vaccine);
    }
    public allRequireVaccination (vaccine: Vaccine): void {
        allNations.forEach((nation: Nation) => {
            this.requireVaccinationForNation(<Nation>nation, vaccine);
        });
    }
    public noneRequireVaccination (vaccine: Vaccine): void {
        for (var nation in this.requiredVaccinationsByNation) {
            if (this.requiredVaccinationsByNation.hasOwnProperty(nation)) {
                this.noLongerRequireVaccinationForNation(<Nation>nation, vaccine);
            }
        }
        this.noLongerRequireVaccinationForWorkers(vaccine);
    }
    public requireDocumentForForeigners (document: Document): void {
        foreignNations.forEach((nation: Nation) => {
            this.requireDocumentForNation(nation, document);
        });
    }
    public noLongerRequireDocumentForForeigners (document: Document): void {
        foreignNations.forEach((nation: Nation) => {
            this.noLongerRequireDocumentForNation(nation, document);
        });
    }
    public requireVaccinationForForeigners (vaccine: Vaccine): void {
        foreignNations.forEach((nation: Nation) => {
            this.requireVaccinationForNation(nation, vaccine);
        });
    }
    public noLongerRequireVaccinationForForeigners (vaccine: Vaccine): void {
        foreignNations.forEach((nation: Nation) => {
            this.noLongerRequireVaccinationForNation(nation, vaccine);
        });
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
    public getrequiredDocumentsForWorkers (): Set<Document> {
        return this.requiredDocumentsForWorkers;
    }
    public getRequiredVaccinationsByNation (): { [nation: string]: Set<Vaccine> } {
        return this.requiredVaccinationsByNation;
    }
    public getrequiredVaccinationsForWorkers (): Set<Vaccine> {
        return this.requiredVaccinationsForWorkers;
    }
    public getWantedName (): string {
        return this.wantedName;
    }
}