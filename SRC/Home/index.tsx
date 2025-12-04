import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Brain, Activity, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        delay: 0.5,
      });

      // Intro Section Fade In
      gsap.from(introRef.current, {
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Services Stagger
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.wegic.ai/assets/onepage/agent/images/1764784074064.jpg"
        >
          <source src="https://cdn.wegic.ai/assets/onepage/agent/videos/1764784025725.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              More than brief, <br />
              medication-only visits.
            </h1>
            <p className="hero-text text-xl md:text-2xl font-light opacity-90 mb-10 max-w-2xl leading-relaxed">
              Psychotherapy-led psychiatric care for adults in California and New York. A thoughtful approach to lasting well-being.
            </p>
            <div className="hero-text flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Your Journey
              </Button>
              <Button size="lg" variant="glass" onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / PHILOSOPHY SECTION */}
      <section id="intro" ref={introRef} className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1764784077464.jpg" 
                alt="Arkadiy Yaretskiy MD" 
                className="rounded-2xl shadow-2xl object-cover w-full aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <p className="text-sm font-medium text-foreground">
                  "I believe in slowing down to understand the full picture of your life, not just your symptoms."
                </p>
                <p className="text-xs text-muted-foreground mt-2">- Dr. Yaretskiy</p>
              </div>
            </div>
            <div>
              <span className="text-accent font-medium tracking-wider text-sm uppercase mb-4 block">My Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground">
                Psychotherapy-led Psychiatry
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Many psychiatric visits today are rushed, focusing solely on symptom checklists and medication adjustments. My practice is different.
                </p>
                <p>
                  I integrate <strong>in-depth psychotherapy</strong> with careful medical evaluation. We work together to understand the root causes of your distress—whether they stem from past experiences, relationship patterns, or biological factors.
                </p>
                <p>
                  This approach allows for more precise treatment, often leading to better outcomes with less medication, or medication used more effectively as a tool rather than a crutch.
                </p>
              </div>
              <div className="mt-10">
                 <Button variant="outline" size="lg" className="group">
                   Read more about my approach <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IS THIS YOU? SECTION */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <img src="https://cdn.wegic.ai/assets/onepage/agent/images/1764784074064.jpg" className="w-full h-full object-cover" alt="Background texture" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Is this you?</h2>
            <p className="text-muted-foreground text-lg">
              You might be functioning well on the surface, but inside, something feels off. I often work with people experiencing:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Persistent Anxiety", desc: "Feeling on edge, worried, or unable to relax, even when things are 'fine'." },
              { title: "Emotional Numbness", desc: "Feeling disconnected from yourself or others, or struggling to feel joy." },
              { title: "Relationship Patterns", desc: "Finding yourself in the same difficult dynamic with partners or family again and again." },
              { title: "Recurring Low Mood", desc: "Waves of sadness, guilt, or lack of motivation that come and go." },
              { title: "Past Trauma", desc: "Old wounds that continue to affect your present day life and reactions." },
              { title: "Overwhelmed", desc: "Feeling like you're barely keeping your head above water." }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-colors hover:shadow-lg group">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Activity className="h-6 w-6 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section ref={servicesRef} className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">Comprehensive Care</h2>
            <div className="h-1 w-20 bg-foreground rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card group">
              <div className="mb-6 overflow-hidden rounded-2xl aspect-video">
                <img 
                  src="https://cdn.wegic.ai/assets/onepage/agent/images/1764784074063.jpg" 
                  alt="Psychotherapy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-medium mb-4 flex items-center gap-3">
                <Brain className="h-6 w-6 text-accent" /> Psychotherapy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The core of my practice. We use sessions to explore your inner life, past experiences, and current challenges. This isn't just "venting"—it's structured work to create meaningful change.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">✓ Psychodynamic approach</li>
                <li className="flex items-center gap-2">✓ Insight-oriented</li>
                <li className="flex items-center gap-2">✓ Trauma-informed</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card group">
              <div className="mb-6 overflow-hidden rounded-2xl aspect-video">
                <img 
                  src="https://cdn.wegic.ai/assets/onepage/agent/images/1764784078966.jpg" 
                  alt="Medication Management" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-medium mb-4 flex items-center gap-3">
                <Heart className="h-6 w-6 text-accent" /> Medication
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Medication can be a powerful tool, but it's not always the answer. I prescribe thoughtfully and conservatively. My goal is often to help patients find the <em>minimum effective dose</em> or safely reduce unnecessary medications.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">✓ Evidence-based prescribing</li>
                <li className="flex items-center gap-2">✓ Deprescribing support</li>
                <li className="flex items-center gap-2">✓ Careful monitoring</li>
              </ul>
            </div>

             {/* Service 3 */}
             <div className="service-card group">
              <div className="mb-6 overflow-hidden rounded-2xl aspect-video bg-secondary/10 flex items-center justify-center">
                 <Video className="h-16 w-16 text-secondary/40" />
              </div>
              <h3 className="text-2xl font-medium mb-4 flex items-center gap-3">
                <Video className="h-6 w-6 text-accent" /> Telehealth
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Secure, convenient video visits for residents of California and New York. Receive high-quality care from the privacy and comfort of your own space.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">✓ HIPAA compliant platform</li>
                <li className="flex items-center gap-2">✓ Flexible scheduling</li>
                <li className="flex items-center gap-2">✓ No commute required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 bg-foreground text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to get started?</h2>
           <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16">
             I accept insurance through Headway (CA) and Alma (NY). Choose your location to book an initial consultation.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
             <a 
               href="https://headway.co" 
               target="_blank" 
               rel="noreferrer" 
               className="block group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transition-all hover:scale-[1.02]"
             >
               <div className="absolute top-4 right-4 text-xs font-bold bg-accent px-3 py-1 rounded-full">CALIFORNIA</div>
               <h3 className="text-2xl font-bold mb-2">Book via Headway</h3>
               <p className="text-white/60 mb-6">Aetna, Carelon, Blue Cross Blue Shield</p>
               <div className="inline-flex items-center text-accent-foreground font-medium">
                 View Availability <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </div>
             </a>

             <a 
               href="https://helloalma.com" 
               target="_blank" 
               rel="noreferrer" 
               className="block group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transition-all hover:scale-[1.02]"
             >
               <div className="absolute top-4 right-4 text-xs font-bold bg-secondary px-3 py-1 rounded-full">NEW YORK</div>
               <h3 className="text-2xl font-bold mb-2">Book via Alma</h3>
               <p className="text-white/60 mb-6">Aetna, Cigna</p>
               <div className="inline-flex items-center text-accent-foreground font-medium">
                 View Availability <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </div>
             </a>
           </div>
           
           <p className="mt-12 text-sm text-white/40">
             * Please note: I do not prescribe controlled substances. Services are for adults (18+) only.
           </p>
         </div>
      </section>
    </div>
  );
}