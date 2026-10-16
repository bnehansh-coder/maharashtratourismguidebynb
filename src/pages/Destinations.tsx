import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, X, RotateCcw } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { SafeImage } from '../components/SafeImage';

interface DestinationsPageProps {
  onNavigate: (path: string) => void;
  initialCategory?: string;
  initialQuery?: string;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onNavigate,
  initialCategory = 'All',
  initialQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'name'>('popular');

  const categories = [
    'All',
    'Heritage',
    'Hill Station',
    'Beach',
    'Nature & Wildlife',
    'Spiritual',
    'City'
  ];

  const regions = [
    'All',
    'Western Maharashtra',
    'Konkan',
    'Marathwada',
    'Vidarbha',
    'Khandesh',
    'Mumbai MMR'
  ];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchesSearch =
        searchQuery === '' ||
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || d.category === selectedCategory;

      const matchesRegion =
        selectedRegion === 'All' || d.region === selectedRegion;

      return matchesSearch && matchesCategory && matchesRegion;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return a.name.localeCompare(b.name);
      }
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, selectedCategory, selectedRegion, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedRegion('All');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF7F2]">
      {/* Banner */}
      <section className="bg-[#142B21] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <SafeImage
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80"
            alt="Maharashtra Destinations"
            credit="Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#FFA96B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
            Destination Directory
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Explore Maharashtra's Destinations
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            From the soaring Western Ghats and historical Maratha forts to the golden Konkan littoral and sacred riverbanks, find your ideal destination.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8DEC8] shadow-xs mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8C7E6D]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, fort, beach, district..."
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-sm text-[#24211D] placeholder:text-[#9A8875] focus:outline-none focus:border-[#D95D0F]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Region Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-xs font-semibold text-[#4A3E31] focus:outline-none focus:border-[#D95D0F]"
              >
                <option value="All">All Regions (All Maharashtra)</option>
                {regions.filter((r) => r !== 'All').map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-xs font-semibold text-[#4A3E31] focus:outline-none focus:border-[#D95D0F]"
              >
                <option value="popular">Sort: Popular First</option>
                <option value="name">Sort: Alphabetical (A-Z)</option>
              </select>
            </div>

            {/* Reset Filter Button */}
            <div className="md:col-span-2 flex justify-end">
              {(searchQuery || selectedCategory !== 'All' || selectedRegion !== 'All') ? (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              ) : (
                <span className="text-xs font-medium text-[#736352]">
                  Showing {filteredDestinations.length} places
                </span>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-[#F0E9DC] no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A7966] mr-1 shrink-0">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#164E3D] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#5C4D3D] hover:bg-[#EFE7D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={(slug) => onNavigate(`/destinations/${slug}`)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DEC8] max-w-lg mx-auto my-12">
            <MapPin className="w-12 h-12 text-[#D95D0F] mx-auto mb-3 opacity-60" />
            <h3 className="font-heading text-xl font-bold text-[#24211D]">
              No Destinations Found
            </h3>
            <p className="text-xs text-[#736352] mt-1 mb-6">
              We couldn't find any places matching your current filters. Try resetting the filters or searching with another term.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white hover:bg-[#113d2f] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
