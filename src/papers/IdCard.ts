import { Arstotzka } from '../constants';
import { Nation } from '../types';

export class IdCard {
    private name: string;
    private height: string;
    private weight: string;
    private nation: Nation = Arstotzka;

    public setName (name: string): void {
        this.name = name;
    }
    public setHeight (height: string): void {
        this.height = height;
    }
    public setWeight (weight: string): void {
        this.weight = weight;
    }

    public getName (): string {
        return this.name;
    }
    public getHeight (): string {
        return this.height;
    }
    public getWeight (): string {
        return this.weight;
    }
    public getNation (): Nation {
        return this.nation;
    }
}