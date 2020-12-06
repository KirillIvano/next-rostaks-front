import {observable, computed, action, makeObservable} from 'mobx';

import {ProductCategoryType} from '@/domain/productsCategories/types';


export class CategoriesStore {
    @observable
    private _categories = new Map<number, ProductCategoryType>();

    constructor() {
        makeObservable(this);
    }

    @computed
    get categories(): ProductCategoryType[] {
        return [...this._categories.values()];
    }

    @action
    getCategoryById = (categoryId: number): ProductCategoryType | undefined =>
        this._categories.get(categoryId)

    @action
    addCategories = (categories: ProductCategoryType[]) =>
        categories.forEach(
            category => this._categories.set(category.id, category),
        );
}

export const categoriesStore = new CategoriesStore();
