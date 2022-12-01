import React from 'react';
import rendered from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Product Image', () => {
    test('should show the image by props', () => {
        const wraper = rendered.create(<ProductImage img='default-image' />);
        expect(wraper.toJSON()).toMatchSnapshot();
    });

    test('should show the product image', () => {
        const wraper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );
        expect(wraper.toJSON()).toMatchSnapshot();
    });
});
