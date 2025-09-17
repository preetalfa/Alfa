import React from "react";
import {
  Home,
    // HouseWifi ,
  User,
  Box,
  Layers,
  FileText,
  BarChart2,
  CreditCard,
  Briefcase,
  Database,
  Image,
  Settings,
  LifeBuoy,
    CircleChevronRight
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <Home size={18} /> },
  { label: "Student", icon: <User size={18} /> },
  { label: "Supply", icon: <Box size={18} /> },
  { label: "Assets", icon: <Layers size={18} /> },
  { label: "Partners", icon: <FileText size={18} /> },
  { label: "Reports", icon: <BarChart2 size={18} /> },
  { label: "Accounting", icon: <CreditCard size={18} /> },
  { label: "Office", icon: <Briefcase size={18} />, active: true },
  { label: "Data", icon: <Database size={18} /> },
  { label: "Media", icon: <Image size={18} /> },
  { label: "Settings", icon: <Settings size={18} /> },
  { label: "Live support", icon: <LifeBuoy size={18} /> },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-zinc-900 text-white flex flex-col">
      {/* Logo / Header */}
      <div className="px-4 py-5 flex items-center gap-2 border-b border-slate-700">
        <div className="h-10 w-10 flex items-center justify-center bg-brand text-white font-bold rounded-md">
          
        </div>
       <span className="flex items-center gap-22 text-4xl font-bold">
  Sales 
  <CircleChevronRight size={28} />
</span>


      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
  key={item.label}
  className={`w-full flex items-center gap-3 px-7 py-2 rounded-md text-sm transition
    ${
      item.active
        ? "bg-yellow-600 text-white font-medium" // changed from bg-brand to bg-yellow-400
        : "text-slate-400 hover:bg-slate-500"
    }`}
>
  {item.icon}
  {item.label}
</button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-slate-600" />
          <div>
            <p className="text-sm font-medium">Sample Singh</p>
            <p className="text-xs text-slate-100">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
