import {
  Package,
  ShieldCheck,
  AlertTriangle,
  ShieldAlert,
  Upload,
  FileText,
  Image,
  ArrowRight,
  Clock,
  Users,
  Home,
  Search,
  History,
  HelpCircle,
  ChevronDown,
  Container,
} from "lucide-react";

function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: Home, active: true },
    { label: "Analyze", icon: Search, active: false },
    { label: "History", icon: History, active: false },
    { label: "Help", icon: HelpCircle, active: false },
  ];

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col justify-between bg-[#0B2545] text-white">
      <div>
        {/* BRAND */}
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/30">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight text-white">
              CargoGuard
            </p>
            <p className="text-xs leading-tight text-blue-200/70">
              Secure Borders
              <br />
              Safer Tomorrow
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="mt-2 flex flex-col gap-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  item.active
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-blue-100/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* FOOTER */}
      <div className="relative overflow-hidden px-6 pb-8 pt-6">
        <Container
          size={140}
          className="pointer-events-none absolute -bottom-6 -left-6 text-white/5"
        />
        <p className="relative text-sm font-medium leading-snug text-blue-100/70">
          AI Powered
          <br />
          Customs Inspection
          <br />
          for a Safer World
        </p>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-end gap-3 border-b border-slate-200 bg-white px-8 py-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
        <Users size={16} />
      </div>
      <span className="text-sm font-semibold text-slate-700">
        Customs Officer
      </span>
      <ChevronDown size={16} className="text-slate-400" />
    </div>
  );
}

