import React, { useState } from 'react';
import { Compass, Calendar, Train, Bus, ShieldAlert, Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface TravelGuidePageProps {
  onNavigate: (path: string) => void;
}

export const TravelGuidePage: React.FC<TravelGuidePageProps> = ({ onNavigate }) => {
  const [activeItinerary, setActiveItinerary] = useState<'2days' | '3days' | '5days'>('2days');

  const itineraries = {
    '2days': {
      title: '2-Day Weekend Escape: Forts & Hill Stations',
      route: 'Mumbai / Pune → Lonavala & Karla Caves → Sinhagad Fort',
      highlights: ['Karla rock-cut Buddhist Chaitya', 'Lohagad Fort ridge', 'Rustic Sinhagad Pithla Bhakri breakfast', 'Sunset at Lion’s Point'],
      schedule: [
        { day: 'Day 1', desc: 'Depart early morning on the Mumbai-Pune Expressway. Climb Karla Caves, savor fresh hot Vada Pav, enjoy sunset at Lion’s Point, and overnight stay in Lonavala.' },
        { day: 'Day 2', desc: 'Drive to Sinhagad Fort near Pune. Hike the stone steps, enjoy a rustic hilltop breakfast of Pithla Bhakri, visit Shaniwar Wada in Pune, and return by late evening.' }
      ]
    },
    '3days': {
      title: '3-Day Coastal & Heritage Odyssey',
      route: 'Mumbai → Alibaug (Ro-Ro Ferry) → Kashid Beach → Murud-Janjira Island Fort',
      highlights: ['M2M Ro-Ro ferry crossing', 'Kolaba Sea Fort low-tide walk', 'Kashid silver sand surfing', 'Murud-Janjira 19 bastions', 'Fresh Malvani seafood feast'],
      schedule: [
        { day: 'Day 1', desc: 'Ro-Ro ferry with vehicle from Bhaucha Dhakka to Mandwa. Low-tide walk to Kolaba Fort in Alibaug. Seafood thali lunch and overnight stay in Alibaug.' },
        { day: 'Day 2', desc: 'Scenic coastal drive through palm orchards to Kashid Beach. Relax on white sands, enjoy watersports, and continue south to Murud.' },
        { day: 'Day 3', desc: 'Sailboat ride to the unconquered sea fortress of Murud-Janjira. Explore ancient bronze cannons, then return via Mandwa ferry in the evening.' }
      ]
    },
    '5days': {
      title: '5-Day Grand Maharashtra UNESCO & Tiger Trail',
      route: 'Chhatrapati Sambhajinagar → Ellora & Ajanta Caves → Tadoba-Andhari Tiger Reserve',
      highlights: ['Monolithic Kailasa Temple (Cave 16)', 'Ajanta Buddhist fresco murals', 'Samruddhi Mahamarg super-expressway', '4x4 Open Gypsy Tiger Safaris in Tadoba'],
      schedule: [
        { day: 'Day 1', desc: 'Arrive in Chhatrapati Sambhajinagar. Explore Daulatabad medieval hill fort and Bibi Ka Maqbara.' },
        { day: 'Day 2', desc: 'Full day at Ellora Caves. Marvel at the top-down monolithic marvel of Kailasa Temple (Cave 16) and Grishneshwar Jyotirlinga.' },
        { day: 'Day 3', desc: 'Excursion to the dramatic horseshoe gorge of Ajanta Caves to study 2,000-year-old Buddhist tempera paintings.' },
        { day: 'Day 4', desc: 'High-speed transit via Samruddhi Mahamarg or flight to Nagpur/Tadoba. Afternoon buffer zone tiger safari.' },
        { day: 'Day 5', desc: 'Morning core zone safari in Tadoba tracking Royal Bengal Tigers and leopards. Vidarbha Saoji feast and departure.' }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF7F2]">
      {/* Banner */}
      <section className="bg-[#142B21] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-20">
          <SafeImage
            src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80"
            alt="Maharashtra Travel Guide"
            credit="Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#FFA96B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
            Practical Trip Planner
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Maharashtra Travel Guide & Itineraries
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Everything you need for seamless journeys across the state: curated itineraries, seasonal advice, state transit, and safety checklists.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Sample Itineraries Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                Tested Routes
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#24211D] mt-1">
                Curated Travel Itineraries
              </h2>
            </div>
            {/* Itinerary Length Switcher */}
            <div className="flex gap-2 mt-4 md:mt-0">
              {(['2days', '3days', '5days'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveItinerary(key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeItinerary === key
                      ? 'bg-[#164E3D] text-white shadow-xs'
                      : 'bg-[#FAF7F2] border border-[#DDD3C0] text-[#5C4D3D] hover:bg-[#EFE8DA]'
                  }`}
                >
                  {key === '2days' ? '2-Day Trip' : key === '3days' ? '3-Day Trip' : '5-Day Grand Trail'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D95D0F] block mb-1">
              {itineraries[activeItinerary].route}
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#24211D] mb-4">
              {itineraries[activeItinerary].title}
            </h3>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {itineraries[activeItinerary].highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-[#E0D6C4] text-[#4A3E31]"
                >
                  ✓ {h}
                </span>
              ))}
            </div>

            {/* Daily Schedule */}
            <div className="space-y-4 pt-4 border-t border-[#E8DEC8]">
              {itineraries[activeItinerary].schedule.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="px-3 py-1 rounded-lg bg-[#164E3D] text-white font-bold text-xs shrink-0">
                    {item.day}
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A3E31] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transportation & Transit Guide */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-xs">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#24211D] mb-8">
            Navigating Maharashtra: Transport Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8]">
              <div className="w-10 h-10 rounded-full bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center mb-4">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#24211D] mb-2">
                Indian Railways Network
              </h3>
              <p className="text-xs text-[#5C4D3D] leading-relaxed">
                Central and Western Railways connect major hubs. High-speed Vande Bharat Express trains connect Mumbai to Solapur (via Pune), Shirdi (via Nashik), and Goa across the scenic Konkan Railway.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8]">
              <div className="w-10 h-10 rounded-full bg-[#D95D0F]/10 text-[#D95D0F] flex items-center justify-center mb-4">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#24211D] mb-2">
                MSRTC State Transport
              </h3>
              <p className="text-xs text-[#5C4D3D] leading-relaxed">
                The Maharashtra State Road Transport Corporation (MSRTC) provides air-conditioned luxury "Shivneri" (Volvo/Scania) and "Shivshahi" buses connecting major cities, alongside reliable regional buses reaching remote fort bases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8]">
              <div className="w-10 h-10 rounded-full bg-[#164E3D]/10 text-[#164E3D] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#24211D] mb-2">
                Ro-Ro Ferries & Expressways
              </h3>
              <p className="text-xs text-[#5C4D3D] leading-relaxed">
                The Mumbai-Pune Expressway and Samruddhi Mahamarg provide rapid travel. M2M Ro-Ro ferries carry vehicles and passengers from Mumbai to Mandwa (Alibaug) in under 60 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Monsoon Safety & Mountain Rules */}
        <div className="bg-[#FAF4EB] rounded-3xl p-8 sm:p-12 border border-[#E5DAC6]">
          <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-4 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-[#D95D0F]" />
            <span>Sahyadri Mountain Trekking & Monsoon Safety Rules</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#4A3E31] mt-6">
            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#E8DEC8]">
              <span className="text-[#D95D0F] font-bold">1.</span>
              <span><strong>Footwear Grip:</strong> Basalt rock becomes extremely slippery under wet moss. Always wear trekking shoes with deep rubber lug soles.</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#E8DEC8]">
              <span className="text-[#D95D0F] font-bold">2.</span>
              <span><strong>Avoid Alcohol:</strong> Consuming alcohol near waterfall plunge pools and cliff precipices is strictly prohibited and carries severe penalties.</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#E8DEC8]">
              <span className="text-[#D95D0F] font-bold">3.</span>
              <span><strong>Flash Flood Warning:</strong> Sudden cloudbursts upstream can swell harmless creeks into torrents within minutes; never camp on riverbeds.</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#E8DEC8]">
              <span className="text-[#D95D0F] font-bold">4.</span>
              <span><strong>Leave No Trace:</strong> Bring back all plastic wrappers, bottles, and snack packets. Keep sacred forts and UNESCO sites pristine.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
