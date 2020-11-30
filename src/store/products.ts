import {observable, computed, action, makeObservable} from 'mobx';

import {ProductPreviewType, ProductType} from '@/domain/products/types';


export class ProductsStore {
    @observable
    private _productsPreviews = new Map<number, ProductPreviewType>();
    @observable.ref
    private _products = new Map<number, ProductType>();

    constructor() {
        makeObservable(this);
    }

    @computed
    get productsPreviews(): ProductPreviewType[] {
        return [...this._productsPreviews.values()];
    }

    @computed
    get products(): ProductType[] {
        return [...this._products.values()];
    }

    @action
    getProductById = (productId: number): ProductType | undefined =>
        this._products.get(productId)

    @action
    addProductsPreviews = (products: ProductPreviewType[]) =>
        products.forEach(
            product => this._productsPreviews.set(product.id, product),
        );

    @action
    addProducts = (products: ProductType[]) =>
        products.forEach(
            product => this._products.set(product.id, product),
        );
}

export const productsStore = new ProductsStore();
