import {DependencyList, useRef} from 'react';


const areDepsEqual = (arr1: DependencyList, arr2: DependencyList) =>
    arr1.length === arr2.length &&
    arr1.reduce((acc, el, i) => acc && el === arr2[i], true);


export const useConstant = <TVal,>(getter: () => TVal, deps: DependencyList = []): TVal => {
    const valueRef = useRef<TVal | null>(null);
    const depsRef = useRef<DependencyList | null>(null);

    if (!depsRef.current || !areDepsEqual(depsRef.current, deps)) {
        valueRef.current = getter();
        depsRef.current = [...deps];
    }

    return valueRef.current as TVal;
};
