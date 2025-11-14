import Sidebar from '@/components/Sidebar';
import '../globals.css';

export const metadata = {
  title: 'Augustine CRM',
  description: 'Sales & Leads Management Platform',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
