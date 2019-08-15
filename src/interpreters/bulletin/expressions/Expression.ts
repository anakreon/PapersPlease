import { Bulletin } from '../../../Bulletin';

export abstract class Expression {
    public interpret (input: string, bulletin: Bulletin): void {
        const lines = input.split('\n');
        lines.forEach((line: string) => {
            this.processLine(line, bulletin);
        });
    }

    protected abstract processLine (line: string, bulletin: Bulletin): void;
}
