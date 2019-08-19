import { Paper } from './Paper';
import { Purpose } from '../types';

export class AccessPermit extends Paper {
    private purpose: Purpose;
    private duration: string;
    private height: string;
    private weight: string;

    public setPurpose (purpose: Purpose): void {
        this.purpose = purpose;
    }
    public setDuration (duration: string): void {
        this.duration = duration;
    }
    public setHeight (height: string): void {
        this.height = height;
    }
    public setWeight (weight: string): void {
        this.weight = weight;
    }

    public isWorkPermit () {
        return this.purpose == 'WORK';
    }

    public getPurpose (): Purpose {
        return this.purpose;
    }
    public getDuration (): string {
        return this.duration;
    }
    public getHeight (): string {
        return this.height;
    }
    public getWeight (): string {
        return this.weight;
    }
}