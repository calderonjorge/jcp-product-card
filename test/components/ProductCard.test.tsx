import React from 'react';
import rendered from 'react-test-renderer'
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';

const { act } = rendered;

describe('Product Card', () => {

    test('should the component', () => {
        const wraper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );
        expect(wraper.toJSON()).toMatchSnapshot();
    });



    test('should increse the counter', () => {
        const wraper = rendered.create(
            <ProductCard product={product2}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => { increaseBy(1) }}>Click Me</button>
                        </>
                    )
                }
            </ProductCard>
        );
        let tree = wraper.toJSON();
        expect(tree).toMatchSnapshot();
        act(()=>{
            (tree as any).children[2].props.onClick();
        })
        tree = wraper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');
    });
});
