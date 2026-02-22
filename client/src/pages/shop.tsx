import { Link } from "wouter";
import { useEffect } from "react";

import saree1 from "@/assets/images/saree-1.png";
import saree2 from "@/assets/images/saree-2.png";
import saree3 from "@/assets/images/saree-3.png";
import textureImg from "@/assets/images/texture-1.png";
import artisanImg from "@/assets/images/artisan-1.png";

const PRODUCTS = [
  { id: 1, title: "The Crimson Heirloom", type: "Kanchipuram Silk", price: "₹45,000", img: saree1 },
  { id: 2, title: "Midnight Jasmine", type: "Banarasi Georgette", price: "₹32,000", img: saree2 },
  { id: 3, title: "Earth & Ash", type: "Sambalpuri Ikat", price: "₹28,500", img: saree3 },
  { id: 4, title: "Golden Twilight", type: "Tissue Silk", price: "₹55,000", img: textureImg },
  { id: 5, title: "Ivory Whisper", type: "Chanderi Cotton", price: "₹18,000", img: artisanImg },
  { id: 6, title: "Royal Emerald", type: "Paithani Silk", price: "₹42,000", img: saree1 },
];

export default function Shop() {
  // Simple scroll to top on mount for standard routing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 text-center mt-12">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-6">Collections</h1>
          <p className="text-muted-foreground max-w-md mx-auto font-light">
            Explore our curated selection of handwoven stories, each piece a testament to centuries of craftsmanship.
          </p>
        </div>

        {/* Filters Bar (Visual Mockup) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-border/50 py-6 mb-16 gap-6 uppercase text-xs tracking-widest font-medium">
          <div className="flex gap-8 overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
            <button className="text-foreground border-b border-foreground pb-1 whitespace-nowrap">All Stories</button>
            <button className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Kanchipuram</button>
            <button className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Banarasi</button>
            <button className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Ikat</button>
          </div>
          <div className="flex gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">Sort By</button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {PRODUCTS.map((item, i) => (
            <Link key={item.id} href={`/product/${item.id}`} className="group block cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-muted">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col gap-2 text-center items-center">
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">{item.type}</span>
                <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">{item.title}</h3>
                <span className="text-sm font-light mt-1">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
