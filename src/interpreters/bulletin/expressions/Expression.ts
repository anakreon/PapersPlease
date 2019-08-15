import { Bulletin } from '../../../Bulletin';

export abstract class Expression {
    public interpret (input: string, bulletin: Bulletin): void {
        const lines = input.split('\n');
        console.log('lines: ', lines)
        lines.forEach((line: string) => {
            console.log('process line: ', line);
            this.processLine(line, bulletin);
        });
    }

    protected abstract processLine (line: string, bulletin: Bulletin): void;
}
