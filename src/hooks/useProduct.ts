import { useState, useEffect, useRef, useMemo } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/Product.interfaces';

interface UseProductArgs {
    product: Product,
    value?: number,
    initialValues?: InitialValues,
    onChange?: (args: onChangeArgs) => void,
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const { current: isControlled } = useRef(!!onChange);
    const isMounted = useRef(false);

    const isMaxCountReached = useMemo(() => counter === initialValues?.maxCount, [counter, initialValues?.maxCount]);

    const reset = () => { setCounter(initialValues?.count || value) };

    const increaseBy = (value: number) => {
        if (isControlled && onChange) {
            return onChange({ count: value, product });
        };
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount)
            newValue = Math.min(newValue, initialValues.maxCount);
        setCounter(newValue)
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);


    // console.log('isMaxCountReached',isMaxCountReached)
    return {
        counter,
        increaseBy,
        isMaxCountReached,
        maxCount: initialValues?.maxCount,
        reset
    }
}