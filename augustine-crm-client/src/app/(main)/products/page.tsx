import { Suspense } from 'react';
import Products from './_components';
import ProductsLoader from './_components/ProductsLoader';

export default function ProductsPage() {
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground mt-1">Manage and view all your products.</p>
      </div>
      <Suspense fallback={<ProductsLoader />}>
        <Products />
      </Suspense>
    </div>
  );
}
