import { supabase } from '@/lib/supabaseClient';
import { CampaignValues } from '@/types/compaign';

export async function getCompaign(): Promise<any> {
  const { data, error } = await supabase.from('campaigns').select(`
  *,
  offer:offer_id (
    offer_id,
    offer_name
  )
`);

  if (error) throw new Error(`Error fetching products: ${error.message}`);
  return data ?? [];
}

export async function createCompaign(compaign: CampaignValues): Promise<CampaignValues> {
  const { data, error } = await supabase.from('campaigns').insert([compaign]).select().single();

  if (error) throw new Error(`Error creating product: ${error.message}`);
  return data;
}

export async function deleteCompaign(id: string | number) {
  const { error } = await supabase.from('campaigns').delete().eq('campaign_id', id);
  if (error) throw new Error(`Error deleting product: ${error.message}`);
}
