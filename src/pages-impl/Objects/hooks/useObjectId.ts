import {useRouter} from 'next/router';


export const useObjectId = (): number | null => {
    const {query} = useRouter();

    return query.objectId ? +query.objectId : null;
};
