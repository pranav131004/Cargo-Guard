import { Bell, Shield } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>

        <div>
          <h1 className="text-lg font-bold text-slate-900">
            CargoGuard
          </h1>
          <p className="text-xs text-slate-500">
            X-Ray Intelligence System
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-slate-100">
          <Bell className="w-5 h-5 text-slate-600" />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center">
          <span className="text-sm font-semibold text-slate-700">
            PG
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;