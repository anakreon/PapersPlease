import { Inspector } from '../src/Inspector';

describe('Foo', () => {
    it('bar', () => {
        const instance = new Inspector();
        expect(instance.test()).toBe('asdf');
    });

    it('async', (done) => {
        setTimeout(() => {
            expect(1).toEqual(1);
            done();
        }, 3000);
    });
});