import {useEffect} from 'react';
import {useRouter} from 'next/router';


const Main = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/catalog');
    }, [router]);

    return null;
};

export default Main;
