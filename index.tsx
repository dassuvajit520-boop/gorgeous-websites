
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Code, 
  Layout, 
  LineChart, 
  MessageSquare, 
  Monitor, 
  Palette, 
  Rocket, 
  Zap,
  Star,
  Shield,
  Clock,
  Menu,
  X,
  Plus,
  TrendingUp,
  Target,
  Users,
  Award,
  HelpCircle,
  BarChart3
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Process', id: 'process' },
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActivePage('home')}
        >
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center group-hover:bg-lime-400 transition-colors">
            <Rocket className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </div>
          <span className="text-xl font-bold tracking-tight">DevCore</span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-[#1a1a1a]/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className="px-6 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActivePage('contact')}
            className="hidden md:block bg-lime-400 text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]"
          >
            Book a Call
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-lime-400' : 'text-white'}`}>{question}</span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform ${isOpen ? 'rotate-45 bg-lime-400 text-black border-lime-400' : ''}`}>
          <Plus className="w-4 h-4" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-white/50 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Sections ---

const HomePage = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen pt-40 pb-20 flex flex-col items-center justify-center overflow-hidden">
        <div className="glow-blob top-[-100px] left-[-200px]" />
        <div className="glow-blob bottom-[0] right-[-300px] opacity-40 bg-purple-500/20" />
        <div className="grid-bg absolute inset-0 opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-4 mb-12">
            {[Palette, Code, Rocket].map((Icon, idx) => (
              <div key={idx} className={`w-14 h-14 rounded-full flex items-center justify-center glass-card animate-bounce`} style={{ animationDelay: `${idx * 200}ms` }}>
                <Icon className={`w-6 h-6 ${idx === 2 ? 'text-lime-400' : 'text-white'}`} />
              </div>
            ))}
          </div>
          <h1 className="hero-title text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
            Design, Build & Deploy
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Beautiful websites are easy. <span className="text-white font-bold">Profitable</span> ones are rare. We build conversion-first machines for brands that refuse to be ignored.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <button onClick={onCtaClick} className="bg-lime-400 text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-[0_0_30px_rgba(163,230,53,0.4)] flex items-center gap-2 group">
              Start Your Redesign <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/5 transition-all">
              See Our Work
            </button>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4 block">The Hard Truth</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Your website is leaking <span className="text-red-500">revenue</span>.</h2>
            <p className="text-white/50 text-lg">Most agencies focus on aesthetics while ignoring the psychology of why people buy. If your traffic isn't turning into cash, you don't have a design problem—you have a conversion problem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "High Bounce Rates", desc: "Visitors leave within seconds because your value prop is unclear." },
              { icon: BarChart3, title: "Invisible CTA's", desc: "Your 'Buy Now' buttons are lost in a sea of pretty, but useless graphics." },
              { icon: Zap, title: "Slow Performance", desc: "Every second of load time cuts your conversion rate by 7%." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl border-red-500/10">
                <item.icon className="w-10 h-10 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="py-32 relative overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-4 block">The DevCore Method</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">The Conversion-First <span className="text-lime-400">Framework</span>.</h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                We combine deep-level psychology with world-class engineering to create a seamless path from "Click" to "Client".
              </p>
              <div className="space-y-6">
                {[
                  { title: "Psychological Profiling", desc: "We map your user's subconscious needs before we ever open Figma." },
                  { title: "Frictionless UI", desc: "Removing every cognitive barrier between your product and the user." },
                  { title: "Performance Engineering", desc: "Sub-second load times that keep engagement at peak levels." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{point.title}</h4>
                      <p className="text-white/40 text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-4 rounded-3xl rotate-2 relative z-10 border-lime-400/20">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800" className="rounded-2xl w-full grayscale group-hover:grayscale-0 transition-all duration-700" alt="Design workflow" />
              </div>
              <div className="absolute inset-0 bg-lime-400/20 blur-3xl -z-10 rounded-full scale-75" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Audience Fit */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Is DevCore right for <span className="text-lime-400 italic">you</span>?</h2>
            <p className="text-white/40">We specialize in working with companies that are ready to scale aggressively.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "SaaS Founders", label: "Monthly Recurring Revenue", desc: "Turning feature updates into user growth and churn reduction." },
              { title: "E-com Brands", label: "Direct-to-Consumer", desc: "Optimizing checkout flows to maximize Average Order Value." },
              { title: "Coaches & Agencies", label: "High-Ticket Services", desc: "Building authority sites that book discovery calls on autopilot." }
            ].map((audience, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group border-white/5">
                <Users className="w-8 h-8 text-lime-400 mb-6" />
                <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-lime-400/50 mb-6 block">{audience.label}</span>
                <p className="text-white/50 leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Authority Section */}
      <section className="py-32 relative" id="work">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-4 block">Proven Results</span>
              <h2 className="text-4xl md:text-6xl font-bold">The Proof in the <span className="text-lime-400">Profit</span>.</h2>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-8 py-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-3xl font-black text-lime-400">$10M+</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Revenue Generated</div>
              </div>
              <div className="text-center px-8 py-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-3xl font-black text-lime-400">145%</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Avg. Conv. Lift</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Arc Cloud", metrics: "+240% Lead Gen", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
              { title: "Nexus Fintech", metrics: "+98% Checkout Conv", img: "https://images.unsplash.com/photo-1551288049-bbb6532821c2?q=80&w=800" }
            ].map((caseStudy, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video">
                <img src={caseStudy.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={caseStudy.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10">
                  <span className="bg-lime-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase mb-4 inline-block">{caseStudy.metrics}</span>
                  <h3 className="text-4xl font-black">{caseStudy.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call Process */}
      <section className="py-32 bg-[#080808]" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our 3-Step Conversion <span className="text-lime-400 italic">Engine</span>.</h2>
            <p className="text-white/40">From audit to deployment in under 6 weeks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-white/10 -z-10" />
            {[
              { step: "01", title: "Discovery & Audit", desc: "We tear down your current site to find every hidden revenue leak." },
              { step: "02", title: "Psychological Design", desc: "We rebuild your interface using high-conversion design patterns." },
              { step: "03", title: "Scale & Optimize", desc: "Launch and iterate. We don't stop until your metrics are green." }
            ].map((p, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-20 h-20 rounded-full bg-lime-400 text-black flex items-center justify-center text-2xl font-black mb-8 mx-auto md:mx-0 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                  {p.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-white/40 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Offer */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center border-lime-400/30 relative overflow-hidden">
            <div className="glow-blob top-0 left-0 opacity-10 bg-lime-400" />
            <div className="relative z-10">
              <span className="bg-white/5 px-6 py-2 rounded-full text-lime-400 text-xs font-bold uppercase tracking-widest mb-10 inline-block border border-white/10">The High-Growth Package</span>
              <h2 className="text-4xl md:text-7xl font-black mb-8">The Ultimate Conversion <span className="text-lime-400">Overhaul</span>.</h2>
              <p className="text-white/50 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                Complete brand redesign, bespoke engineering, and a 12-month conversion optimization roadmap. All built for performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {["Conversion Audit", "Bespoke UI Design", "Next.js Engineering", "SEO Infrastructure"].map((feature, i) => (
                  <div key={i} className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-400" />
                    <span className="text-sm font-bold">{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={onCtaClick}
                className="bg-lime-400 text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-lime-300 transition-all shadow-2xl"
              >
                Claim Your Free Strategy Audit
              </button>
              <p className="mt-8 text-sm text-white/30 italic">Limited to 3 new partners per quarter. Application required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-32" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked <span className="text-lime-400">Questions</span></h2>
            <p className="text-white/40">Everything you need to know about scaling with DevCore.</p>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="How long does a typical redesign take?" 
              answer="A full conversion-first overhaul typically takes 6-8 weeks from audit to launch. This includes deep research, design, and full performance engineering." 
            />
            <FAQItem 
              question="What is a 'Conversion Audit'?" 
              answer="It's a 30-page teardown of your current metrics, heatmaps, and user recordings where we identify exactly where and why users are dropping off your site." 
            />
            <FAQItem 
              question="Do you handle copywriting and branding?" 
              answer="Yes. High conversion requires a unified message. We handle strategy-led copywriting and visual branding to ensure your site speaks directly to your ideal customer." 
            />
            <FAQItem 
              question="Why Next.js instead of Wordpress?" 
              answer="Speed is a conversion factor. Next.js allows us to build sub-second load times and immersive animations that traditional CMS platforms simply can't handle." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App Logic ---

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-[0_0_50px_rgba(163,230,53,0.5)]">
            <CheckCircle2 className="w-12 h-12 text-black" />
          </div>
          <h2 className="text-5xl font-black mb-6">You're in.</h2>
          <p className="text-white/50 text-xl leading-relaxed">Our head strategist will review your site and reach out via email within 24 hours.</p>
          <button onClick={() => window.location.reload()} className="mt-12 text-lime-400 font-black hover:underline tracking-widest uppercase text-sm">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-none">Ready to <span className="text-lime-400">scale?</span></h1>
          <p className="text-white/50 text-2xl mb-12 max-w-lg leading-relaxed">We only partner with 12 clients a year to ensure massive results. Let's see if we're a fit.</p>
          <div className="space-y-6">
            <div className="flex gap-4 items-center p-6 glass-card rounded-2xl">
              <Clock className="w-8 h-8 text-lime-400" />
              <p className="text-lg font-bold">24-hour initial response time</p>
            </div>
            <div className="flex gap-4 items-center p-6 glass-card rounded-2xl">
              <Shield className="w-8 h-8 text-lime-400" />
              <p className="text-lg font-bold">Comprehensive NDA on request</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-10 md:p-16 rounded-[3rem] border-lime-400/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
              <input required type="text" placeholder="Alex Rivers" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-lime-400 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Work Email</label>
              <input required type="email" placeholder="alex@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-lime-400 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Current Website</label>
              <input required type="url" placeholder="https://" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-lime-400 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Goal</label>
              <textarea required rows={3} placeholder="Tell us your revenue goals..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-lime-400 transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full bg-lime-400 text-black py-6 rounded-2xl font-black text-xl hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/20">
              Apply for Strategy Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-white/5 py-12 bg-black">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
      <div className="flex items-center gap-2">
        <Rocket className="w-6 h-6 text-lime-400" />
        <span className="text-xl font-black">DevCore</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-white/30 uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-lime-400 transition-colors">Privacy</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Terms</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Cookies</a>
      </div>
      <div className="text-xs font-medium text-white/20">© 2024 DEVCORE CONVERSION AGENCY.</div>
    </div>
  </footer>
);

const App = () => {
  const [activePage, setActivePage] = useState('home');
  useEffect(() => window.scrollTo(0, 0), [activePage]);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-lime-400 selection:text-black scroll-smooth">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === 'home' && <HomePage onCtaClick={() => setActivePage('contact')} />}
        {activePage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
