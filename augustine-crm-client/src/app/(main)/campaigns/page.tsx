import { Suspense } from 'react';
import CompaignPage from './_components';

const Page = () => {
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Campaign</h1>
        <p className="text-muted-foreground mt-1">Manage and view all your campaign.</p>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <CompaignPage />
      </Suspense>
    </div>
  );
};

export default Page;
