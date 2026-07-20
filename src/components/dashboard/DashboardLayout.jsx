import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950">

      <Sidebar />

      <main className="ml-72 p-10">
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;