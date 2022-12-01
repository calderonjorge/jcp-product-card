import React from 'react';
import { useProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { CSSProperties } from "react";

export interface Props {
    maxCount?: number;
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, isMaxCountReached } = useProductContext();
    
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${isMaxCountReached && styles.disabled}`}
                onClick={() => { increaseBy(1) }}
                disabled={isMaxCountReached}
            >
                +
            </button>
        </div>
    )
}