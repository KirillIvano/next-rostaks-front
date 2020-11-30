import React from 'react';

import {TextInput} from '@/uikit';

import {useCatalogStore} from '../../hooks/useCatalogStore';


type SearchInputProps = {
    className?: string;
}

const SearchInput = ({className}: SearchInputProps) => {
    const catalogStore = useCatalogStore();

    return (
        <TextInput
            className={className}
            labelText={'Поиск продукта'}
            onChange={({currentTarget}) => catalogStore.setSearchString(currentTarget.value)}
        />
    );
};

export default SearchInput;
