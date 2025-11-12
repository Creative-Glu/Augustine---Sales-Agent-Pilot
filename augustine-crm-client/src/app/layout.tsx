import ConditionalLayout from "../components/ConditionalLayout";
import "./globals.css";

export const metadata = {
  title: "Augustine CRM",
  description: "Sales & Leads Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
