'use client';

import { useGetICPs } from '@/services/icps/useICPs';
import ICPsTable from './IcpsTable';
import { PageHeader } from '@/components/PageHeader';
import { CreateButton } from '@/components/CreateButton';
import React from 'react';
import CreateICPsModal from './CreateICPsModal';

const ICPs = () => {
  const { data: icpsData, isLoading, isError, refetch: fetchICPs } = useGetICPs();

  const [isICPModalOpen, setICPModalOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
        <div className="p-6">
          <PageHeader title="ICPs" subtitle={`Showing ${icpsData?.length ?? 0} ICPs`}>
            <CreateButton label="Create ICP" onClick={() => setICPModalOpen(true)} />
          </PageHeader>

          <ICPsTable
            icps={icpsData ?? []}
            isLoading={isLoading}
            isError={isError}
            fetchICPs={fetchICPs}
            openDeleteDialog={(id) => console.log('delete', id)}
          />
        </div>
      </div>

      <CreateICPsModal
        onCreated={fetchICPs}
        open={isICPModalOpen}
        onClose={() => setICPModalOpen(false)}
      />
    </div>
  );
};

export default ICPs;
