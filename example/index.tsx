import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';
import { Product } from '../dist/interfaces/Product.interfaces';

const product: Product = {
  id: '1',
  title: 'Coffee Mug !',
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
