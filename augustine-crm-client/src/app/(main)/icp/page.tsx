import { Suspense } from 'react';
import ICPs from './_components';
import { Header } from '@/components/Header';
import { SquareChartGantt } from 'lucide-react';

const ICPsPage = () => {
  return (
    <div className="">
      <Header
        title="ICPs"
        subtitle="Manage and view all your ICPs."
        icon={<SquareChartGantt className="w-6 h-6 text-white" />}
        showLive={true}
      />
      <div className="mt-5">
        <Suspense fallback={<h1>Loading...</h1>}>
          <ICPs />
        </Suspense>
      </div>
    </div>
  );
};

export default ICPsPage;
