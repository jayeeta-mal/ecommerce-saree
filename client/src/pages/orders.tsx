import { Link } from "wouter";

export default function Orders() {
  const orders = [
    { id: "ORD-9283", date: "Feb 12, 2026", status: "Delivered", total: "₹45,000", item: "The Crimson Heirloom" },
    { id: "ORD-8172", date: "Jan 24, 2026", status: "In Transit", total: "₹32,000", item: "Midnight Jasmine" },
  ];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h1 className="text-5xl font-serif italic">My Orders</h1>
          <div className="text-right hidden md:block">
            <p className="text-xs uppercase tracking-widest font-bold">Ananya Sharma</p>
            <p className="text-xs text-muted-foreground mt-1">Silver Member</p>
          </div>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border border-border/50 p-8 flex flex-col md:flex-row justify-between gap-8 hover:border-primary/30 transition-colors">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">{order.status}</span>
                <h3 className="text-xl font-serif mb-2">{order.item}</h3>
                <p className="text-sm text-muted-foreground font-light">Order ID: {order.id} • {order.date}</p>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-12 border-t md:border-t-0 pt-6 md:pt-0">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Total</p>
                  <p className="text-lg font-serif">{order.total}</p>
                </div>
                <button className="text-xs uppercase tracking-widest border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors font-bold">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
