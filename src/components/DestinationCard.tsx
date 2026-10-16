import React from 'react';
import { MapPin, ArrowRight, Clock } from 'lucide-react';
import { Destination } from '../types';
import { SafeImage } from './SafeImage';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (slug: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8DEC8] hover:border-[#D95D0F] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <SafeImage
          src={destination.heroImage}
          alt={destination.name}
          credit={destination.imageCredit}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#164E3D]/90 backdrop-blur-xs text-white border border-white/20">
            {destination.category}
          </span>
          {destination.popular && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E86518] text-white">
              Must Visit
            </span>
          )}
        </div>

        {/* Image credit unobtrusive tag */}
        <span className="absolute bottom-2 right-2 text-[10px] text-white/70 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
          {destination.imageCredit.replace('Photo via ', '').replace('Photo by ', '')}
        </span>

        {/* Name on image bottom */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-baseline gap-2">
            <h3 className="font-heading text-xl font-bold tracking-tight text-white group-hover:text-[#FFA96B] transition-colors">
              {destination.name}
            </h3>
            <span className="text-xs text-neutral-300 font-medium">
              ({destination.marathiName})
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Duration metadata */}
          <div className="flex items-center justify-between text-xs text-[#736352] mb-2.5 pb-2.5 border-b border-[#F0E9DC]">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D95D0F]" />
              {destination.district}, {destination.region}
            </span>
            <span className="flex items-center gap-1 text-[#665747]">
              <Clock className="w-3.5 h-3.5 text-[#164E3D]" />
              {destination.estimatedDuration}
            </span>
          </div>

          <p className="text-xs text-[#4A3E31] leading-relaxed line-clamp-3 mb-4">
            {destination.shortDescription}
          </p>

          {/* Quick highlight tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {destination.highlights.slice(0, 2).map((highlight, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAF5EC] border border-[#EADFCF] text-[#5C4D3D]"
              >
                ✓ {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Descriptive Destination CTA Button */}
        <button
          onClick={() => onSelect(destination.slug)}
          aria-label={`Explore complete travel guide for ${destination.name}, ${destination.region}`}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#164E3D] bg-[#F2EDE1] hover:bg-[#164E3D] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-[#164E3D]"
        >
          <span>Explore {destination.name} Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
