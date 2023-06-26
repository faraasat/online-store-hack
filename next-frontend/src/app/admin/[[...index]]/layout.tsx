const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <main className="flex flex-col w-full overflow-hidden min-h-[100vh] h-auto">
          {children}
        </main>
      </body>
    </html>
  );
};

export default AdminLayout;
