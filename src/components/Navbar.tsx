import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Bookmark, Compass, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  savedCount: number;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  savedCount,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Travel Blogs', path: '/blogs' },
    { label: 'Heritage', path: '/heritage' },
    { label: 'Nature & Wildlife', path: '/nature' },
    { label: 'Food & Culture', path: '/food-and-culture' },
    { label: 'Travel Guide', path: '/travel-guide' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DEC8] py-3'
            : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleLinkClick('/')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D95D0F] to-[#E86518] flex items-center justify-center text-white shadow-md shadow-[#D95D0F]/20 group-hover:scale-105 transition-transform">
                <span className="text-xl">🚩</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-display text-lg tracking-wider font-bold transition-colors ${
                      isScrolled ? 'text-[#1B3B2B]' : 'text-white'
                    }`}
                  >
                    MAHARASHTRA
                  </span>
                  <span className="text-[#E86518] font-bold text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#E86518]/10 border border-[#E86518]/20">
                    TOURISM
                  </span>
                </div>
                <p
                  className={`text-[11px] tracking-wide font-medium transition-colors ${
                    isScrolled ? 'text-[#6B5E4F]' : 'text-neutral-200'
                  }`}
                >
                  Explore the Land of Wonders
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive =
                  currentPath === link.path ||
                  (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
                      isActive
                        ? isScrolled
                          ? 'bg-[#164E3D] text-white shadow-xs'
                          : 'bg-white/20 text-white backdrop-blur-xs font-semibold'
                        : isScrolled
                        ? 'text-[#4A3E31] hover:text-[#164E3D] hover:bg-[#F2ECE1]'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Search, Bookmarks, CTA */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search destinations and articles"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-[#4A3E31] hover:bg-[#EFE7D8] hover:text-[#164E3D]'
                    : 'text-white hover:bg-white/15'
                }`}
                title="Search destinations & blogs"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Saved Articles */}
              <button
                onClick={() => handleLinkClick('/bookmarks')}
                aria-label="Saved articles"
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-[#4A3E31] hover:bg-[#EFE7D8] hover:text-[#164E3D]'
                    : 'text-white hover:bg-white/15'
                }`}
                title="View saved stories"
              >
                <Bookmark className="w-5 h-5" />
                {savedCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#E86518] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </button>

              {/* CTA Button */}
              <button
                onClick={() => handleLinkClick('/destinations')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D95D0F] to-[#E86518] text-white shadow-sm hover:shadow-md hover:from-[#c25008] hover:to-[#d45812] transition-all transform hover:-translate-y-0.5"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Explore</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-[#2D231E] hover:bg-[#EFE7D8]'
                    : 'text-white hover:bg-white/15'
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#FAF7F2] shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b border-[#E8DEC8] flex items-center justify-between bg-[#F4EFE6]">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚩</span>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#164E3D]">MAHARASHTRA</h3>
                  <p className="text-[10px] text-[#6B5E4F] tracking-wider uppercase font-semibold">Official Tourism Portal</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 border-b border-[#E8DEC8]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 bg-white rounded-xl border border-[#DFD5C2] text-sm text-[#736352] hover:border-[#D95D0F]"
              >
                <Search className="w-4 h-4 text-[#D95D0F]" />
                <span>Search destinations, forts, foods...</span>
              </button>
            </div>

            <div className="p-4 space-y-1 flex-1">
              {navLinks.map((link) => {
                const isActive =
                  currentPath === link.path ||
                  (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#164E3D] text-white font-semibold'
                        : 'text-[#3E342B] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#E8DEC8] mt-4 space-y-2">
                <button
                  onClick={() => handleLinkClick('/bookmarks')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium text-[#3E342B] hover:bg-[#F2ECE1]"
                >
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#D95D0F]" />
                    <span>Saved Articles</span>
                  </div>
                  {savedCount > 0 && (
                    <span className="px-2 py-0.5 text-xs bg-[#E86518] text-white rounded-full font-bold">
                      {savedCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="p-5 bg-[#F4EFE6] border-t border-[#E8DEC8]">
              <button
                onClick={() => handleLinkClick('/destinations')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D95D0F] to-[#E86518] text-white font-bold text-center uppercase text-xs tracking-wider shadow-sm"
              >
                Plan Your Journey
              </button>
              <p className="text-[11px] text-center text-[#82715F] mt-3">
                Helpline: 1800-229-930 (Toll Free)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
