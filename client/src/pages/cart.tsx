import { useState } from "react";
import { Link } from "wouter";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, title: "The Crimson Heirloom", price: 45000, quantity: 1, img: "/assets/images/saree-1.png" },
    { id: 2, title: "Midnight Jasmine", price: 32000, quantity: 1, img: "/assets/images/saree-2.png" },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-serif mb-16 text-center italic">Your Bag</h1>

        {items.length > 0 ? (
          <div className="space-y-12">
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 border-b border-border/50 pb-8">
                  <div className="w-24 h-32 bg-muted overflow-hidden shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-serif">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">₹{item.price.toLocaleString()}</p>
                      </div>
                      <button className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="p-1 border border-border hover:bg-muted transition-colors"><Minus className="w-3 h-3" /></button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button className="p-1 border border-border hover:bg-muted transition-colors"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent/30 p-8 flex flex-col gap-6">
              <div className="flex justify-between items-center text-sm uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="font-bold">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs uppercase tracking-widest opacity-60">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <button className="w-full py-5 bg-foreground text-background uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary transition-colors flex items-center justify-center gap-3">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-muted-foreground mb-8">Your bag is currently empty.</p>
            <Link href="/shop" className="inline-block border-b border-foreground pb-1 uppercase text-xs tracking-widest font-bold">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
}
