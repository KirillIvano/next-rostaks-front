const {Debouncer} = require('../../src/util/debouncer');


jest.useFakeTimers();

describe('Тест дебаунсера', () => {
    it('Должна сработать только последняя функция', () => {
        const callback1 = jest.fn();
        const callback2 = jest.fn();

        const debouncer = new Debouncer(300);

        debouncer.fire(callback1);
        debouncer.fire(callback2);

        jest.runAllTimers();

        expect(callback1).not.toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
    });
});
