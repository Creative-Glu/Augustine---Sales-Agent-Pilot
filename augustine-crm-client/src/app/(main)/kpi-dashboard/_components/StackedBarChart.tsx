'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FunnelStageChartProps {
  data: {
    stage: string;
    leadsReached: number;
    stageOccurrences: number;
    avgHours: number;
  }[];
}

export const FunnelStageChart = ({ data }: FunnelStageChartProps) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
      <XAxis dataKey="stage" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="leadsReached" fill="#3182ce" name="Leads Reached" />
      <Bar dataKey="stageOccurrences" fill="#38a169" name="Stage Occurrences" />
      <Bar dataKey="avgHours" fill="#ed8936" name="Avg Hours" />
    </BarChart>
  </ResponsiveContainer>
);
