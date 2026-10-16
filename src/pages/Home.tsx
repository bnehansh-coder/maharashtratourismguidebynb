import React, { useState } from 'react';
import { Compass, BookOpen, ArrowRight, ShieldCheck, Waves, Mountain, Landmark, Utensils, Calendar, MapPin, Sparkles, Filter } from 'lucide-react';
import { EXPERIENCES } from '../data/experiences';
import { DESTINATIONS } from '../data/destinations';
import { BLOGS } from '../data/blogs';
import { DestinationCard } from '../components/DestinationCard';
import { BlogCard } from '../components/BlogCard';
import { SafeImage } from '../components/SafeImage';

interface HomeProps {
  onNavigate: (path: string) => void;
  savedSlugs: string[];
  onToggleSave: (slug: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  savedSlugs,
  onToggleSave
}) => {
  // Travel Planner State
  const [plannerSeason, setPlannerSeason] = useState<'All' | 'Monsoon' | 'Winter' | 'Summer'>('Monsoon');
  const [plannerDuration, setPlannerDuration] = useState<'2 Days' | '3 Days' | '4+ Days'>('2 Days');

  // Highlights Tab State
  const [activeHighlightTab, setActiveHighlightTab] = useState<
    'Monsoon' | 'Summer' | 'Winter' | 'Weekends' | 'UNESCO' | 'Cuisine'
  >('Monsoon');

  const featuredDestinations = DESTINATIONS.filter((d) => d.featuredOnHome);
  const featuredBlogs = BLOGS.slice(0, 6);

  // Recommendations for the Travel Planner
  const getPlannerRecommendations = () => {
    if (plannerSeason === 'Monsoon') {
      return DESTINATIONS.filter((d) =>
        ['lonavala-and-khandala', 'bhandardara', 'matheran', 'raigad-fort'].includes(d.slug)
      );
    } else if (plannerSeason === 'Winter') {
      return DESTINATIONS.filter((d) =>
        ['tarkarli', 'tadoba-andhari-tiger-reserve', 'ajanta-and-ellora-caves', 'nashik'].includes(d.slug)
      );
    } else if (plannerSeason === 'Summer') {
      return DESTINATIONS.filter((d) =>
        ['mahabaleshwar', 'matheran', 'tadoba-andhari-tiger-reserve', 'ratnagiri'].includes(d.slug)
      );
    }
    return DESTINATIONS.slice(0, 4);
  };

  return (
    <div className="min-h-screen">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-black overflow-hidden pt-20 pb-16">
        {/* Real Sahyadri Western Ghats Mountain & Fort Landscape Photograph */}
        <div className="absolute inset-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=85"
            alt="Sahyadri Mountain Fortresses of Maharashtra"
            credit="Photo via Unsplash / Sahyadri Range & Forts of Maharashtra"
            className="w-full h-full object-cover scale-105"
          />
          {/* Subtle Dark Gradient Overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
          {/* Official badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="text-base">🚩</span>
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">
              Welcome to Maharashtra • अतुल्य महाराष्ट्र
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
            Maharashtra – Where Every Journey Tells a Story
          </h1>

          {/* Supporting Text */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-neutral-200 font-normal leading-relaxed mb-10 drop-shadow-xs">
            Discover ancient forts, mist-covered mountains, golden beaches, vibrant traditions, and unforgettable journeys across Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/destinations')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#D95D0F] to-[#E86518] text-white shadow-lg shadow-[#D95D0F]/30 hover:from-[#c25008] hover:to-[#d45812] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Destinations</span>
            </button>
            <button
              onClick={() => onNavigate('/blogs')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-white border border-white/30 hover:bg-white/25 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Travel Stories</span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto pt-8 border-t border-white/20">
            <div className="p-3 bg-black/30 backdrop-blur-xs rounded-2xl border border-white/10">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FFA96B]">350+</div>
              <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium">Sahyadri Forts</div>
            </div>
            <div className="p-3 bg-black/30 backdrop-blur-xs rounded-2xl border border-white/10">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FFA96B]">720 km</div>
              <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium">Konkan Coastline</div>
            </div>
            <div className="p-3 bg-black/30 backdrop-blur-xs rounded-2xl border border-white/10">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FFA96B]">6 Reserves</div>
              <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium">Tiger Sanctuaries</div>
            </div>
            <div className="p-3 bg-black/30 backdrop-blur-xs rounded-2xl border border-white/10">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FFA96B]">5 Sites</div>
              <div className="text-xs uppercase tracking-wider text-neutral-300 font-medium">UNESCO World Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          EXPLORE BY EXPERIENCE
          ======================================================== */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D95D0F] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#D95D0F]/10 border border-[#D95D0F]/20 inline-block mb-3">
              Diverse Landscapes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#24211D]">
              Explore by Experience
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E4F] mt-3">
              Whether you seek cliff-top Maratha citadels, tranquil Arabian beaches, or tiger trails, Maharashtra offers endless adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onNavigate(exp.slug.startsWith('/') ? exp.slug : `/${exp.slug}`)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <SafeImage
                  src={exp.image}
                  alt={exp.title}
                  credit={exp.imageCredit}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" />

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-black/40 backdrop-blur-md text-amber-200 border border-white/20">
                    {exp.count}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-amber-300 font-medium tracking-wide">
                    {exp.marathiTitle}
                  </span>
                  <h3 className="font-heading text-xl font-bold mt-0.5 mb-1 group-hover:text-[#FFA96B] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
                    <span>Discover</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED DESTINATIONS
          ======================================================== */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#164E3D] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#164E3D]/10 border border-[#164E3D]/20 inline-block mb-3">
                Iconic Places
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#24211D]">
                Featured Destinations
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4F] mt-2 max-w-xl">
                Immerse yourself in Maharashtra's most celebrated historic strongholds, serene mountain getaways, and pristine coastlines.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/destinations')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:text-[#b34805] group"
            >
              <span>View All 16 Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.slice(0, 6).map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={(slug) => onNavigate(`/destinations/${slug}`)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/destinations')}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white hover:bg-[#113d2f] shadow-sm transition-all"
            >
              Browse Complete Destination Directory
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED TRAVEL STORIES (MAGAZINE)
          ======================================================== */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#D95D0F] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#D95D0F]/10 border border-[#D95D0F]/20 inline-block mb-3">
                The Travel Gazette
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#24211D]">
                Featured Travel Stories
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4F] mt-2 max-w-xl">
                Deep-dive editorial chronicles written by experienced historians, trekkers, and cultural authors.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/blogs')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:text-[#b34805] group"
            >
              <span>Explore All 12 Full Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Lead Article in Expanded Editorial Layout */}
          {featuredBlogs.length > 0 && (
            <div className="mb-10">
              <BlogCard
                article={featuredBlogs[0]}
                onSelect={(slug) => onNavigate(`/blogs/${slug}`)}
                isSaved={savedSlugs.includes(featuredBlogs[0].slug)}
                onToggleSave={onToggleSave}
                featuredLayout={true}
              />
            </div>
          )}

          {/* Next 5 Articles in Standard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.slice(1, 6).map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                onSelect={(slug) => onNavigate(`/blogs/${slug}`)}
                isSaved={savedSlugs.includes(article.slug)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          MAHARASHTRA TRAVEL HIGHLIGHTS
          ======================================================== */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#164E3D] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#164E3D]/10 border border-[#164E3D]/20 inline-block mb-3">
              Seasonal & Cultural Spectrum
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#24211D]">
              Maharashtra Travel Highlights
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E4F] mt-2">
              From roaring monsoon passes to UNESCO world heritage monuments and authentic regional feasts.
            </p>
          </div>

          {/* Interactive Highlight Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'Monsoon', label: '🌧️ Monsoon Escapes' },
              { id: 'Summer', label: '⛰️ Summer Hill Stations' },
              { id: 'Winter', label: '🏖️ Winter Getaways' },
              { id: 'Weekends', label: '🚗 Weekend Breaks' },
              { id: 'UNESCO', label: '🏛️ UNESCO World Heritage' },
              { id: 'Cuisine', label: '🍲 Maharashtrian Gastronomy' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveHighlightTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeHighlightTab === tab.id
                    ? 'bg-[#164E3D] text-white shadow-sm'
                    : 'bg-white border border-[#DDD3C0] text-[#5C4D3D] hover:border-[#D95D0F]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-md">
            {activeHighlightTab === 'Monsoon' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1000&q=80"
                    alt="Monsoon Waterfalls"
                    credit="Unsplash"
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                    July to September Magic
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#24211D]">
                    Roaring Waterfalls & Misty Sahyadri Valleys
                  </h3>
                  <p className="text-sm text-[#5C4D3D] leading-relaxed">
                    When the southwest monsoon hits Maharashtra, the Western Ghats erupt into vibrant green life. Drive through the mist-cloaked passes of Malshej and Tamhini Ghat, trek to Lohagad and Visapur through gushing cascades, and witness Arthur Lake in Bhandardara overflowing with power.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      💧 Malshej Ghat
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      💧 Tamhini Mist Pass
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      💧 Bhandardara Cascades
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('/blogs/best-monsoon-destinations-maharashtra')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:underline"
                    >
                      <span>Read Complete Monsoon Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeHighlightTab === 'Summer' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80"
                    alt="Mahabaleshwar & Panchgani"
                    credit="Unsplash"
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                    March to May Sanctuaries
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#24211D]">
                    Cool Mountain Air & Strawberry Estates
                  </h3>
                  <p className="text-sm text-[#5C4D3D] leading-relaxed">
                    Escape the sweltering coastal plains to the refreshing elevations of Mahabaleshwar (1,353 m) and Panchgani. Stroll along automobile-free red dirt trails in Matheran, enjoy fresh strawberry cream at Mapro Garden, and boat on tranquil Venna Lake.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🍓 Mahabaleshwar Berry Picking
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🌲 Matheran Car-Free Trails
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🛶 Venna Lake
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('/blogs/mahabaleshwar-travel-guide')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:underline"
                    >
                      <span>Explore Mahabaleshwar Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeHighlightTab === 'Winter' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
                    alt="Konkan Coast Winter"
                    credit="Unsplash"
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                    October to February Glory
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#24211D]">
                    Golden Beaches, Tiger Safaris & Vineyard Harvests
                  </h3>
                  <p className="text-sm text-[#5C4D3D] leading-relaxed">
                    Winter brings crisp blue skies, calm ocean tides, and mild mountain breezes. Scuba dive in crystal turquoise waters at Tarkarli, track Royal Bengal Tigers in Tadoba-Andhari, and sample fresh vintage wines in Nashik's Dindori valley.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🏖️ Tarkarli Scuba & Coral Reefs
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🐅 Tadoba Tiger Safaris
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🍷 Nashik Wine Trails
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('/blogs/discovering-konkan-coast')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:underline"
                    >
                      <span>Discover Konkan Coastal Journey</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeHighlightTab === 'Weekends' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80"
                    alt="Weekend Getaways"
                    credit="Unsplash"
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                    48 & 72-Hour Escapes
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#24211D]">
                    Weekend Trips from Mumbai & Pune
                  </h3>
                  <p className="text-sm text-[#5C4D3D] leading-relaxed">
                    Within a 2 to 4-hour drive from Mumbai or Pune, embark on curated road trips: Ro-Ro ferry to Alibaug's sea forts, expressway dash to Lonavala and Karla Caves, or a spiritual sojourn to Trimbakeshwar and Nashik vineyards.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🚢 Alibaug Ro-Ro Ferry
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      ⚡ Mumbai-Pune Expressway
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🏰 Sinhagad Fort Pithla Bhakri
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('/blogs/one-perfect-weekend-itineraries-mumbai-pune')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:underline"
                    >
                      <span>View Sample 48-Hour Itineraries</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeHighlightTab === 'UNESCO' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80"
                    alt="UNESCO Caves Kailasa Temple"
                    credit="Unsplash"
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                    Global Heritage Treasures
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#24211D]">
                    5 UNESCO World Heritage Monuments
                  </h3>
                  <p className="text-sm text-[#5C4D3D] leading-relaxed">
                    Maharashtra is home to 5 UNESCO World Heritage sites: Ajanta Buddhist Caves, Ellora Rock-Cut Temples (including the monolithic Kailasa), Elephanta Island Caves, Chhatrapati Shivaji Maharaj Terminus (CSMT), and the Victorian Gothic & Art Deco Ensemble of Mumbai, plus the Western Ghats biodiversity hotspot and Maratha Military Forts serial nomination.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🏛️ Ajanta & Ellora Caves
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🏛️ CSMT Railway Terminus
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🏛️ Elephanta Island
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('/blogs/ajanta-and-ellora-caves')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:underline"
                    >
                      <span>Read Ajanta & Ellora Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeHighlightTab === 'Cuisine' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80"
                    alt="Maharashtrian Cuisine Spread"
                    credit="Unsplash"
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                    Culinary Heritage
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#24211D]">
                    From Vada Pav to Puran Poli & Malvani Thalis
                  </h3>
                  <p className="text-sm text-[#5C4D3D] leading-relaxed">
                    Savor the authentic taste of Maharashtra: street-style Mumbai Vada Pav, fiery regional Misal Pav, rustic wood-fired Pithla Bhakri with garlic thecha, coconut-infused Malvani Surmai fish curries with Solkadhi, and sweet Ukdiche Modak during festivals.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🥔 Mumbai Vada Pav
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🌶️ Kolhapuri Tambda Rassa
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#FAF7F2] border border-[#E8DEC8] rounded-full font-medium text-[#4A3E31]">
                      🥥 Steamed Ukdiche Modak
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('/food-and-culture')}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:underline"
                    >
                      <span>Explore Food & Culture Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          TRAVEL PLANNING SECTION (INTERACTIVE PLANNER)
          ======================================================== */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#164E3D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
                Smart Itinerary Matcher
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Plan Your Maharashtra Trip
              </h2>
              <p className="text-sm sm:text-base text-emerald-100 mt-2">
                Select your preferred season and trip duration to receive tailored destination recommendations.
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/20">
              {/* Season */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-amber-200 mb-2">
                  Preferred Season:
                </label>
                <div className="flex gap-2">
                  {(['All', 'Monsoon', 'Winter', 'Summer'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setPlannerSeason(s)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        plannerSeason === s
                          ? 'bg-[#E86518] text-white shadow-xs'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-amber-200 mb-2">
                  Trip Duration:
                </label>
                <div className="flex gap-2">
                  {(['2 Days', '3 Days', '4+ Days'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setPlannerDuration(d)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        plannerDuration === d
                          ? 'bg-[#E86518] text-white shadow-xs'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Suggested Matching Destinations */}
            <div className="mt-8">
              <h4 className="text-xs uppercase font-bold tracking-widest text-amber-200 mb-4">
                Recommended For You ({plannerSeason} • {plannerDuration})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {getPlannerRecommendations().map((d) => (
                  <div
                    key={d.id}
                    onClick={() => onNavigate(`/destinations/${d.slug}`)}
                    className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all cursor-pointer group flex items-center gap-3.5"
                  >
                    <img
                      src={d.heroImage}
                      alt={d.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="truncate">
                      <h5 className="font-heading font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                        {d.name}
                      </h5>
                      <span className="text-[11px] text-emerald-200 block truncate">
                        {d.estimatedDuration} • {d.category}
                      </span>
                      <span className="text-[10px] text-amber-300 flex items-center gap-1 mt-0.5">
                        <span>View Guide</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-emerald-100">
                Need customized group itineraries or state transport bus connections?
              </p>
              <button
                onClick={() => onNavigate('/travel-guide')}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#164E3D] hover:bg-amber-100 transition-all shrink-0"
              >
                Open Full Travel Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
