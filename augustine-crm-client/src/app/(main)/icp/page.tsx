import { Suspense } from 'react';
import ICPs from './_components';

const ICPsPage = () => {
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">ICPs</h1>
        <p className="text-muted-foreground mt-1">Manage and view all your ICPs.</p>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ICPs />
      </Suspense>
    </div>
  );
};

export default ICPsPage;
