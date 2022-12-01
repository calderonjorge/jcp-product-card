import React from 'react';
import rendered from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('Product Title', () => {
    test('should show a custom title', () => {
        const wraper = rendered.create(<ProductTitle title='Custom Product' className='custom class' />);
        expect(wraper.toJSON()).toMatchSnapshot();
    });

    test('should show a component with product name', () => {
        const wraper = rendered.create(
            <ProductCard product={product}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );
        expect(wraper.toJSON()).toMatchSnapshot();
    });
})
