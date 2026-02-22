import { ReactNode, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import Lenis from "lenis";
import { ShoppingBag, User, Menu } from "lucide-react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [location] = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground">
      {/* Premium minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500">
        <div className="flex items-center gap-6 md:gap-12">
          <button className="uppercase text-xs tracking-[0.2em] font-medium hidden md:block hover:opacity-70 transition-opacity">Menu</button>
          <Menu className="w-5 h-5 md:hidden" />
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.15em] font-medium">
            <Link href="/shop" className="hover:opacity-70 transition-opacity">Collections</Link>
            <Link href="/#heritage" className="hover:opacity-70 transition-opacity">Heritage</Link>
          </nav>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif tracking-widest text-center leading-none">
          AURA<br/><span className="text-[0.4em] tracking-[0.4em] font-sans uppercase block mt-1">Handwoven</span>
        </Link>

        <div className="flex items-center gap-6">
          <button className="hover:opacity-70 transition-opacity hidden md:block">
            <User className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button className="hover:opacity-70 transition-opacity flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="text-xs font-mono hidden md:inline">(0)</span>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-foreground text-background py-24 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif mb-6">AURA</h2>
            <p className="text-sm opacity-70 max-w-sm leading-relaxed">
              Weaving stories of heritage, art, and timeless elegance into every thread. Handcrafted in India, cherished globally.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-6 opacity-50">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/shop" className="hover:opacity-70 transition-opacity">All Collections</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">New Arrivals</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Bridal Stories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-6 opacity-50">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
