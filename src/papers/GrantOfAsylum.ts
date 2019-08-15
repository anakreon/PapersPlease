import { Paper } from './Paper';

export class GrantOfAsylum extends Paper {
    private dateOfBirth: Date;
    private height: string;
    private weight: string;

    public setDateOfBirth (dateOfBirth: Date): void {
        this.dateOfBirth = dateOfBirth;
    }
    public setHeight (height: string): void {
        this.height = height;
    }
    public setWeight (weight: string): void {
        this.weight = weight;
    }

    public getDateOfBirth (): Date {
        return this.dateOfBirth;
    }
    public getHeight (): string {
        return this.height;
    }
    public getWeight (): string {
        return this.weight;
    }
}