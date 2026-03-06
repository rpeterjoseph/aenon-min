export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This overrides the root layout's Nav/Footer for the maintenance page
  return <>{children}</>;
}
