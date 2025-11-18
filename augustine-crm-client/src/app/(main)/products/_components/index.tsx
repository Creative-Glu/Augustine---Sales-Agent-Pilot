'use client';

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Pagination from '@/components/Pagination';
import { useProductsPaginated } from '@/services/products/useProducts';
import ProductsTable from './ProductsTable';
import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { CreateButton } from '@/components/CreateButton';
import { PlusCircleIcon } from 'lucide-react';

const CreateProductModal = dynamic(() => import('./CreateProductModal'), { ssr: false });

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const limit = 10;
  const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!, 10) : 0;
  const validOffset = isNaN(offset) || offset < 0 ? 0 : offset;

  const { data, isLoading, isError, refetch: fetchProductsList } = useProductsPaginated(limit);

  const { products, total, hasMore } = data || { products: [], total: 0, hasMore: false };
  const currentPage = Math.floor(validOffset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const [isProductModalOpen, setProductModalOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
        <div className="p-6">
          <PageHeader title="Products" subtitle={`Showing ${products.length} of ${total} products`}>
            <CreateButton label="Create Product" onClick={() => setProductModalOpen(true)} />
          </PageHeader>

          <ProductsTable
            products={products}
            isLoading={isLoading}
            isError={isError}
            fetchProductsList={fetchProductsList}
          />
        </div>
      </div>

      {total > limit && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          currentOffset={validOffset}
          limit={limit}
          hasMore={hasMore}
          basePath="/products"
          queryParamName="offset"
        />
      )}

      <CreateProductModal
        open={isProductModalOpen}
        onClose={() => setProductModalOpen(false)}
        onCreated={() => fetchProductsList()}
      />
    </div>
  );
}
