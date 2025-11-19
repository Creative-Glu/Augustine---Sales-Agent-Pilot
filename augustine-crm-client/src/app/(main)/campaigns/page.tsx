import { Suspense } from 'react';
import CompaignPage from './_components';
import { SquareChartGanttIcon } from 'lucide-react';
import { Header } from '@/components/Header';

const Page = () => {
  return (
    <div className="">
      <Header
        title="Campaign"
        subtitle="Manage and view all your campaign."
        icon={<SquareChartGanttIcon className="w-6 h-6 text-white" />}
        showLive={true}
      />
      <div className="mt-5">
        <Suspense fallback={<h1>Loading...</h1>}>
          <CompaignPage />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
