import React from 'react';
import { useProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import { CSSProperties } from "react";

export interface Props {
    className?: string
    title?: string,
    style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useProductContext();

    return <span className={`${styles.productDescription} ${className}`} style={style}>{title ? title : product.title}</span>
}