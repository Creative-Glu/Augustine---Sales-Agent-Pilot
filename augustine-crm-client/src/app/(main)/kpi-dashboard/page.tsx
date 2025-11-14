import { Suspense } from 'react';
import { KPIDashboard } from './_components/KPIDashboard';
import ProductsLoader from '../products/_components/ProductsLoader';

export default function KPIPage() {
  return (
    <div className="">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">KPI Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of key metrics and funnel stage analytics.
        </p>
      </div>

      {/* KPI Dashboard Component */}
      <Suspense fallback={<ProductsLoader />}>
        <KPIDashboard />
      </Suspense>
    </div>
  );
}
