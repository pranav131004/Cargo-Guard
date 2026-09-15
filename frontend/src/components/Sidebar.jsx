import {
  LayoutDashboard,
  ScanSearch,
  History,
  CircleHelp,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Analyze X-Ray",
      icon: ScanSearch,
      path: "/analyze",
    },
    {
      name: "History",
      icon: History,
      path: "/history",
    },
    {
      name: "Help",
      icon: CircleHelp,
      path: "/help",
    },
  ];

  return (
    <aside className="w-64 min-h-[calc(100vh-4rem)] border-r border-slate-200 bg-white flex flex-col">
      <nav className="flex-1 p-4">
        <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Navigation
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>

        <div className="mt-4 px-3">
          <p className="text-xs text-slate-400">
            CargoGuard v1.0
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;