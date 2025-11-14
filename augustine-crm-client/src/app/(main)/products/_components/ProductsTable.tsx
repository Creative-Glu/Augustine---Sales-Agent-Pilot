'use client';

import ConfirmDeleteDialog from '@/components/ConfirmDeleteDialog';
import { Product, useDeleteProduct } from '@/services/products/useProducts';
import { formatDate, formatPrice } from '@/utils/format';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { pricingTypeConfig } from '@/constants/pricing-types';
import { useToastHelpers } from '@/lib/toast';

interface ProductsTableProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  fetchProductsList: () => void;
}

export default function ProductsTable({
  products,
  isLoading,
  isError,
  fetchProductsList,
}: ProductsTableProps) {
  const { successToast, errorToast } = useToastHelpers();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const { mutateAsync: deleteProduct } = useDeleteProduct();

  const openDeleteDialog = (productId: string) => {
    setSelectedProductId(productId);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProductId) return;
    try {
      setIsDeleteDialogOpen(false);
      await deleteProduct(selectedProductId);
      successToast('Product Deleted successfully!');
    } catch (error) {
      errorToast('failed to delete');
    }

    fetchProductsList();
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                Product Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                Pricing Type
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                Price
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                Created At
              </th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-card-foreground">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-muted-foreground">
                  <div className="animate-pulse text-sm">Loading products...</div>
                </td>
              </tr>
            )}

            {isError && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-red-500">
                  Failed to load products. Please try again.
                </td>
              </tr>
            )}

            {!isLoading && !isError && products.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-muted-foreground">
                  No products found.
                </td>
              </tr>
            )}

            {!isLoading &&
              !isError &&
              products.map((product) => (
                <tr
                  key={product.product_id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="font-medium text-card-foreground">{product.product_name}</div>

                    {product.product_description && (
                      <div className="text-xs text-muted-foreground mt-1 truncate">
                        {product.product_description}
                      </div>
                    )}
                  </td>

                  <td className="py-4 px-4">
                    {(() => {
                      const type = product.pricing_type?.toLowerCase() || 'default';
                      const config = pricingTypeConfig[type] || pricingTypeConfig['default'];

                      return (
                        <Badge
                          variant="outline"
                          className={`
          flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
          ${config.color}
        `}
                        >
                          {config.icon}
                          {product.pricing_type || 'N/A'}
                        </Badge>
                      );
                    })()}
                  </td>

                  <td className="py-4 px-4">
                    <div className="text-sm font-semibold text-card-foreground">
                      {formatPrice(product.price, product.pricing_type)}
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="text-sm text-muted-foreground">
                      {formatDate(product.created_at)}
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center justify-center p-2 text-muted-foreground border border-gray-200 rounded-lg bg-white cursor-not-allowed opacity-60 hover:bg-gray-50 transition-colors"
                        title="Edit"
                      >
                        <PencilSquareIcon className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-red-700 border border-red-500 rounded-lg bg-white cursor-pointer hover:bg-red-50 transition-colors"
                        title="Delete"
                        onClick={() => openDeleteDialog(product.product_id)}
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <ConfirmDeleteDialog
        open={isDeleteDialogOpen}
        onOpenChange={() => setIsDeleteDialogOpen(false)}
        title="Delete Product"
        description="Are you sure you want to delete this product?"
        onConfirm={handleConfirmDelete}
        loading={isLoading}
      />
    </div>
  );
}
