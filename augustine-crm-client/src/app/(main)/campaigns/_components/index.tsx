'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { useGetCompaign } from '@/services/campaign/useCampaign';
import CampaignTable from './CampaignTable';
import { CreateButton } from '@/components/CreateButton';
import CreateCampaignModal from './CreateCompaignModal';

const CampaignPage = () => {
  const { data: campaignData, isLoading, isError, refetch: fetchCampaign } = useGetCompaign();

  const [isCampaignModalOpen, setCampaignModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
        <div className="p-6">
          <PageHeader
            title="Campaigns"
            subtitle={`Showing ${campaignData?.length || 0} of ${
              campaignData?.length || 0
            } campaigns`}
          >
            <CreateButton label="Create Campaign" onClick={() => setCampaignModalOpen(true)} />
          </PageHeader>

          <CampaignTable
            campaigns={campaignData || []}
            isLoading={isLoading}
            isError={isError}
            fetchCampaignList={fetchCampaign}
          />
        </div>
      </div>

      <CreateCampaignModal
        open={isCampaignModalOpen}
        onClose={() => setCampaignModalOpen(false)}
        onCreated={() => fetchCampaign()}
      />
    </div>
  );
};

export default CampaignPage;
