import {useRouter} from 'next/router';


export const useCategoryId = (): number | null => {
    const {query} = useRouter();

    return query.categoryId ? +query.categoryId : null;
};
