import {observable, action, computed, makeObservable} from 'mobx';

import {getProductsPreviews} from '@/services/products';
import {ProductPreviewType} from '@/domain/products/types';
import {Debouncer} from '@/util/debouncer';
import {productsStore} from '@/store/products';

import {filterProductsBySearchString} from './util/filterBySearchString';
import {orderProductsByPrice, PriceOrder} from './util/orderProductsByPrice';


interface IProductsStore {
    productsPreviews: ProductPreviewType[];
    addProductsPreviews: (products: ProductPreviewType[]) => void;
}

class CatalogStoreBase {
    constructor(
        private _productsStore: IProductsStore,
    ) {
        makeObservable(this);
    }

    @observable
    productsGettingError: null | string = null;
    @observable
    productsGettingFinished = false;

    private _searchStringDebouncer = new Debouncer(300);

    @observable
    searchString = '';

    @observable
    priceOrder: PriceOrder = 'default';

    @observable
    currentCategoryId: number | null = null;

    @action
    private doSetSearchString(search: string) {
        this.searchString = search;
    }

    @action
    setSearchString = (search: string) => {
        this._searchStringDebouncer.fire(() => this.doSetSearchString(search));
    }

    @action
    setPriceOrder(order: PriceOrder) {
        this.priceOrder = order;
    }

    @action
    setCategoryId(categoryId: number | null) {
        this.currentCategoryId = categoryId;
    }

    @computed
    get digestedProducts(): ProductPreviewType[] {
        if (!this.productsGettingFinished) {
            return [];
        }

        let res = this.currentCategoryId ?
            this._productsStore.productsPreviews.filter(({categoryId}) => categoryId === this.currentCategoryId) :
            this._productsStore.productsPreviews;

        res = filterProductsBySearchString(res, this.searchString);
        res = orderProductsByPrice(res, this.priceOrder);

        return res;
    }

    @action
    resetProductsGetting() {
        this.productsGettingError = null;
        this.productsGettingFinished = false;
    }

    @action
    async getProducts() {
        this.resetProductsGetting();

        const res = await getProductsPreviews();

        if (res.ok) {
            this._productsStore.addProductsPreviews(res.data.products);
        } else {
            this.productsGettingError = res.error;
        }

        this.productsGettingFinished = true;
    }
}

export const CatalogStore = CatalogStoreBase.bind(null, productsStore);