function Dashboard() {
  const stats = [
    {
      title: "Total Inspections",
      value: "128",
      subtitle: "Processed today",
      icon: Package,
      box: "bg-blue-50 border-blue-100",
      iconBox: "bg-blue-100 text-blue-700",
    },
    {
      title: "Low Risk",
      value: "86",
      subtitle: "GREEN",
      icon: ShieldCheck,
      box: "bg-green-50 border-green-100",
      iconBox: "bg-green-100 text-green-600",
    },
    {
      title: "Review Required",
      value: "29",
      subtitle: "YELLOW",
      icon: AlertTriangle,
      box: "bg-yellow-50 border-yellow-100",
      iconBox: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "High Risk",
      value: "13",
      subtitle: "RED",
      icon: ShieldAlert,
      box: "bg-red-50 border-red-100",
      iconBox: "bg-red-100 text-red-600",
    },
  ];

  const inspections = [
    {
      id: "CG-1024",
      shipment: "Cargo Container",
      detected: "Electronics",
      risk: "GREEN",
      status: "Cleared",
      time: "09 Sep 2026, 10:24",
    },
    {
      id: "CG-1023",
      shipment: "Baggage",
      detected: "Unknown Object",
      risk: "YELLOW",
      status: "Review",
      time: "09 Sep 2026, 09:15",
    },
    {
      id: "CG-1022",
      shipment: "Parcel",
      detected: "Prohibited Item",
      risk: "RED",
      status: "Hold",
      time: "09 Sep 2026, 08:47",
    },
  ];

  return (
    <div className="flex h-screen w-full bg-slate-50">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <TopBar />

        <div className="min-h-full p-4 md:p-6 lg:p-8">
          {/* PAGE HEADER */}
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Customs Officer Dashboard
              </h1>

              <p className="mt-1 text-sm text-slate-500 md:text-base">
                AI-assisted X-ray inspection and risk assessment
              </p>
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className={`rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${stat.box}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {stat.title}
                      </p>

                      <p className="mt-2 text-3xl font-bold text-slate-900">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {stat.subtitle}
                      </p>
                    </div>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.iconBox}`}
                    >
                      <Icon size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MAIN SECTION */}
          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* START INSPECTION */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Upload size={23} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Start New Inspection
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Upload X-ray, invoice/declaration and optional reference
                    X-ray for multimodal analysis.
                  </p>
                </div>
              </div>

              {/* UPLOAD BOXES */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* X-RAY */}
                <div className="rounded-xl border-2 border-dashed border-slate-200 p-5 text-center transition hover:border-blue-300 hover:bg-blue-50/30">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <Image size={28} />
                  </div>

                  <h3 className="mt-3 font-semibold text-slate-800">
                    X-Ray Image
                  </h3>

                  <p className="mt-1 text-xs font-medium text-blue-600">
                    Required
                  </p>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-700">
                    <Upload size={16} />
                    Upload Image
                  </button>
                </div>

                {/* INVOICE */}
                <div className="rounded-xl border-2 border-dashed border-slate-200 p-5 text-center transition hover:border-blue-300 hover:bg-blue-50/30">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <FileText size={28} />
                  </div>

                  <h3 className="mt-3 font-semibold text-slate-800">
                    Invoice / Declaration
                  </h3>

                  <p className="mt-1 text-xs font-medium text-blue-600">
                    Required
                  </p>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-700">
                    <Upload size={16} />
                    Upload Document
                  </button>
                </div>

                {/* REFERENCE */}
                <div className="rounded-xl border-2 border-dashed border-slate-200 p-5 text-center transition hover:border-blue-300 hover:bg-blue-50/30">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <Image size={28} />
                  </div>

                  <h3 className="mt-3 font-semibold text-slate-800">
                    Reference X-Ray
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">Optional</p>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-700">
                    <Upload size={16} />
                    Upload Image
                  </button>
                </div>
              </div>

              {/* ANALYSIS BUTTON */}
              <button className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800">
                Go to Analysis
                <ArrowRight size={18} />
              </button>
            </div>

            {/* RISK SUMMARY */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <AlertTriangle size={21} />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  Risk Summary
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                {/* GREEN */}
                <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-green-500 ring-8 ring-green-100" />

                    <div>
                      <p className="font-semibold text-green-800">
                        GREEN (Low Risk)
                      </p>

                      <p className="text-xs text-green-700">
                        Cleared shipments
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-green-700">
                    86
                  </span>
                </div>

                {/* YELLOW */}
                <div className="flex items-center justify-between rounded-xl bg-yellow-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-yellow-500 ring-8 ring-yellow-100" />

                    <div>
                      <p className="font-semibold text-yellow-800">
                        YELLOW (Review)
                      </p>

                      <p className="text-xs text-yellow-700">
                        Requires officer review
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-yellow-700">
                    29
                  </span>
                </div>

                {/* RED */}
                <div className="flex items-center justify-between rounded-xl bg-red-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-red-500 ring-8 ring-red-100" />

                    <div>
                      <p className="font-semibold text-red-800">
                        RED (High Risk)
                      </p>

                      <p className="text-xs text-red-700">
                        Inspection recommended
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-red-700">
                    13
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RECENT INSPECTIONS */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Clock size={21} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Recent Inspections
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Latest customs inspection activity
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                View All
                <ArrowRight size={16} />
              </button>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-6 py-3 font-semibold">ID</th>
                    <th className="px-6 py-3 font-semibold">Shipment</th>
                    <th className="px-6 py-3 font-semibold">
                      Detected Objects
                    </th>
                    <th className="px-6 py-3 font-semibold">Risk</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                    <th className="px-6 py-3 font-semibold">Date & Time</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {inspections.map((item) => (
                    <tr key={item.id} className="transition hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {item.id}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {item.shipment}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {item.detected}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            item.risk === "GREEN"
                              ? "bg-green-100 text-green-700"
                              : item.risk === "YELLOW"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.risk}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            item.status === "Cleared"
                              ? "bg-green-100 text-green-700"
                              : item.status === "Review"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-slate-500">
                        {item.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* HUMAN IN THE LOOP */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Users size={22} />
              </div>

              <div>
                <h3 className="font-bold text-blue-900">
                  Human-in-the-Loop Decision Support
                </h3>

                <p className="mt-1 text-sm text-blue-700">
                  AI provides detection, mismatch and risk evidence. The
                  customs officer retains the final decision-making
                  authority.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-bold text-blue-700">
              <ShieldCheck size={22} />
              <span className="whitespace-nowrap">
                AI supports, officer decides.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;