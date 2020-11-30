import {useConstant} from '@/hooks/useConstant';
import {Debouncer} from '@/util/debouncer';


export const useDebouncer = (timeoutMS=300) =>
    useConstant(() => new Debouncer(timeoutMS), [timeoutMS]);
