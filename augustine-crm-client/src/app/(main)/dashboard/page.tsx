import { Suspense } from 'react';
import DashboardGrid from './_components/DashboardGrid';
import DashboardLoader from './_components/DashboardLoader';
import JourneyFunnelChart from './_components/JourneyFunnelChart';

export default function DashboardPage() {
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Quick insights into your CRM performance.</p>
      </div>

      <Suspense fallback={<DashboardLoader />}>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-4 ">
              <DashboardGrid />
            </div>
          </div>

          <div className="space-y-6 shadow-2xl mt-5 rounded-2xl">
            <JourneyFunnelChart />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
