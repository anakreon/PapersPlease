import { Expression } from './Expression';
import { NameSetter } from '../../../types';

type Name = {
    firstName: string;
    lastName: string;
};

export class NameExpression extends Expression<NameSetter> {
    protected isHandledName (name: string): boolean {
        return name === 'NAME';
    }
    protected setValue (setter: NameSetter, value: string): void {
        const name = this.getFormattedName(value);
        setter.setName(name);
    }
    private getFormattedName (value: string): string {
        const nameObject = this.parseNameFromString(value);
        return nameObject.firstName + ' ' + nameObject.lastName;
    }
    private parseNameFromString (value: string): Name {
        if (this.isCommaVersion(value)) {
            return this.buildFromComma(value);
        } else {
            return this.buildFromSpace(value);
        }
    }
    private isCommaVersion (value: string): boolean {
        return value.includes(', ');
    }
    private buildFromComma (value: string): Name {
        const splitName = value.split(', ');
        return { 
            firstName: splitName[1],
            lastName: splitName[0]
        };
    }
    private buildFromSpace (value: string): Name {
        const splitName = value.split(' ');
        return { 
            firstName: splitName[0],
            lastName: splitName[1]
        };
    }
}
