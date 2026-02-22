import { LayoutDashboard, ShoppingBag, Users, Package, Settings } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Total Revenue", value: "₹1,245,000", change: "+12.5%" },
    { label: "Active Orders", value: "48", change: "+4.2%" },
    { label: "New Customers", value: "124", change: "+18%" },
  ];

  return (
    <div className="flex min-h-screen bg-accent/10">
      {/* Sidebar */}
      <aside className="w-64 bg-foreground text-background p-8 flex flex-col gap-12 hidden lg:flex">
        <h2 className="text-2xl font-serif tracking-widest">AURA <span className="text-[0.4em] block opacity-50">ADMIN</span></h2>
        <nav className="flex flex-col gap-6">
          <button className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold"><LayoutDashboard className="w-4 h-4" /> Dashboard</button>
          <button className="flex items-center gap-4 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"><Package className="w-4 h-4" /> Products</button>
          <button className="flex items-center gap-4 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"><ShoppingBag className="w-4 h-4" /> Orders</button>
          <button className="flex items-center gap-4 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"><Users className="w-4 h-4" /> Customers</button>
          <button className="flex items-center gap-4 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mt-12"><Settings className="w-4 h-4" /> Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto pt-32 lg:pt-12">
        <header className="mb-12">
          <h1 className="text-4xl font-serif italic">Dashboard Overview</h1>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-background p-8 border border-border/50">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{stat.label}</p>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-serif">{stat.value}</span>
                <span className="text-xs text-primary font-bold">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity Mockup */}
        <div className="bg-background border border-border/50 p-8">
          <h2 className="text-xl font-serif mb-8 italic">Recent Sales</h2>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex justify-between items-center py-4 border-b border-border/30 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest">Customer #{item * 123}</p>
                    <p className="text-xs text-muted-foreground">Ordered "Midnight Jasmine"</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-serif">₹32,000</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
