# JCP-Product-Card
Este es un paquete de pruebas de despliegue en NPM

### Jorge Calderon

## Ejemplo

```
  import {} from 'jcp-product-card'
```

```
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
                            <ProductImage  />
                            <ProductTitle  />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
```