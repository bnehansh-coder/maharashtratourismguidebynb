import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, BookOpen, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { BLOGS } from '../data/blogs';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredDestinations = normalizedQuery
    ? DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(normalizedQuery) ||
          d.tagline.toLowerCase().includes(normalizedQuery) ||
          d.category.toLowerCase().includes(normalizedQuery) ||
          d.region.toLowerCase().includes(normalizedQuery) ||
          d.district.toLowerCase().includes(normalizedQuery) ||
          d.highlights.some((h) => h.toLowerCase().includes(normalizedQuery))
      ).slice(0, 5)
    : [];

  const filteredBlogs = normalizedQuery
    ? BLOGS.filter(
        (b) =>
          b.title.toLowerCase().includes(normalizedQuery) ||
          b.excerpt.toLowerCase().includes(normalizedQuery) ||
          b.category.toLowerCase().includes(normalizedQuery) ||
          b.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      ).slice(0, 5)
    : [];

  const popularSearches = [
    'Raigad Fort',
    'Lonavala',
    'Ajanta Caves',
    'Tadoba Tiger Safari',
    'Malvani Seafood',
    'Mahabaleshwar Strawberries',
    'Matheran Toy Train',
    'Monsoon Waterfalls'
  ];

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#DFD5C2] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8DEC8] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#D95D0F] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Maharashtra forts, hill stations, beaches, blogs..."
            className="w-full bg-transparent text-sm sm:text-base text-[#24211D] placeholder:text-[#9A8875] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#F2ECE1] text-[#6B5E4F] hover:bg-[#E8DEC8]"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          {/* If no query, show popular suggestions */}
          {!normalizedQuery && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#8A7966] mb-3">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full text-xs bg-white border border-[#E0D6C4] text-[#4A3E31] hover:border-[#D95D0F] hover:text-[#D95D0F] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Destinations match */}
          {normalizedQuery && filteredDestinations.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#164E3D] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Destinations ({filteredDestinations.length})
                </span>
                <button
                  onClick={() => handleSelect(`/destinations?q=${encodeURIComponent(query)}`)}
                  className="text-xs text-[#D95D0F] hover:underline"
                >
                  View all
                </button>
              </div>
              <div className="space-y-2">
                {filteredDestinations.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleSelect(`/destinations/${d.slug}`)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-[#EBE3D3] hover:border-[#D95D0F] hover:shadow-xs transition-all text-left group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={d.heroImage}
                        alt={d.name}
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                      />
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#24211D] group-hover:text-[#D95D0F] transition-colors">
                            {d.name}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#164E3D]/10 text-[#164E3D] font-medium">
                            {d.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#736352] truncate">{d.tagline}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#D95D0F] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blogs match */}
          {normalizedQuery && filteredBlogs.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#164E3D] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Travel Articles ({filteredBlogs.length})
                </span>
                <button
                  onClick={() => handleSelect(`/blogs?q=${encodeURIComponent(query)}`)}
                  className="text-xs text-[#D95D0F] hover:underline"
                >
                  View all
                </button>
              </div>
              <div className="space-y-2">
                {filteredBlogs.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleSelect(`/blogs/${b.slug}`)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-[#EBE3D3] hover:border-[#D95D0F] hover:shadow-xs transition-all text-left group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={b.heroImage}
                        alt={b.title}
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                      />
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#24211D] group-hover:text-[#D95D0F] transition-colors truncate">
                            {b.title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#736352] truncate">{b.excerpt}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#D95D0F] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {normalizedQuery && filteredDestinations.length === 0 && filteredBlogs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm font-medium text-[#4A3E31]">
                No destinations or articles found matching "{query}".
              </p>
              <p className="text-xs text-[#82715F] mt-1">
                Try searching for "Forts", "Konkan", "Tadoba", "Caves", or "Misal".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
