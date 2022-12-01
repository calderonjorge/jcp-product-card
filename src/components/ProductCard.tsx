import React , { createContext, useContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/Product.interfaces';
import styles from '../styles/styles.module.css';

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export const useProductContext = () => useContext(ProductContext);

export interface Props {
    product: Product,
    children: (args: ProductCardHandlers) => JSX.Element,
    initialValues?: InitialValues,
    className?: string,
    style?: CSSProperties,
    value?: number,
    onChange?: (args: onChangeArgs) => void,
}

export const ProductCard = ({ product, children, className, style, value, onChange, initialValues }: Props) => {
    
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });


    return (
        <ProductContext.Provider value={{ counter, increaseBy, product, maxCount, isMaxCountReached }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children(
                    {
                        count: counter,
                        increaseBy,
                        isMaxCountReached,
                        maxCount,
                        product,
                        reset,
                    }
                )}
            </div>
        </ProductContext.Provider>
    )
}
