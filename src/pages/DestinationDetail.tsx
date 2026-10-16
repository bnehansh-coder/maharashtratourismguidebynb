import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Calendar, Compass, Plane, Train, Car, Utensils, AlertTriangle, ArrowRight, ChevronRight, X, Sparkles, BookOpen } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { BLOGS } from '../data/blogs';
import { SafeImage } from '../components/SafeImage';
import { applySEO } from '../utils/seo';
import { KEYWORD_MAPPING } from '../data/seoKeywords';

interface DestinationDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({
  slug,
  onNavigate
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption: string; credit: string } | null>(null);

  const destination = DESTINATIONS.find((d) => d.slug === slug) || DESTINATIONS[0];

  useEffect(() => {
    const mapped = KEYWORD_MAPPING.find((k) => k.targetUrl === `/destinations/${destination.slug}`);
    applySEO(
      `/destinations/${destination.slug}`,
      mapped?.seoTitle || `${destination.name} Travel Guide – Places to Visit in Maharashtra`,
      mapped?.metaDescription || destination.shortDescription || destination.overview.join(' ').slice(0, 155),
      destination.heroImage,
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'TouristDestination',
            name: destination.name,
            alternateName: destination.marathiName,
            description: destination.shortDescription || destination.overview.join(' '),
            url: `https://maharashtratourismguidebynbatra.vercel.app/destinations/${destination.slug}`,
            image: destination.heroImage,
            containedInPlace: {
              '@type': 'AdministrativeArea',
              name: 'Maharashtra',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN'
            },
            touristType: [destination.category]
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://maharashtratourismguidebynbatra.vercel.app/' },
              { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://maharashtratourismguidebynbatra.vercel.app/destinations' },
              { '@type': 'ListItem', position: 3, name: destination.name, item: `https://maharashtratourismguidebynbatra.vercel.app/destinations/${destination.slug}` }
            ]
          }
        ]
      }
    );
  }, [destination]);

  const relatedArticles = BLOGS.filter(
    (b) =>
      b.destinationSlug === destination.slug ||
      b.tags.some((t) => destination.highlights.some((h) => h.toLowerCase().includes(t.toLowerCase()))) ||
      b.category.toLowerCase().includes(destination.category.toLowerCase())
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-neutral-950 flex items-center justify-between text-white text-xs">
              <span>{selectedPhoto.caption}</span>
              <span className="text-neutral-400">Photo: {selectedPhoto.credit}</span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Banner with Genuine Photograph */}
      <div className="relative h-[65vh] min-h-[440px] max-h-[640px] bg-black overflow-hidden">
        <SafeImage
          src={destination.heroImage}
          alt={destination.name}
          credit={destination.imageCredit}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

        {/* Breadcrumb Navigation */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              <button onClick={() => onNavigate('/destinations')} className="hover:text-white transition-colors">
                Destinations
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-[#FFA96B] font-semibold">{destination.name}</span>
            </nav>
          </div>
        </div>

        {/* Destination Title & Meta Overlay */}
        <div className="absolute bottom-10 left-0 right-0 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white border border-white/20">
                {destination.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-xs text-white">
                📍 {destination.district}, {destination.region}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-xs text-white">
                ⏱️ {destination.estimatedDuration}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white mb-2">
              {destination.name}{' '}
              <span className="text-2xl sm:text-3xl text-amber-300 font-normal">
                ({destination.marathiName})
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 max-w-3xl leading-relaxed">
              {destination.tagline}
            </p>
          </div>
        </div>

        <span className="absolute bottom-3 right-4 text-[10px] text-white/70 bg-black/50 px-2 py-0.5 rounded">
          {destination.imageCredit}
        </span>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left / Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
              <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#D95D0F]" />
                <span>Overview & Cultural Context</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#4A3E31] leading-relaxed">
                {destination.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Key Highlights badges */}
              <div className="mt-8 pt-6 border-t border-[#F0E9DC]">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#8A7966] mb-3">
                  Key Destination Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-[#FAF5EC] border border-[#E8DEC8] text-[#3B3026]"
                    >
                      ★ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Gallery with Lightbox trigger */}
            {destination.gallery && destination.gallery.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
                <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-6">
                  Photographic Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {destination.gallery.map((photo, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPhoto(photo)}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-xs hover:shadow-md transition-all"
                    >
                      <SafeImage
                        src={photo.url}
                        alt={photo.caption}
                        credit={photo.credit}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[11px] text-white font-medium line-clamp-2">
                          {photo.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#8C7E6D] mt-3 text-right">
                  * Click any photo to view in high resolution with photographer credits.
                </p>
              </div>
            )}

            {/* Top Attractions */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
              <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-6">
                Top Attractions & Monuments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.topAttractions.map((attraction, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#D95D0F] transition-colors"
                  >
                    {attraction.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#164E3D] text-white inline-block mb-2">
                        {attraction.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-lg font-bold text-[#24211D] mb-1.5">
                      {attraction.name}
                    </h3>
                    <p className="text-xs text-[#5C4D3D] leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Things to Do */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
              <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-6">
                Signature Experiences & Things To Do
              </h2>
              <div className="space-y-3">
                {destination.thingsToDo.map((thing, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EFE8DA]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#D95D0F]/10 text-[#D95D0F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#4A3E31] leading-relaxed">
                      {thing}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Itinerary */}
            {destination.suggestedItinerary && destination.suggestedItinerary.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
                <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-6">
                  Recommended Travel Itinerary
                </h2>
                <div className="space-y-6">
                  {destination.suggestedItinerary.map((day) => (
                    <div key={day.day} className="relative pl-8 pb-6 border-l-2 border-[#D95D0F]/30 last:border-l-transparent">
                      <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#D95D0F] text-white text-[10px] font-bold flex items-center justify-center">
                        {day.day}
                      </div>
                      <h4 className="font-heading text-lg font-bold text-[#24211D] mb-2">
                        Day {day.day}: {day.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {day.activities.map((act, i) => (
                          <li key={i} className="text-xs sm:text-sm text-[#5C4D3D] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#164E3D]" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Local Food Specialties */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
              <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-6 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#D95D0F]" />
                <span>Local Gastronomy to Savor</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.localFoodRecommendations.map((food, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8]"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-heading text-base font-bold text-[#24211D]">
                        {food.name}
                      </h4>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          food.vegetarian
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-amber-100 text-amber-900 border border-amber-300'
                        }`}
                      >
                        {food.vegetarian ? 'Pure Veg' : 'Non-Veg'}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C4D3D] leading-relaxed mb-2">
                      {food.description}
                    </p>
                    {food.mustTryLocation && (
                      <p className="text-[11px] font-semibold text-[#D95D0F]">
                        📍 Must Try: {food.mustTryLocation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tips & Safety */}
            <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-10 border border-[#E5DAC6]">
              <h2 className="font-heading text-xl font-bold text-[#24211D] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#D95D0F]" />
                <span>Essential Travel Advice & Safety Tips</span>
              </h2>
              <ul className="space-y-2.5">
                {destination.travelTips.map((tip, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#4A3E31] flex items-start gap-2.5">
                    <span className="text-[#D95D0F] font-bold mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Facts Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8DEC8] shadow-xs">
              <h3 className="font-heading text-lg font-bold text-[#24211D] mb-4 pb-3 border-b border-[#F0E9DC]">
                Trip Essentials
              </h3>
              <div className="space-y-3.5 text-xs text-[#4A3E31]">
                <div className="flex items-center justify-between">
                  <span className="text-[#736352]">Ideal Duration:</span>
                  <span className="font-bold">{destination.estimatedDuration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736352]">Best Time to Visit:</span>
                  <span className="font-bold text-[#164E3D]">{destination.bestTimeToVisit.idealMonths}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736352]">Budget Level:</span>
                  <span className="font-bold">{destination.budgetLevel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736352]">Region:</span>
                  <span className="font-bold">{destination.region}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736352]">District:</span>
                  <span className="font-bold">{destination.district}</span>
                </div>
              </div>

              {/* Best Time Note */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-xs text-[#5C4D3D] leading-relaxed">
                <p className="font-semibold text-[#164E3D] mb-1">Seasonal Weather:</p>
                <p>{destination.bestTimeToVisit.description}</p>
                {destination.bestTimeToVisit.monsoonTip && (
                  <p className="mt-2 text-[11px] text-[#D95D0F]">
                    🌧️ <strong>Monsoon:</strong> {destination.bestTimeToVisit.monsoonTip}
                  </p>
                )}
              </div>
            </div>

            {/* How to Reach Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8DEC8] shadow-xs">
              <h3 className="font-heading text-lg font-bold text-[#24211D] mb-4 pb-3 border-b border-[#F0E9DC]">
                How to Reach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-[#D95D0F] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#24211D]">By Air</h5>
                    <p className="text-xs text-[#5C4D3D] mt-0.5">{destination.howToReach.air}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-[#164E3D] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#24211D]">By Rail</h5>
                    <p className="text-xs text-[#5C4D3D] mt-0.5">{destination.howToReach.rail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#D95D0F] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#24211D]">By Road</h5>
                    <p className="text-xs text-[#5C4D3D] mt-0.5">{destination.howToReach.road}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Destinations */}
            {destination.nearbyDestinations && destination.nearbyDestinations.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-[#E8DEC8] shadow-xs">
                <h3 className="font-heading text-lg font-bold text-[#24211D] mb-4 pb-3 border-b border-[#F0E9DC]">
                  Combine With Nearby Places
                </h3>
                <div className="space-y-2">
                  {destination.nearbyDestinations.map((nearby, idx) => (
                    <button
                      key={idx}
                      onClick={() => onNavigate(`/destinations/${nearby.slug}`)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE1] transition-colors text-left"
                    >
                      <div>
                        <h5 className="text-xs font-bold text-[#24211D]">{nearby.name}</h5>
                        <p className="text-[11px] text-[#736352]">{nearby.distance}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-[#E8DEC8] shadow-xs">
                <h3 className="font-heading text-lg font-bold text-[#24211D] mb-4 pb-3 border-b border-[#F0E9DC] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#D95D0F]" />
                  <span>Related Travel Stories</span>
                </h3>
                <div className="space-y-3">
                  {relatedArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => onNavigate(`/blogs/${art.slug}`)}
                      className="cursor-pointer group flex items-center gap-3 p-2 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                    >
                      <img
                        src={art.heroImage}
                        alt={art.title}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <h5 className="text-xs font-bold text-[#24211D] group-hover:text-[#D95D0F] transition-colors line-clamp-2">
                          {art.title}
                        </h5>
                        <span className="text-[10px] text-[#8C7E6D]">
                          {art.readTime} • {art.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
