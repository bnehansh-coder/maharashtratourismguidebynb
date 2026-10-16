import React from 'react';
import { Landmark, Shield, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { SafeImage } from '../components/SafeImage';

interface HeritagePageProps {
  onNavigate: (path: string) => void;
}

export const HeritagePage: React.FC<HeritagePageProps> = ({ onNavigate }) => {
  const heritageDestinations = DESTINATIONS.filter((d) => d.category === 'Heritage');

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF7F2]">
      {/* Hero Header */}
      <section className="bg-[#142B21] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <SafeImage
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80"
            alt="Kailasa Temple Ellora"
            credit="Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#FFA96B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
            Swarajya & Ancient Civilizations
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Heritage, Forts & UNESCO Monuments
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Walk in the footsteps of Chhatrapati Shivaji Maharaj across cliff-top bastions, and explore two millennia of rock-cut sculpture at Ajanta and Ellora.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* The Maratha Forts Legacy Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
              UNESCO Tentative World Heritage
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#24211D]">
              The Maratha Military Architecture of Maharashtra
            </h2>
            <p className="text-sm text-[#4A3E31] leading-relaxed">
              Spanning over 350 hill, sea, and land forts, the Maratha fortification network represents one of history's most sophisticated defensive strategies. Conceived by Chhatrapati Shivaji Maharaj in the 17th century, forts like Raigad, Sinhagad, Pratapgad, and Sindhudurg leveraged natural basalt topography and ingenious water-harvesting cisterns to establish an independent sovereign realm.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/blogs/exploring-majestic-forts-maharashtra')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white hover:bg-[#113d2f] transition-all"
              >
                <span>Read Full Maratha Forts History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3]">
            <SafeImage
              src="https://images.unsplash.com/photo-1588661750247-a9a3b2b4db3b?auto=format&fit=crop&w=1000&q=80"
              alt="Raigad Fort"
              credit="Unsplash"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Heritage Destinations Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#24211D]">
                Featured Heritage Shrines & Citadels
              </h3>
              <p className="text-xs text-[#736352] mt-1">
                Explore fortress capitals, ancient cave temples, and royal palaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={(slug) => onNavigate(`/destinations/${slug}`)}
              />
            ))}
          </div>
        </div>

        {/* UNESCO Sites Spotlight */}
        <div className="bg-[#FAF4EB] rounded-3xl p-8 sm:p-10 border border-[#E8DEC8]">
          <h3 className="font-heading text-2xl font-bold text-[#24211D] mb-6 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-[#164E3D]" />
            <span>UNESCO World Heritage Sites in Maharashtra</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#4A3E31]">
            <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8]">
              <span className="font-bold text-[#D95D0F] block mb-1">Inscribed 1983</span>
              <h4 className="font-heading font-bold text-base text-[#24211D] mb-1">Ajanta Caves</h4>
              <p className="text-[#6B5E4F]">30 rock-cut Buddhist caves with 2,000-year-old fresco murals along the Waghur River gorge.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8]">
              <span className="font-bold text-[#D95D0F] block mb-1">Inscribed 1983</span>
              <h4 className="font-heading font-bold text-base text-[#24211D] mb-1">Ellora Caves</h4>
              <p className="text-[#6B5E4F]">34 rock-hewn temples spanning Buddhist, Hindu, and Jain faiths, featuring the monolithic Kailasa Temple.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8]">
              <span className="font-bold text-[#D95D0F] block mb-1">Inscribed 1987</span>
              <h4 className="font-heading font-bold text-base text-[#24211D] mb-1">Elephanta Caves</h4>
              <p className="text-[#6B5E4F]">6th-century rock-cut Shiva temple island in Mumbai harbor with the colossal 3-faced Trimurti sculpture.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8]">
              <span className="font-bold text-[#D95D0F] block mb-1">Inscribed 2004</span>
              <h4 className="font-heading font-bold text-base text-[#24211D] mb-1">CSMT & Victorian Art Deco</h4>
              <p className="text-[#6B5E4F]">Victorian Italianate Gothic railway terminus and the world's second largest Art Deco urban ensemble.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
