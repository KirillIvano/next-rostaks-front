import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';

import {Select} from '@/uikit';

import {useCatalogStore} from '../../hooks/useCatalogStore';
import {PriceOrder} from '../../util/orderProductsByPrice';


type PriceSortProps = {
    className?: string;
}

const PriceSort = observer(({className}: PriceSortProps) => {
    const catalogStore = useCatalogStore();

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) =>
            catalogStore.setPriceOrder(e.target.value as PriceOrder),
        [catalogStore],
    );

    return (
        <Select
            labelText="Сортировка по цене"
            onChange={handleChange}
            wrapperClass={className}
        >
            <Select.Option value="asc">По умолчанию</Select.Option>
            <Select.Option value="dec">По убыванию</Select.Option>
            <Select.Option value="default">По возрастанию</Select.Option>
        </Select>
    );
});

export default PriceSort;
