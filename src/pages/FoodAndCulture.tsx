import React from 'react';
import { Utensils, Sparkles, Music, Palette, ArrowRight } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface FoodAndCulturePageProps {
  onNavigate: (path: string) => void;
}

export const FoodAndCulturePage: React.FC<FoodAndCulturePageProps> = ({ onNavigate }) => {
  const iconicDishes = [
    {
      name: 'Mumbai Vada Pav',
      marathi: 'वडा पाव',
      desc: 'Deep-fried spiced potato batata vada inside a pav, smeared with spicy garlic-peanut dry chutney and fried green chilies.',
      tag: 'Iconic Street Food',
      region: 'Mumbai'
    },
    {
      name: 'Maharashtra Misal Pav',
      marathi: 'मिसळ पाव',
      desc: 'Spicy sprouted moth bean curry topped with farsan, chopped onions, and lemon, served with hot buttery pav and fiery tarri.',
      tag: 'Breakfast Favorite',
      region: 'Pune / Kolhapur / Nashik'
    },
    {
      name: 'Pithla Bhakri & Thecha',
      marathi: 'पिठलं भाकरी आणि ठेचा',
      desc: 'Wholesome gram-flour porridge paired with open-flame charred jowar/bajra flatbread and freshly pounded spicy green chili thecha.',
      tag: 'Rustic Soul Food',
      region: 'Rural Sahyadris'
    },
    {
      name: 'Malvani Surmai & Crab Curry',
      marathi: 'मालवणी सुरमई आणि खेकडा कालवण',
      desc: 'Fresh Arabian Sea kingfish or crab slow-cooked in toasted coconut and kokum gravy, served with fluffy multi-grain Kombdi Vade.',
      tag: 'Coastal Specialty',
      region: 'Konkan Coast'
    },
    {
      name: 'Kolhapuri Tambda & Pandhra Rassa',
      marathi: 'तांबडा आणि पांढरा रस्सा',
      desc: 'Contrasting royal mutton broths: fiery red chili-infused Tambda Rassa paired with soothing coconut milk Pandhra Rassa.',
      tag: 'Royal Feast',
      region: 'Kolhapur'
    },
    {
      name: 'Ukdiche Modak',
      marathi: 'उकडीचे मोदक',
      desc: 'Steamed rice flour dumplings stuffed with hand-grated coconut, jaggery, and cardamom, crowned with fragrant warm pure ghee.',
      tag: 'Festive Sweet',
      region: 'Statewide / Konkan'
    },
    {
      name: 'Puran Poli',
      marathi: 'पुरण पोळी',
      desc: 'Golden handcrafted flatbread stuffed with sweet cooked chana dal, jaggery, cardamom, and nutmeg, served drenched in pure ghee.',
      tag: 'Traditional Festive',
      region: 'Statewide'
    },
    {
      name: 'Thalipeeth & Fresh Loni',
      marathi: 'थालीपीठ आणि लोणी',
      desc: 'Nutritious roasted multi-grain savory pancake spiced with onions, green chilies, and coriander, served with homemade white butter.',
      tag: 'Traditional Comfort',
      region: 'Western Maharashtra'
    }
  ];

  const culturalPillars = [
    {
      title: 'Ganesh Chaturthi & Dhol Tasha',
      desc: 'Maharashtra’s grandest 10-day cultural festival founded by Bal Gangadhar Tilak. Millions gather as reverberating Dhol Tasha percussion troupes celebrate Lord Ganesha with energy and devotion.',
      badge: 'Grandest Festival'
    },
    {
      title: 'Lavani & Powada Folk Traditions',
      desc: 'Lavani combines powerful rhythmic beats of the dholki drum with graceful expressive dance. Powada heroic ballads chronicle the valiance and martial exploits of Chhatrapati Shivaji Maharaj.',
      badge: 'Folk Performing Arts'
    },
    {
      title: 'Warli Tribal Painting',
      desc: 'One of the world’s oldest living indigenous art forms originating in the North Sahyadri hills, utilizing simple geometric circles, triangles, and white rice paste to depict scenes of harmony with nature.',
      badge: 'Indigenous Art'
    },
    {
      title: 'Paithani Silk & Handloom Sarees',
      desc: 'Dating back 2,000 years to the Satavahana era in Paithan, Paithani sarees are characterized by oblique square borders and kaleidoscopic pallus woven with pure mulberry silk and gold zari thread.',
      badge: 'Royal Handlooms'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF7F2]">
      {/* Hero Banner */}
      <section className="bg-[#142B21] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-25">
          <SafeImage
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=80"
            alt="Maharashtrian Cuisine and Traditions"
            credit="Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#FFA96B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
            Flavors & Traditions
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Food, Festivals & Living Traditions
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Delve into the vibrant gastronomy, sacred rituals, rhythmic folk dances, and indigenous crafts that define the heart of Maharashtra.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Food Section Header */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D95D0F]">
                Culinary Wonders
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#24211D] mt-1">
                The Iconic Flavors of Maharashtra
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/blogs/food-lovers-guide-maharashtra')}
              className="mt-3 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D0F] hover:underline"
            >
              <span>Read Full 10-Min Gastronomy Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {iconicDishes.map((dish, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E8DEC8] hover:border-[#D95D0F] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#164E3D]/10 text-[#164E3D]">
                      {dish.tag}
                    </span>
                    <span className="text-xs text-[#8C7E6D] font-medium">{dish.region}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#24211D] mb-0.5">
                    {dish.name}
                  </h3>
                  <span className="text-xs text-[#D95D0F] font-medium block mb-2">
                    {dish.marathi}
                  </span>
                  <p className="text-xs text-[#5C4D3D] leading-relaxed">
                    {dish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Heritage & Art Forms */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#164E3D]">
              Living Culture
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#24211D] mt-1">
              Festivals, Folk Arts & Handlooms
            </h2>
            <p className="text-sm text-[#6B5E4F] mt-2">
              Explore traditions that have thrived through centuries of empires and community celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8]"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E86518] text-white inline-block mb-3">
                  {pillar.badge}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#24211D] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3E31] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
