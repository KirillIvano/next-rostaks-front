import {observable, computed, action} from 'mobx';


export class UIStore {
    @observable
    private _isNavOpened = false;

    @computed
    get isNavOpened(): boolean {
        return this._isNavOpened;
    }


    @action setNavVisibility = (isOpen: boolean) => this._isNavOpened = isOpen;
}
