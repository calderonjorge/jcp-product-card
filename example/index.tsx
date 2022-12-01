import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';
import { ProductImage } from '../src/components/ProductImage';
import { ProductTitle } from '../src/components/ProductTitle';
import { ProductButtons } from '../src/components/ProductButtons';
import { Product } from '../dist/interfaces/Product.interfaces';

const product: Product = {
  id: '1',
  title: 'Coffee Mug',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {
          () => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
