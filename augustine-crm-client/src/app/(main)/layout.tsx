import Sidebar from '@/components/Sidebar';
import '../globals.css';
import { Protect } from '@clerk/nextjs';
import RedirectToLogin from '@/components/RedirectToLogin';

export const metadata = {
  title: 'Augustine CRM',
  description: 'Sales & Leads Management Platform',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Protect fallback={<RedirectToLogin />}> */}
      <Sidebar />
      <div className="ml-64 min-h-screen bg-purplecrm-50 p-8">{children}</div>
      {/* </Protect> */}
    </>
  );
}
