import { useEffect, useRef } from "react";
import { Link } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import artisanImg from "@/assets/images/artisan-1.png";
import textureImg from "@/assets/images/texture-1.png";
import saree1 from "@/assets/images/saree-1.png";
import saree2 from "@/assets/images/saree-2.png";
import saree3 from "@/assets/images/saree-3.png";
import storyWedding from "@/assets/images/story-wedding.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const journeySectionRef = useRef<HTMLDivElement>(null);
  const journeyImagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Text Animation
    gsap.fromTo(
      heroTextRef.current?.querySelectorAll(".hero-word") || [],
      { y: 100, opacity: 0, rotateX: -20 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.1, ease: "power4.out", delay: 0.5 }
    );

    // Pinned Scroll Journey
    const journeyImages = gsap.utils.toArray(journeyImagesRef.current?.children || []);
    
    if (journeyImages.length > 0) {
      ScrollTrigger.create({
        trigger: journeySectionRef.current,
        start: "top top",
        end: "+=300%", // Scroll 3x the height
        pin: true,
        animation: gsap.timeline()
          .to(journeyImages[0] as Element, { opacity: 0, scale: 1.1, duration: 1 })
          .fromTo(journeyImages[1] as Element, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, "<")
          .to(journeyImages[1] as Element, { opacity: 0, scale: 1.1, duration: 1 })
          .fromTo(journeyImages[2] as Element, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, "<"),
        scrub: 1,
      });
    }

    // Parallax elements
    gsap.utils.toArray(".parallax").forEach((el: any) => {
      gsap.to(el, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Fade up sections
    gsap.utils.toArray(".fade-up").forEach((el: any) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.5, ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-background">
      {/* 1. HERO STORY SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0 opacity-70">
          <video 
            src="/videos/hero-fabric.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10"></div>
        
        <div ref={heroTextRef} className="relative z-20 text-center text-white px-4 flex flex-col items-center">
          <div className="overflow-hidden mb-4">
            <h1 className="text-5xl md:text-8xl lg:text-[10vw] font-serif leading-none tracking-tighter mix-blend-overlay">
              <span className="hero-word inline-block">Handwoven</span>
            </h1>
          </div>
          <div className="overflow-hidden mb-12">
            <h1 className="text-5xl md:text-8xl lg:text-[10vw] font-serif leading-none tracking-tighter mix-blend-overlay italic">
              <span className="hero-word inline-block">Stories</span>
            </h1>
          </div>
          
          <Link href="/shop" className="hero-word inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] hover:text-primary transition-colors border-b border-white/30 pb-2">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* 2. LOOM JOURNEY SCROLL STORY (Pinned) */}
      <section ref={journeySectionRef} className="h-screen w-full relative bg-[#1a1716] text-white flex items-center overflow-hidden">
        <div className="absolute left-12 md:left-24 z-20 max-w-md">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-8">The Process</h2>
          <h3 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">From Artisan Hands to Loom.</h3>
          <p className="text-sm md:text-base opacity-70 font-sans leading-relaxed font-light">
            Every thread carries the soul of the village. It takes weeks of dedication, precision, and inherited wisdom to weave a single masterpiece.
          </p>
        </div>

        <div ref={journeyImagesRef} className="absolute right-0 top-0 bottom-0 w-full md:w-3/5">
          <div className="absolute inset-0 w-full h-full object-cover">
            <img src={artisanImg} alt="Village" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="absolute inset-0 w-full h-full object-cover opacity-0">
            <img src={textureImg} alt="Loom" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="absolute inset-0 w-full h-full object-cover opacity-0">
            <img src={saree1} alt="Finished Saree" className="w-full h-full object-cover opacity-80 object-top" />
          </div>
        </div>
      </section>

      {/* 3. ARTISAN STORY SECTION */}
      <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <img 
              src={artisanImg} 
              alt="Master Weaver" 
              className="parallax absolute inset-[-10%] w-[120%] h-[120%] object-cover"
            />
          </div>
          <div className="fade-up">
            <span className="block text-primary text-xs uppercase tracking-widest mb-6">Master Weavers</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Generations of <br/><span className="italic text-muted-foreground">craftsmanship.</span></h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">
              "When I sit at the loom, I am not just creating a garment. I am writing a poem with silk and gold, continuing a dialogue that my ancestors started centuries ago."
            </p>
            <p className="text-sm font-bold uppercase tracking-widest">— Ramakant, Kanchipuram</p>
          </div>
        </div>
      </section>

      {/* 5. FESTIVAL STORY CARDS (Horizontal scrolling feel via grid) */}
      <section className="py-24 bg-[#111] text-white">
        <div className="px-6 md:px-12 mb-16 fade-up">
          <h2 className="text-4xl font-serif italic">Curated Memories</h2>
        </div>
        
        {/* Netflix style large horizontal cards */}
        <div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {[
            { title: "Wedding Stories", img: storyWedding },
            { title: "Monsoon Melodies", img: saree2 },
            { title: "Temple Grace", img: saree3 },
            { title: "Midnight Silk", img: textureImg }
          ].map((story, i) => (
            <Link key={i} href="/shop" className="relative shrink-0 snap-center w-[85vw] md:w-[45vw] aspect-[16/9] group overflow-hidden cursor-pointer">
              <img src={story.img} alt={story.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-3xl font-serif">{story.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. COLLECTION GRID (Preview) */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-20 fade-up">
          <h2 className="text-5xl font-serif tracking-tight">The <span className="italic text-primary">Archives</span></h2>
          <Link href="/shop" className="text-xs uppercase tracking-widest border-b border-foreground/30 pb-1 hover:border-foreground transition-colors hidden md:block">
            View All Pieces
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-24">
          {[
            { id: 1, title: "The Crimson Heirloom", type: "Kanchipuram Silk", price: "₹45,000", img: saree1 },
            { id: 2, title: "Midnight Jasmine", type: "Banarasi Georgette", price: "₹32,000", img: saree2 },
            { id: 3, title: "Earth & Ash", type: "Sambalpuri Ikat", price: "₹28,500", img: saree3 },
          ].map((item, i) => (
            <Link key={i} href={`/product/${item.id}`} className="group block fade-up cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-muted">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{item.type}</span>
                <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">{item.title}</h3>
                <span className="text-sm font-light mt-2">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-24 text-center md:hidden fade-up">
          <Link href="/shop" className="inline-block text-xs uppercase tracking-widest border-b border-foreground pb-2">
            View All Pieces
          </Link>
        </div>
      </section>
    </div>
  );
}
