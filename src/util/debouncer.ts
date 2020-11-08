export class Debouncer {
    private _timeoutId: number | null = null;

    constructor(
        private _timeoutMS: number,
    ) {}


    fire = (func: () => void) => {
        if (this._timeoutId !== null) {
            clearTimeout(this._timeoutId);
        }

        this._timeoutId = window.setTimeout(func, this._timeoutMS);
    }
}
