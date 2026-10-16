import React, { useState } from 'react';
import { ArrowUp, Mail, CheckCircle2, AlertCircle, Heart, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenSeoAudit?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSeoAudit }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setEmail('');
    setErrorMessage('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142B21] text-[#EBE5DB] pt-16 pb-12 border-t border-[#234A39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-[#1A3D2F] rounded-3xl p-8 sm:p-12 mb-16 border border-[#2D604A] shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#D95D0F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <span className="text-[#FFA96B] font-bold text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-[#D95D0F]/20 border border-[#D95D0F]/30 inline-block mb-3">
                Maharashtra Travel Gazette
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Get Seasonal Travel Guides & Itineraries
              </h3>
              <p className="text-sm text-[#C7BEAF] leading-relaxed">
                Receive curated travel dispatches on monsoon waterfalls, firefly festivals, strawberry harvests, and hidden Sahyadri fort treks directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {status === 'success' ? (
                <div className="bg-[#164E3D] p-5 rounded-2xl border border-emerald-400/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">You're Subscribed!</h4>
                    <p className="text-xs text-emerald-100 mt-1">
                      Welcome to the Maharashtra Tourism Gazette. (Demo status: subscription simulated successfully).
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8C7E6D]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="Enter your email address..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0D2119] border border-[#2B5441] text-sm text-white placeholder:text-[#8C7E6D] focus:outline-none focus:border-[#FFA96B]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D95D0F] to-[#E86518] text-white hover:from-[#c25008] hover:to-[#d45812] shadow-md transition-all shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  {status === 'error' && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-300">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <p className="text-[11px] text-[#A69986]">
                    * Zero spam. Unsubscribe at any time. Verified regional travel updates only.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#234A39]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D95D0F] to-[#E86518] flex items-center justify-center text-white">
                <span className="text-xl">🚩</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white tracking-wider">
                  MAHARASHTRA TOURISM
                </h4>
                <p className="text-xs text-[#A89C8B]">Explore the Land of Wonders</p>
              </div>
            </div>
            <p className="text-xs text-[#BDB2A1] leading-relaxed max-w-sm">
              An independent, official-quality tourism portal and travel publication celebrating the history, biodiversity, sacred shrines, and coastal beauty of Maharashtra, India.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#9E907E]">
              <ShieldCheck className="w-4 h-4 text-[#E86518]" />
              <span>100% Genuine Photography • Verified Travel Guides</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest text-[#FFA96B] mb-4">
              Destinations
            </h5>
            <ul className="space-y-2 text-xs text-[#C7BEAF]">
              <li>
                <button onClick={() => onNavigate('/destinations?cat=Heritage')} className="hover:text-white transition-colors">
                  Sahyadri Forts & UNESCO Caves
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations?cat=Hill Station')} className="hover:text-white transition-colors">
                  Hill Stations & Waterfalls
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations?cat=Beach')} className="hover:text-white transition-colors">
                  Konkan Coast & Sea Forts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations?cat=Nature & Wildlife')} className="hover:text-white transition-colors">
                  Tiger Reserves & Nature
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations?cat=Spiritual')} className="hover:text-white transition-colors">
                  Jyotirlingas & Pilgrimages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations?cat=City')} className="hover:text-white transition-colors">
                  Mumbai & Pune Gateways
                </button>
              </li>
            </ul>
          </div>

          {/* Travel Stories */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest text-[#FFA96B] mb-4">
              Editorial Blogs
            </h5>
            <ul className="space-y-2 text-xs text-[#C7BEAF]">
              <li>
                <button onClick={() => onNavigate('/blogs/exploring-majestic-forts-maharashtra')} className="hover:text-white transition-colors text-left">
                  Majestic Maratha Forts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blogs/ultimate-guide-lonavala-khandala')} className="hover:text-white transition-colors text-left">
                  Ultimate Lonavala Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blogs/discovering-konkan-coast')} className="hover:text-white transition-colors text-left">
                  Konkan Coastal Journey
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blogs/ajanta-and-ellora-caves')} className="hover:text-white transition-colors text-left">
                  Ajanta & Ellora Caves
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blogs/food-lovers-guide-maharashtra')} className="hover:text-white transition-colors text-left">
                  Maharashtra Food Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blogs')} className="hover:text-white transition-colors font-semibold text-[#FFA96B]">
                  View All 12 Articles →
                </button>
              </li>
            </ul>
          </div>

          {/* Travel Help & Helplines */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest text-[#FFA96B] mb-4">
              Traveler Support
            </h5>
            <ul className="space-y-2.5 text-xs text-[#C7BEAF]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFA96B]" />
                <span>MTDC Helpline: 1800-229-930</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Police Helpline: 112</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Medical Emergency: 108</span>
              </li>
              <li className="pt-2">
                <button onClick={() => onNavigate('/travel-guide')} className="text-[#FFA96B] hover:underline">
                  Practical Itineraries & Routes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
                  Contact Helpdesk
                </button>
              </li>
              {onOpenSeoAudit && (
                <li className="pt-1">
                  <button
                    onClick={onOpenSeoAudit}
                    className="text-[#FFA96B] hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <span>SEO Audit & Keyword Map</span>
                    <span className="text-[10px] bg-[#D95D0F] text-white px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Audit
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E907E]">
          <p>© 2026 Maharashtra Tourism Travel Editorial. Dedicated to cultural preservation & sustainable ecotourism.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              Curated with <Heart className="w-3 h-3 text-rose-400 fill-current" /> for travelers worldwide
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#1C3A2D] hover:bg-[#D95D0F] hover:text-white text-[#C7BEAF] transition-all flex items-center gap-1.5 px-3"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
