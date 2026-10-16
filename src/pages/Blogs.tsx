import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Bookmark, Calendar, X, RotateCcw } from 'lucide-react';
import { BLOGS } from '../data/blogs';
import { BlogCard } from '../components/BlogCard';
import { SafeImage } from '../components/SafeImage';

interface BlogsPageProps {
  onNavigate: (path: string) => void;
  savedSlugs: string[];
  onToggleSave: (slug: string) => void;
  initialCategory?: string;
  initialQuery?: string;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({
  onNavigate,
  savedSlugs,
  onToggleSave,
  initialCategory = 'All',
  initialQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = [
    'All',
    'Forts & Heritage',
    'Hill Stations',
    'Beaches & Konkan',
    'Caves & History',
    'Hidden Gems',
    'Food & Culture',
    'Monsoon Escapes',
    'Wildlife',
    'Spiritual',
    'Itineraries'
  ];

  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((b) => {
      const matchesSearch =
        searchQuery === '' ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || b.category === selectedCategory;

      const matchesSaved = !showSavedOnly || savedSlugs.includes(b.slug);

      return matchesSearch && matchesCategory && matchesSaved;
    });
  }, [searchQuery, selectedCategory, showSavedOnly, savedSlugs]);

  const displayedBlogs = filteredBlogs.slice(0, visibleCount);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setShowSavedOnly(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF7F2]">
      {/* Banner */}
      <section className="bg-[#142B21] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-20">
          <SafeImage
            src="https://images.unsplash.com/photo-1588661750247-a9a3b2b4db3b?auto=format&fit=crop&w=1600&q=80"
            alt="Maharashtra Travel Stories"
            credit="Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#FFA96B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
            Travel Magazine & Chronicles
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Maharashtra Travel Stories
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            In-depth guides, historical chronicles, and practical itineraries written by passionate explorers and cultural chroniclers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8DEC8] shadow-xs mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8C7E6D]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, keywords, tags..."
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

            {/* Saved articles toggle & count */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  showSavedOnly
                    ? 'bg-[#E86518] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#4A3E31] border border-[#DDD3C0] hover:bg-[#F2ECE1]'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-current' : ''}`} />
                <span>Saved ({savedSlugs.length})</span>
              </button>

              {(searchQuery || selectedCategory !== 'All' || showSavedOnly) && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-[#F0E9DC] no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A7966] mr-1 shrink-0">
              Topic:
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

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#736352]">
          <span>
            Showing {displayedBlogs.length} of {filteredBlogs.length} articles
          </span>
        </div>

        {/* Blog Cards Grid */}
        {displayedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                onSelect={(slug) => onNavigate(`/blogs/${slug}`)}
                isSaved={savedSlugs.includes(article.slug)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DEC8] max-w-lg mx-auto my-12">
            <BookOpen className="w-12 h-12 text-[#D95D0F] mx-auto mb-3 opacity-60" />
            <h3 className="font-heading text-xl font-bold text-[#24211D]">
              No Travel Stories Found
            </h3>
            <p className="text-xs text-[#736352] mt-1 mb-6">
              We couldn't find any articles matching your search query or saved filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white hover:bg-[#113d2f] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredBlogs.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white hover:bg-[#113d2f] shadow-sm transition-all"
            >
              Load More Travel Stories ({filteredBlogs.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
