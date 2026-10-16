import React from 'react';
import { Mountain, Trees, ShieldAlert, ArrowRight, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { SafeImage } from '../components/SafeImage';

interface NaturePageProps {
  onNavigate: (path: string) => void;
}

export const NaturePage: React.FC<NaturePageProps> = ({ onNavigate }) => {
  const natureDestinations = DESTINATIONS.filter(
    (d) => d.category === 'Hill Station' || d.category === 'Nature & Wildlife'
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF7F2]">
      {/* Hero Header */}
      <section className="bg-[#142B21] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <SafeImage
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1600&q=80"
            alt="Western Ghats Sahyadri Biodiversity"
            credit="Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
            Sahyadri Biodiversity & Wildlife
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Nature, Wildlife & Mountain Sanctuaries
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Traverse mist-shrouded peaks of the Western Ghats, encounter Royal Bengal Tigers in Tadoba, and witness the ephemeral wildflowers of Kaas Plateau.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Western Ghats Feature Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
            <SafeImage
              src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1000&q=80"
              alt="Royal Bengal Tiger in Tadoba"
              credit="Unsplash"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#164E3D]">
              Wildlife & Conservation
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#24211D]">
              Maharashtra's Tiger Reserves & Biodiversity Hotspot
            </h2>
            <p className="text-sm text-[#4A3E31] leading-relaxed">
              Older than the Himalayas, the Sahyadri mountains of the Western Ghats are recognized as one of the world's eight "hottest hotspots" of biological diversity. In eastern Vidarbha, Tadoba-Andhari and Pench harbor one of India's healthiest tiger populations, while high volcanic plateaus like Kaas bloom with hundreds of rare carnivorous and endemic plants.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('/blogs/tadoba-wildlife-responsible-safari')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white hover:bg-[#113d2f] transition-all"
              >
                <span>Tadoba Safari Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('/destinations/kaas-plateau')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF7F2] border border-[#DDD3C0] text-[#3B3026] hover:bg-[#F2ECE1] transition-all"
              >
                <span>Kaas Valley of Flowers</span>
              </button>
            </div>
          </div>
        </div>

        {/* Nature Destinations Grid */}
        <div>
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-[#24211D]">
              Mountain Retreats & Wildlife Sanctuaries
            </h3>
            <p className="text-xs text-[#736352] mt-1">
              Discover serene hill stations, crater lakes, and protected forests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {natureDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={(slug) => onNavigate(`/destinations/${slug}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
