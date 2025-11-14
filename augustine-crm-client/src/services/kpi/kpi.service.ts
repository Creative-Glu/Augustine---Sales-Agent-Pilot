import { supabase } from '@/lib/supabaseClient';

// 1. Conversion Rate
export const getConversionRate = async (campaign_id?: number) => {
  const { data, error } = await supabase.rpc('conversion_rate_sql', { campaign_id });
  if (error) throw error;
  return data;
};

// 2. CTA Clicked
export const getCTAClicked = async (campaign_id?: number, sal_campaign_id?: number) => {
  const { data, error } = await supabase.rpc('cta_clicked_sql', { campaign_id, sal_campaign_id });
  if (error) throw error;
  return data;
};

// 3. Avg Hours Per Funnel Stage
export const getFunnelStageAnalytics = async (
  campaign_id?: number,
  start_ts?: string,
  end_ts?: string
) => {
  const { data, error } = await supabase.rpc('avg_hours_per_stage_sql', {
    campaign_id,
    start_ts,
    end_ts,
  });
  if (error) throw error;
  return data;
};
export const fetchKPIData = async () => {
  const { data, error } = await supabase.rpc('kpi_dashboard_metrics');
  if (error) throw error;
  return data ?? [];
};
