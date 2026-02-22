import { useEffect } from "react";
import { useRoute } from "wouter";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import saree1 from "@/assets/images/saree-1.png";
import textureImg from "@/assets/images/texture-1.png";
import artisanImg from "@/assets/images/artisan-1.png";

export default function Product() {
  const [, params] = useRoute("/product/:id");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <Link href="/shop" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        {/* Hero Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 relative">
          
          {/* Images */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="aspect-[3/4] w-full bg-muted overflow-hidden">
              <img src={saree1} alt="Product Hero" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img src={textureImg} alt="Texture Detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img src={saree1} alt="Styling" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Sticky Buy Box */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 flex flex-col gap-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Kanchipuram Silk</span>
                <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-none">The Crimson Heirloom</h1>
                <p className="text-2xl font-light">₹45,000</p>
              </div>

              <div className="h-px w-full bg-border/60 my-2" />

              <p className="text-muted-foreground leading-relaxed font-light text-lg">
                Woven over 45 days by master artisans in Tamil Nadu, this deep crimson Kanchipuram silk saree features intricate temple border designs woven in pure gold zari. A piece that commands the room and carries centuries of tradition.
              </p>

              <div className="flex flex-col gap-4 mt-8">
                <button className="w-full py-5 bg-foreground text-background uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary transition-colors">
                  Add to Cart
                </button>
                <button className="w-full py-5 border border-foreground text-foreground uppercase tracking-[0.2em] text-xs font-bold hover:bg-muted transition-colors">
                  Book a Consultation
                </button>
              </div>

              <div className="mt-12 text-sm text-muted-foreground space-y-4 font-light">
                <p>✓ Complimentary premium shipping worldwide.</p>
                <p>✓ Comes with a certificate of authenticity.</p>
                <p>✓ Fall and edging included.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-24 border-t border-border/50">
          <div>
            <h2 className="text-4xl font-serif mb-8 italic text-primary">The Artisan's Touch</h2>
            <p className="text-lg leading-relaxed text-muted-foreground font-light mb-6">
              "We draw inspiration from the temple architecture that surrounds us. The motifs you see on the pallu are identical to the carvings on the stone pillars of the Ekambareswarar Temple."
            </p>
            <p className="text-sm font-bold uppercase tracking-widest">— Muthu, Master Weaver</p>
          </div>
          <div className="aspect-square bg-muted overflow-hidden">
            <img src={artisanImg} alt="Artisan at work" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}
