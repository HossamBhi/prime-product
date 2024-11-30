import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/sidebar";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${
          isCollapsed ? "md:mr-14" : "md:mr-64"
        } h-full`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
