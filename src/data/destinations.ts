import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'mumbai',
    slug: 'mumbai',
    name: 'Mumbai',
    marathiName: 'मुंबई',
    tagline: 'The City of Dreams & Coastal Metropolis',
    category: 'City',
    region: 'Mumbai MMR',
    district: 'Mumbai City & Suburban',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo by Unsplash / Gateway of India',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80', caption: 'Gateway of India overlooking the Arabian Sea', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1566552881560-0be86c53957f?auto=format&fit=crop&w=1000&q=80', caption: 'Marine Drive Queen’s Necklace twilight panorama', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1000&q=80', caption: 'Chhatrapati Shivaji Maharaj Terminus (CSMT) Victorian Gothic Architecture', credit: 'Unsplash' }
    ],
    shortDescription: 'The glittering financial and entertainment capital of India, Mumbai blends Victorian Gothic UNESCO landmarks, bustling sea-facing promenades, and vibrant culinary traditions.',
    overview: [
      'Mumbai, originally an archipelago of seven fishing islands settled by the indigenous Koli community, has transformed over centuries into one of the world\'s most vibrant megacities. Flanked by the Arabian Sea on the west, Mumbai is a kaleidoscope of cultures, historic colonial architecture, Bollywood glamour, and an unbeatable street-food culture.',
      'From the iconic Gateway of India and the UNESCO World Heritage Victorian Gothic ensembles of Fort to the sweeping promenade of Marine Drive known as the Queen’s Necklace, the city never pauses. Visitors can explore quiet heritage precincts like Khotachiwadi, ancient rock-cut art at Elephanta Caves across Mumbai Harbor, and experience the warmth of the famous local Dabbawalas.'
    ],
    highlights: ['UNESCO Heritage CSMT & Victorian Art Deco', 'Marine Drive Sunset', 'Elephanta Island Caves', 'Legendary Street Food Scene', 'Kala Ghoda Art Precinct'],
    topAttractions: [
      { name: 'Gateway of India & Taj Mahal Palace', description: 'Iconic 1924 basalt arch facing the Mumbai harbor with the majestic 1903 heritage hotel beside it.', badge: 'Iconic Landmark' },
      { name: 'Marine Drive & Chowpatty', description: 'A 3.6-kilometer C-shaped coastal boulevard offering balmy Arabian sea breezes and sunset roasted corn.', badge: 'Must Experience' },
      { name: 'Chhatrapati Shivaji Maharaj Terminus', description: 'UNESCO World Heritage railway terminus combining Victorian Italianate Gothic Revival with traditional Indian crafts.', badge: 'UNESCO Heritage' },
      { name: 'Elephanta Caves', description: '6th-century rock-cut cave temples dedicated to Lord Shiva situated on an island an hour\'s ferry ride away.', badge: 'Rock Architecture' },
      { name: 'Colaba Causeway & Fort Precinct', description: 'Heritage streets lined with quaint cafes, art galleries, bookstalls, and colonial-era institutions.', badge: 'Cultural Walk' }
    ],
    thingsToDo: [
      'Take an early morning heritage architecture walking tour around Horniman Circle and Kala Ghoda.',
      'Hop on a heritage ferry from the Gateway to Elephanta Caves to admire the Sadashiva Trimurti sculpture.',
      'Stroll along Marine Drive at twilight as street lamps illuminate the Queen\'s Necklace.',
      'Relish authentic Mumbai street food: Vada Pav outside Mithibai, Pav Bhaji at Sardar, and Bun Maska at an Irani cafe.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to March',
      description: 'The winter months bring pleasant daytime temperatures (20°C–30°C) with low humidity and cool evening breezes.',
      monsoonTip: 'June to September brings heavy romantic downpours; sea walks are dramatic, but local train schedules may face delays.',
      summerTip: 'April and May are warm and humid; early mornings and indoor museum visits are recommended.',
      winterTip: 'November to February is ideal for heritage walking tours, film festivals, and outdoor seaside dining.'
    },
    estimatedDuration: '3 to 4 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'Chhatrapati Shivaji Maharaj International Airport (BOM) connects with major domestic and international carriers.',
      rail: 'Chhatrapati Shivaji Maharaj Terminus (CSMT), Mumbai Central, and Bandra Terminus connect to all parts of India.',
      road: 'Seamlessly linked via the Mumbai-Pune Expressway, NH 48, and Samruddhi Mahamarg.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Colonial Heritage & South Mumbai', activities: ['Morning at Gateway of India & CSMT', 'Lunch at a historic Irani cafe in Fort', 'Afternoon exploring Kala Ghoda galleries & Prince of Wales Museum (CSMVS)', 'Sunset at Marine Drive'] },
      { day: 2, title: 'Elephanta Caves & Modern City', activities: ['Ferry ride to Elephanta Island', 'Explore 6th-century cave sculptures', 'Evening at Bandra Bandstand and Carter Road sunset promenade'] },
      { day: 3, title: 'Culture & Markets', activities: ['Morning at Dadar flower market and Siddhivinayak temple', 'Sample coastal seafood lunch', 'Boutique shopping at Colaba Causeway'] }
    ],
    localFoodRecommendations: [
      { name: 'Mumbai Vada Pav', description: 'Golden fried potato patty seasoned with mustard seeds and curry leaves inside a pillowy pav, sprinkled with dry garlic chutney.', vegetarian: true, mustTryLocation: 'Ashok Vada Pav, Dadar' },
      { name: 'Bombil Fry (Bombay Duck)', description: 'Crisp rava-crusted fresh lizardfish delicately marinated in Malvani masala and kokum.', vegetarian: false, mustTryLocation: 'Trishna or Mahesh Lunch Home' },
      { name: 'Pav Bhaji', description: 'Rich spiced mashed vegetable medley topped with melting salted butter and toasted pav.', vegetarian: true, mustTryLocation: 'Sardar Pav Bhaji, Tardeo' }
    ],
    nearbyDestinations: [
      { name: 'Alibaug', slug: 'alibaug', distance: '1 hour via Ro-Ro ferry from Bhaucha Dhakka' },
      { name: 'Lonavala', slug: 'lonavala-and-khandala', distance: '85 km via Mumbai-Pune Expressway' },
      { name: 'Matheran', slug: 'matheran', distance: '80 km' }
    ],
    travelTips: [
      'Use the Mumbai Local trains during non-peak hours (11:00 AM – 4:00 PM) for quick transit between South Mumbai and suburbs.',
      'Metered black-and-yellow taxis (Kaali Peeli) and ride-hailing apps are safe, efficient, and readily available 24/7.',
      'Carry a lightweight umbrella if visiting between late June and September.'
    ],
    coordinates: { lat: 18.9220, lng: 72.8347 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'pune',
    slug: 'pune',
    name: 'Pune',
    marathiName: 'पुणे',
    tagline: 'The Cultural & Intellectual Capital of Maharashtra',
    category: 'City',
    region: 'Western Maharashtra',
    district: 'Pune',
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Sinhagad Fort Pune',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80', caption: 'Sinhagad Fort ridge overlooking Pune valley', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1588661750247-a9a3b2b4db3b?auto=format&fit=crop&w=1000&q=80', caption: 'Western Ghats surrounding Pune plateau', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80', caption: 'Authentic Maharashtrian culinary spread in Pune', credit: 'Unsplash' }
    ],
    shortDescription: 'Regarded as the cultural nerve center of Maharashtra, Pune boasts Peshwa-era fortifications, venerable educational institutions, lush hill fortresses, and a flourishing culinary hub.',
    overview: [
      'Nestled on the Deccan plateau at the confluence of the Mula and Mutha rivers, Pune was the seat of the Peshwas, the prime ministers of the Maratha Empire. Steeped in history, it preserves centuries-old Wada mansions alongside modern universities and thriving research corridors, earning its moniker as the "Oxford of the East".',
      'A city with a deeply passionate artistic spirit, Pune comes alive during the Ganesh festival and Savai Gandharva music sessions. Surrounding the city are historic forts such as Sinhagad, Rajgad, and Torna, making Pune the premier gateway for hikers exploring the Sahyadri mountains.'
    ],
    highlights: ['Shaniwar Wada Palace Citadel', 'Sinhagad Fort Trek & Pithla Bhakri', 'Aga Khan Palace & Gandhi Memorial', 'FC Road Street Food', 'Raja Dinkar Kelkar Museum'],
    topAttractions: [
      { name: 'Shaniwar Wada', description: 'The 18th-century seven-story fortified palace seat of the Maratha Peshwas, famous for its grand Delhi Gate.', badge: 'Maratha Citadel' },
      { name: 'Aga Khan Palace', description: 'Majestic Italian arches and manicured lawns; served as a prison for Mahatma Gandhi during the Quit India movement.', badge: 'National Monument' },
      { name: 'Sinhagad Fort', description: 'Historic hill fortress 30 km southwest of Pune where Tanaji Malusare fought the legendary Battle of Sinhagad in 1670.', badge: 'Historic Fortress' },
      { name: 'Raja Dinkar Kelkar Museum', description: 'Fascinating collection of over 20,000 artifacts including Mastani Mahal interiors and musical instruments.', badge: 'Museum' }
    ],
    thingsToDo: [
      'Climb Sinhagad Fort in the morning and savor freshly cooked Pithla Bhakri with curd at the summit stalls.',
      'Wander through the historic Tulshibaug market and Lakshmi Road for traditional brassware, Paithani sarees, and spices.',
      'Sip filter coffee and relish bun maska at Vohuman Cafe near Pune Station.',
      'Cycle around the peaceful University of Pune campus, famed for its lush canopy and colonial gothic main building.'
    ],
    bestTimeToVisit: {
      idealMonths: 'July to February',
      description: 'Pleasant subtropical weather. July to September is magical for surrounding Sahyadri waterfalls; October to February is crisp and dry.',
      monsoonTip: 'Monsoon transforms the nearby fort trails into emerald paradises; wear sturdy waterproof trekking boots.',
      winterTip: 'Evenings in winter dip to 12°C–16°C, perfect for outdoor dining and cultural concerts.'
    },
    estimatedDuration: '2 to 3 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'Pune International Airport (PNQ) in Lohegaon connects to major domestic airports and select international hubs.',
      rail: 'Pune Junction is a major railway junction with high-speed Vande Bharat and express connections to Mumbai and South India.',
      road: '3 hours drive from Mumbai via the 6-lane Mumbai-Pune Expressway (150 km).'
    },
    suggestedItinerary: [
      { day: 1, title: 'Peshwa History & Heritage', activities: ['Morning at Shaniwar Wada & Lal Mahal', 'Traditional Maharashtrian thali lunch', 'Afternoon at Raja Dinkar Kelkar Museum', 'Evening walk down Fergusson College Road'] },
      { day: 2, title: 'Sinhagad Fort & Gandhi Memorial', activities: ['Early morning excursion to Sinhagad Fort', 'Rustic hilltop breakfast of pithla bhakri and thecha', 'Afternoon visit to serene Aga Khan Palace', 'Sweet souvenir shopping of Bakarwadi at Chitale Bandhu'] }
    ],
    localFoodRecommendations: [
      { name: 'Puneri Misal', description: 'A spicy sprouted moth bean curry garnished with farsan, chopped onions, and lemon, served with toasted pav.', vegetarian: true, mustTryLocation: 'Kattakirrr or Bedekar Tea Stall' },
      { name: 'Pithla Bhakri with Thecha', description: 'Savory gram flour porridge paired with hot bajra flatbread, raw onions, and fiery pounded green chili thecha.', vegetarian: true, mustTryLocation: 'Sinhagad Fort hilltop food shacks' },
      { name: 'Bakarwadi & Mango Mastani', description: 'Crisp spiral pinwheel snacks followed by Pune\'s signature thick mango milkshake topped with ice cream and nuts.', vegetarian: true, mustTryLocation: 'Sujata Mastani & Chitale Bandhu' }
    ],
    nearbyDestinations: [
      { name: 'Lonavala & Khandala', slug: 'lonavala-and-khandala', distance: '65 km via Expressway' },
      { name: 'Mahabaleshwar', slug: 'mahabaleshwar', distance: '120 km' },
      { name: 'Raigad Fort', slug: 'raigad-fort', distance: '130 km' }
    ],
    travelTips: [
      'Carry light woolens if visiting Sinhagad fort in winter mornings.',
      'Purchase Chitale Bandhu Bakarwadi early in the morning as stocks routinely sell out before afternoon.',
      'Pune auto-rickshaws generally run on digital meters; verify meter flag before boarding.'
    ],
    coordinates: { lat: 18.5204, lng: 73.8567 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'mahabaleshwar',
    slug: 'mahabaleshwar',
    name: 'Mahabaleshwar',
    marathiName: 'महाबळेश्वर',
    tagline: 'Queen of Sahyadri Hill Stations & Strawberry Capital',
    category: 'Hill Station',
    region: 'Western Maharashtra',
    district: 'Satara',
    heroImage: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Western Ghats Viewpoint',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80', caption: 'Arthur\'s Seat deep canyon cliff view', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80', caption: 'Misty plateau and dense evergreen forest', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80', caption: 'Lush green valley roads of Panchgani-Mahabaleshwar', credit: 'Unsplash' }
    ],
    shortDescription: 'Perched at 1,353 meters in the Western Ghats, Mahabaleshwar is celebrated for panoramic valley vistas, lush strawberry orchards, colonial heritage, and origin of the holy Krishna River.',
    overview: [
      'Mahabaleshwar, situated in the Satara district among the UNESCO-recognized Western Ghats biodiversity hotspot, served as the summer capital of the Bombay Presidency during the British Raj. The town is surrounded by valleys on all sides, resulting in dramatic viewpoints that drop into the dense Konkan canyons.',
      'Responsible for over 85% of India\'s commercial strawberry production, the region fills with the scent of fresh berries from November to April. In addition to natural beauty, Old Mahabaleshwar is home to the Panchganga Temple, where five holy rivers—Krishna, Koyna, Venna, Savitri, and Gayatri—are believed to originate from the mouth of a stone cow statue.'
    ],
    highlights: ['Arthur\'s Seat Canyon View', 'Venna Lake Boating', 'Mapro Garden Strawberry Festival', 'Panchganga Temple Origin of Krishna River', 'Pratapgad Fort Day Trip'],
    topAttractions: [
      { name: 'Arthur\'s Seat', description: 'Known as the Queen of Points; peer down 600 meters into the Savitri valley and Konkan plains from dramatic rock ledges.', badge: 'Iconic Viewpoint' },
      { name: 'Venna Lake', description: 'A serene tree-fringed lake constructed in 1842 offering paddle boating, horse riding, and hot street corn stalls.', badge: 'Family Favorite' },
      { name: 'Pratapgad Fort', description: 'Historic hill fort 24 km from Mahabaleshwar where Chhatrapati Shivaji Maharaj vanquished Afzal Khan in 1659.', badge: 'Maratha Citadel' },
      { name: 'Panchganga & Mahabaleshwar Temple', description: 'Ancient 13th-century stone temple complex where five holy rivers originate from a gaumukha spout.', badge: 'Sacred Origin' },
      { name: 'Mapro Garden', description: 'Famous agro-tourism complex with lush strawberry farms, artisan wood-fired pizzas, and gourmet fruit jams.', badge: 'Culinary Stop' }
    ],
    thingsToDo: [
      'Pick fresh organic strawberries straight from the farm beds between December and March.',
      'Catch the golden sunset at Wilson Point (Sunrise Point) and Lodwick Point.',
      'Row a wooden boat across the tranquil waters of Venna Lake in the cool evening mist.',
      'Trek up the ramparts of Pratapgad Fort to view the Bhavani Temple and Afzal Khan’s tomb.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to May',
      description: 'Pleasant days (18°C–25°C) and chilly nights (10°C–14°C). The strawberry season peaks between December and March.',
      monsoonTip: 'Mahabaleshwar receives over 5,000 mm of annual rainfall from June to September. Waterfalls are spectacular, but dense fog limits valley visibility.',
      winterTip: 'Winter is peak season: crisp mountain breezes, crystal clear skies, and sweet strawberries.'
    },
    estimatedDuration: '2 to 3 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'Pune Airport (125 km) is the nearest airport with frequent taxi and bus connections.',
      rail: 'Wathar (60 km) or Pune Junction (120 km) are the most convenient railheads.',
      road: 'Well-connected by luxury state buses and private cars via NH 48 from Pune (3 hrs) and Mumbai (5.5 hrs).'
    },
    suggestedItinerary: [
      { day: 1, title: 'Viewpoints & Lakeside Relaxation', activities: ['Arrival and check-in', 'Visit Arthur\'s Seat and Lodwick Point', 'Afternoon at Old Mahabaleshwar Panchganga temple', 'Sunset boating at Venna Lake'] },
      { day: 2, title: 'Pratapgad Fort & Strawberry Trails', activities: ['Morning excursion to historic Pratapgad Fort', 'Tour through strawberry farms in Panchgani', 'Lunch and fresh strawberry cream at Mapro Garden', 'Evening walk through Mahabaleshwar market'] }
    ],
    localFoodRecommendations: [
      { name: 'Fresh Strawberries with Whipped Cream', description: 'Thick farm-fresh clotted cream layered generously over sweet handpicked Mahabaleshwar strawberries.', vegetarian: true, mustTryLocation: 'Mapro Garden or Bagicha Corner' },
      { name: 'Corn Pattice & Roasted Bhutta', description: 'Crispy deep-fried sweet corn patties served with mint chutney beside Venna Lake.', vegetarian: true, mustTryLocation: 'Venna Lake food stalls' },
      { name: 'Chana & Fudge from Panchgani', description: 'Warm walnut choco-fudge and roasted spiced chickpeas from Cooper’s and Roaches.', vegetarian: true, mustTryLocation: 'Cooper’s Fudge, Panchgani' }
    ],
    nearbyDestinations: [
      { name: 'Panchgani', slug: 'mahabaleshwar', distance: '19 km' },
      { name: 'Kaas Plateau', slug: 'kaas-plateau', distance: '40 km' },
      { name: 'Raigad Fort', slug: 'raigad-fort', distance: '70 km' }
    ],
    travelTips: [
      'Book accommodation in advance during the December–January holiday season and Strawberry Festival weekends.',
      'Exercise caution at cliff viewpoints; avoid crossing safety railings for photographs.',
      'Beware of playful macaques near popular viewpoints like Arthur\'s Seat and Lodwick Point.'
    ],
    coordinates: { lat: 17.9237, lng: 73.6586 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'lonavala-and-khandala',
    slug: 'lonavala-and-khandala',
    name: 'Lonavala & Khandala',
    marathiName: 'लोणावळा आणि खंडाळा',
    tagline: 'Twin Jewel Hill Stations of the Sahyadris',
    category: 'Hill Station',
    region: 'Western Maharashtra',
    district: 'Pune',
    heroImage: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Sahyadri Cascades',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1000&q=80', caption: 'Lush waterfalls spilling down Sahyadri slopes', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80', caption: 'Rajmachi fort trekking trail ridge', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80', caption: 'Ancient rock-cut Buddhist chaitya at Karla Caves', credit: 'Unsplash' }
    ],
    shortDescription: 'Perched midway between Mumbai and Pune, these twin hill stations are renowned for misty gorges, ancient Buddhist caves, roaring monsoon waterfalls, and traditional peanut chikki.',
    overview: [
      'Nestled at an elevation of 622 meters in the Sahyadri range, Lonavala and Khandala have long served as the quintessential weekend haven for city dwellers seeking crisp mountain air and dramatic natural landscapes. The region is sliced by deep gorges and crowned with historic fortifications.',
      'Beyond their famous monsoon waterfalls, Lonavala and Khandala are home to extraordinary archaeological treasures: the 2nd-century BCE Karla and Bhaja Caves, which contain some of India\'s finest rock-cut Buddhist Chaitya halls. The bustling town market is world-famous for its brittle, jaggery-infused chikki confectionery.'
    ],
    highlights: ['Tiger’s Leap (Waghdari) Cliff', '2nd Century Karla & Bhaja Buddhist Caves', 'Bhushi Dam Cascades', 'Rajmachi Fort Trek', 'Traditional Maganlal Chikki'],
    topAttractions: [
      { name: 'Karla and Bhaja Caves', description: 'Ancient Buddhist rock-cut monasteries with high arched teak-ribbed ceilings and ornate animal-pillar capitals.', badge: 'Ancient Heritage' },
      { name: 'Tiger’s Leap', description: 'Dramatic cliff with a sheer drop of over 650 meters resembling a leaping tiger, providing sweeping valley views.', badge: 'Viewpoint' },
      { name: 'Bhushi Dam', description: 'Popular monsoon hotspot where overflow waters cascade down stepped masonry into natural splash pools.', badge: 'Monsoon Favorite' },
      { name: 'Lohagad & Visapur Forts', description: 'Twin hill citadels with the famous Vinchukata (scorpion\'s tail) fortified promontory.', badge: 'Trekking Fortress' }
    ],
    thingsToDo: [
      'Trek to Lohagad Fort in the monsoon amidst swirling clouds and gushing streams.',
      'Explore the ancient vaulted prayer hall at Karla Caves, one of the largest in Asia.',
      'Sample warm jaggery and crushed peanut chikki along with crunchy fudge.',
      'Drive along the picturesque Khandala Ghat scenic lookouts at sunset.'
    ],
    bestTimeToVisit: {
      idealMonths: 'July to March',
      description: 'July to September is peak monsoon season with roaring waterfalls; October to March is cool, sunny, and pleasant.',
      monsoonTip: 'Weekends during monsoon see heavy expressway traffic; visit on weekdays for quiet trails.',
      winterTip: 'Pleasant daytime temps (24°C) make winter ideal for cave exploration and long fort treks.'
    },
    estimatedDuration: '2 Days',
    budgetLevel: 'Budget',
    howToReach: {
      air: 'Pune Airport (65 km) and Mumbai International Airport (90 km).',
      rail: 'Lonavala Railway Station is a major stop on the Central Railway Mumbai-Pune corridor.',
      road: 'Directly on the Mumbai-Pune Expressway; 2 hours from Mumbai and 1.5 hours from Pune.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Caves & Cascades', activities: ['Morning visit to Karla Caves', 'Stop at Bhushi Dam or Lion\'s Point for valley views', 'Sample fresh hot vada pav and masala chai', 'Evening stroll and chikki shopping in main bazaar'] },
      { day: 2, title: 'Fort Treks & Valley Vistas', activities: ['Trek to Lohagad Fort via Malavli', 'Explore the historic stepwells and fortified bastion', 'Stop at Duke\'s Nose viewpoint in Khandala', 'Return journey along scenic ghats'] }
    ],
    localFoodRecommendations: [
      { name: 'Authentic Lonavala Chikki', description: 'Traditional crunchy brittle made of roasted groundnuts, sesame seeds, cashews, and pure organic jaggery.', vegetarian: true, mustTryLocation: 'Maganlal Chikki, MG Road' },
      { name: 'Hot Bhutta with Spiced Lime', description: 'Charcoal-roasted sweet corn brushed with rock salt, red chili powder, and fresh lime juice.', vegetarian: true, mustTryLocation: 'Lion\'s Point viewpoint stalls' }
    ],
    nearbyDestinations: [
      { name: 'Matheran', slug: 'matheran', distance: '45 km' },
      { name: 'Pune', slug: 'pune', distance: '65 km' },
      { name: 'Alibaug', slug: 'alibaug', distance: '75 km' }
    ],
    travelTips: [
      'Wear sturdy shoes with rubber grip when trekking on wet basalt rock around forts.',
      'Check water depth and currents before stepping into waterfalls or streams during monsoon.'
    ],
    coordinates: { lat: 18.7557, lng: 73.4091 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'matheran',
    slug: 'matheran',
    name: 'Matheran',
    marathiName: 'माथेरान',
    tagline: 'Asia’s Only Automobile-Free Eco-Sensitive Hill Station',
    category: 'Hill Station',
    region: 'Western Maharashtra',
    district: 'Raigad',
    heroImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Forest Trails Matheran',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80', caption: 'Red mud canopy trails winding through dense forests', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80', caption: 'Charlotte Lake tranquil reservoir amid misty morning', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80', caption: 'Valley drop from Panorama Point', credit: 'Unsplash' }
    ],
    shortDescription: 'Tucked away at an elevation of 800 meters, Matheran is declared an eco-sensitive zone where no motorized vehicles are permitted, preserving tranquil red-clay trails and clean mountain air.',
    overview: [
      'Discovered in 1850 by Hugh Poyntz Malet, the Collector of Thane, Matheran (meaning "Forest on the Forehead of the Mountains") holds the unique distinction of being Asia’s only vehicle-free hill station. All motorized transport stops at Dasturi Point, after which visitors travel exclusively on foot, horseback, or hand-pulled rickshaws.',
      'The hill station is famous for its narrow-gauge heritage Toy Train, which snakes through 21 kilometers of steep ghats from Neral. With 38 designated lookout points, shady canopy walks under ancient jambul trees, and the serene Charlotte Lake, Matheran offers unmatched quietude and colonial nostalgic charm.'
    ],
    highlights: ['100% Automobile-Free Environment', 'UNESCO Tentative Heritage Toy Train', 'Charlotte Lake & Pisarnath Temple', 'Panorama Point 360-degree Vistas', 'Handmade Leather Goods & Honey'],
    topAttractions: [
      { name: 'Panorama Point', description: 'Offers an unparalleled 360-degree sunrise view stretching as far as Mumbai’s skyline and Prabalgad fort on clear mornings.', badge: 'Sunrise Vista' },
      { name: 'Charlotte Lake', description: 'The main freshwater reservoir of Matheran, surrounded by dense jungle, birdlife, and the historic Pisarnath Temple.', badge: 'Tranquil Reservoir' },
      { name: 'Louisa Point & Echo Point', description: 'Dramatic cliff overlooks with natural acoustic echoes and sunset vistas over Prabal Fort.', badge: 'Sunset Overlook' },
      { name: 'Matheran Toy Train', description: 'Historic 1907 narrow-gauge railway clambering up emerald horseshoe loops from Neral station.', badge: 'Heritage Rail' }
    ],
    thingsToDo: [
      'Walk along the crimson laterite pathways shaded by towering ficus and silver oak trees.',
      'Rent a horse or hike early in the morning to Panorama Point to watch the sunrise above the cloud bank.',
      'Sip fresh kokum sherbet and herbal tea beside Charlotte Lake.',
      'Shop for handcrafted Kolhapuri leather sandals, dried fruit chikki, and pure forest honey in the bazaar.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to May',
      description: 'Pleasant temperatures year-round. Post-monsoon (September–November) is vibrant green with crystal-clear air.',
      monsoonTip: 'Monsoon brings heavy mists and leeches on unpaved trails; the toy train service may be suspended during heavy rain.',
      winterTip: 'Winter days are sunny (22°C) and nights are chilly (13°C), creating ideal walking conditions.'
    },
    estimatedDuration: '2 Days',
    budgetLevel: 'Budget',
    howToReach: {
      air: 'Mumbai International Airport is 90 km away.',
      rail: 'Neral Junction connects to Mumbai Central and suburban railway lines. From Neral, take the Toy Train or shared cab to Dasturi Point.',
      road: 'Vehicles must park at Dasturi Car Park (8 km from Neral). From Dasturi, walk 3 km or hire a horse/hand-rickshaw.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Arrival & Forest Walks', activities: ['Arrive at Dasturi Point and walk along the scenic toy train tracks into town', 'Check-in and rest', 'Afternoon walk to Charlotte Lake and Lord Point', 'Watch the sunset at Louisa Point'] },
      { day: 2, title: 'Sunrise & Heritage Stroll', activities: ['Early morning trek or horse ride to Panorama Point for sunrise', 'Breakfast of poha and chai in the car-free bazaar', 'Visit Echo Point and King George Point', 'Browse leather crafts and depart'] }
    ],
    localFoodRecommendations: [
      { name: 'Pure Forest Wild Honey', description: 'Raw, unpasteurized honey harvested by local tribal collectors from Sahyadri tree combs.', vegetarian: true, mustTryLocation: 'Local Tribal Cooperative stores' },
      { name: 'Kanda Poha & Solkadhi', description: 'Flattened rice tossed with caramelized onions, peanuts, mustard seeds, and fresh grated coconut.', vegetarian: true, mustTryLocation: 'Street cafes near Matheran Station' }
    ],
    nearbyDestinations: [
      { name: 'Lonavala', slug: 'lonavala-and-khandala', distance: '45 km' },
      { name: 'Mumbai', slug: 'mumbai', distance: '85 km' },
      { name: 'Raigad Fort', slug: 'raigad-fort', distance: '110 km' }
    ],
    travelTips: [
      'Comfortable walking shoes with good traction are essential for red gravel and laterite stone paths.',
      'Keep food items inside backpacks; monkeys at viewpoints are known to snatch bags and loose snacks.'
    ],
    coordinates: { lat: 18.9868, lng: 73.2683 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'alibaug',
    slug: 'alibaug',
    name: 'Alibaug',
    marathiName: 'अलिबाग',
    tagline: 'Coastal Haven of Sea Forts & Coconut Palms',
    category: 'Beach',
    region: 'Konkan',
    district: 'Raigad',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Konkan Beach',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80', caption: 'Golden sandy beaches lined with casuarina trees', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80', caption: 'Waves crashing against ancient coastal rocks', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80', caption: 'Arabian sea twilight in coastal Raigad', credit: 'Unsplash' }
    ],
    shortDescription: 'Just a short catamaran ride from Mumbai, Alibaug features historic 17th-century sea fortifications, black-sand beaches, betel nut plantations, and savory Konkani seafood feasts.',
    overview: [
      'Alibaug, developed by the Maratha naval commander Sarkhel Kanhoji Angre in the late 17th century, is one of the most accessible coastal retreats on India\'s western seaboard. Named after Ali, a benevolent Bene Israel merchant who planted expansive gardens here, the town retains its tranquil coastal rhythm.',
      'The town is famous for Kolaba Fort, a formidable sea fortress standing 1 to 2 kilometers into the Arabian Sea, accessible on foot or by horse-cart during low tide. With pristine neighboring beaches like Varsoli, Nagaon, Kihim, and Kashid, Alibaug caters to heritage lovers and water sports enthusiasts alike.'
    ],
    highlights: ['Kolaba Sea Fort Low-Tide Walk', 'Kashid White Sand Beach', 'Authentic Malvani Fish Thali', 'Water Sports at Nagaon Beach', 'Murud-Janjira Sea Fortress Excursion'],
    topAttractions: [
      { name: 'Kolaba Fort', description: '300-year-old Maratha sea fort built by Chhatrapati Shivaji Maharaj with ancient freshwater wells in the midst of saline sea.', badge: 'Sea Citadel' },
      { name: 'Kashid Beach', description: 'Famous for its fine silver-white sand, clear Arabian waves, and casuarina groves, 30 km south of Alibaug.', badge: 'Pristine Beach' },
      { name: 'Murud-Janjira Fort', description: 'An impregnable 15th-century island fortress with 19 intact rounded bastions that remained undefeated in naval warfare.', badge: 'Island Fortress' },
      { name: 'Kihim Beach', description: 'A serene beach fringed with coconut palms, wild orchids, and butterfly habitats.', badge: 'Quiet Escape' }
    ],
    thingsToDo: [
      'Walk through the receding tide to explore the bastions and cannon emplacements of Kolaba Fort.',
      'Take a motorized ferry from Rajapuri jetty to explore the majestic water-bound Murud-Janjira citadel.',
      'Indulge in a homemade Konkani Surmai and Prawns thali at a local coastal home-dining eatery.',
      'Enjoy parasailing, jet-skiing, and banana boat rides along the gentle surf of Nagaon Beach.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to April',
      description: 'Pleasant coastal breeze, calm sea conditions for ferry travel, and clear blue skies.',
      monsoonTip: 'June to September brings rough seas; sea ferries from Mumbai are suspended, but lush green coastal drives via road remain open.',
      winterTip: 'November to February is ideal for beach walks, water sports, and seaside camping under the stars.'
    },
    estimatedDuration: '2 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'Mumbai International Airport (100 km by road, or 1 hr via ferry from Gateway of India).',
      rail: 'Pen railway station (30 km) is the closest railhead on the Konkan Railway.',
      road: 'Regular speedboats, catamarans, and Ro-Ro car ferries operate from Gateway of India / Bhaucha Dhakka to Mandwa Jetty (45 mins).'
    },
    suggestedItinerary: [
      { day: 1, title: 'Sea Forts & Beachside Sunset', activities: ['Ferry from Gateway of India to Mandwa', 'Check into beach resort in Alibaug or Nagaon', 'Check tide table and walk to Kolaba Fort', 'Seafood lunch of fried pomfret and solkadhi', 'Sunset at Varsoli beach'] },
      { day: 2, title: 'Murud-Janjira & Kashid Sands', activities: ['Scenic morning drive down the coast to Kashid Beach', 'Continue to Rajapuri jetty for Murud-Janjira sea fort', 'Browse local white onion garlands and coconut chikki', 'Evening return ferry to Mumbai'] }
    ],
    localFoodRecommendations: [
      { name: 'Surmai Fry & Kolambi Masala Thali', description: 'Fresh kingfish slice shallow-fried in semolina coating, served with spicy prawn curry, bhakri, and solkadhi.', vegetarian: false, mustTryLocation: 'Sanman Restaurant or Hotel Wave' },
      { name: 'Solkadhi', description: 'Refreshing pink digestive beverage made from freshly pressed coconut milk, tangy dried kokum fruit, green chili, and garlic.', vegetarian: true, mustTryLocation: 'Traditional Konkani home kitchens' },
      { name: 'Alibaug Sweet White Onions', description: 'Mild, sweet GI-tagged white onions celebrated for their crisp texture and medicinal cooling properties.', vegetarian: true, mustTryLocation: 'Local roadside farmer stalls' }
    ],
    nearbyDestinations: [
      { name: 'Mumbai', slug: 'mumbai', distance: '1 hour via Ro-Ro ferry' },
      { name: 'Raigad Fort', slug: 'raigad-fort', distance: '90 km' },
      { name: 'Ratnagiri', slug: 'ratnagiri', distance: '220 km' }
    ],
    travelTips: [
      'Always verify sea tide timings with locals before walking to Kolaba Fort to avoid being stranded by the incoming tide.',
      'Book Ro-Ro (M2M) vehicle ferry tickets online in advance on weekends to transport cars effortlessly across Mumbai harbor.'
    ],
    coordinates: { lat: 18.6414, lng: 72.8722 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'ratnagiri',
    slug: 'ratnagiri',
    name: 'Ratnagiri',
    marathiName: 'रत्नागिरी',
    tagline: 'Home of Alphonso Mangoes, Jaigad & Coastal Castles',
    category: 'Beach',
    region: 'Konkan',
    district: 'Ratnagiri',
    heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Ratnagiri Shoreline',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80', caption: 'Pristine Konkan coastline and rocky promontories', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80', caption: 'Ganpatipule white sand temple beach', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80', caption: 'Historic temple architecture of the Konkan coast', credit: 'Unsplash' }
    ],
    shortDescription: 'The heart of Konkan, Ratnagiri is famed for the heavenly Hapus (Alphonso) mango orchards, the ocean-facing Ganpatipule temple, Thibaw Palace, and secluded cliffside fortresses.',
    overview: [
      'Cradled between the Sahyadri mountains and the Arabian Sea, Ratnagiri is celebrated for its lush orchards that produce the world-famous Alphonso (Hapus) mango. The town holds deep historical significance as the place where King Thibaw of Burma spent his exile, leaving behind the evocative Thibaw Palace built with red laterite stone.',
      'Just 25 kilometers north lies the coastal pilgrimage town of Ganpatipule, revered for its 400-year-old self-manifested (Swayambhu) Ganpati temple resting right on the pristine beach. Further along the coastline stand Jaigad Fort, the Ratnadurg lighthouse, and tranquil fishing estuaries.'
    ],
    highlights: ['World-Famous Alphonso (Hapus) Mango Orchards', 'Ganpatipule Beach Temple', 'Ratnadurg Fort & Lighthouse', 'Thibaw Palace of Burmese Royalty', 'Are Ware Scenic Coastal Drive'],
    topAttractions: [
      { name: 'Swayambhu Ganpati Temple Ganpatipule', description: 'Ancient beachside shrine where pilgrims perform pradakshina around the scenic hill adjoining the white sands.', badge: 'Spiritual Beach' },
      { name: 'Ratnadurg (Bhagwati) Fort', description: 'Horseshoe-shaped coastal bastion offering sweeping 360-degree vistas of the crashing Arabian Sea and lighthouse.', badge: 'Coastal Bastion' },
      { name: 'Thibaw Palace', description: 'Three-story sloping-roofed red laterite palace built in 1910 for Burma\'s exiled royal family.', badge: 'Royal History' },
      { name: 'Jaigad Fort & Lighthouse', description: '16th-century fortress situated at the mouth of Shastri River estuary overlooking blue coastal waters.', badge: 'Estuary View' },
      { name: 'Aare Ware Twin Beaches', description: 'Breathtaking virgin beaches separated by a high winding cliff road reminiscent of the Amalfi Coast.', badge: 'Scenic Drive' }
    ],
    thingsToDo: [
      'Drive along the picturesque Aare-Ware coastal road with panoramic blue ocean views.',
      'Offer prayers at Ganpatipule Temple and take a tranquil sunset stroll along the beach.',
      'Visit local orchards during March–May to taste ripe Alphonso mangoes directly from growers.',
      'Explore the ancient ramparts and underground water tunnels of Ratnadurg Fort.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to March',
      description: 'Pleasant temperatures and clear skies. March to May is mango harvest season.',
      monsoonTip: 'Monsoon (June to September) wraps the Konkan in wild greens, but sea swimming is strictly prohibited due to strong rip tides.',
      winterTip: 'Cool sea breezes and mild sunshine make November to February the most comfortable period.'
    },
    estimatedDuration: '3 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'New Chhatrapati Sambhaji Raje Airport / Goa Dabolim / MOPA (200 km).',
      rail: 'Ratnagiri is a major halt on the world-class Konkan Railway with express trains from Mumbai, Goa, and Kerala.',
      road: '330 km from Mumbai via NH 66 (Mumbai-Goa Highway); 300 km from Pune via Karad-Chiplun ghats.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Ratnagiri Town & Royal Exile', activities: ['Arrival via scenic Konkan Railway', 'Visit Thibaw Palace and Thibaw Point', 'Explore Ratnadurg Fort and lighthouse at sunset', 'Dinner of fresh Pomfret Rawa Fry'] },
      { day: 2, title: 'Ganpatipule & Aare-Ware Coast', activities: ['Drive through the cliffside curves of Aare-Ware', 'Visit Swayambhu Ganpati temple', 'Relax on Ganpatipule beach', 'Sample Modak and Solkadhi'] },
      { day: 3, title: 'Jaigad & Mango Orchards', activities: ['Tour Jaigad Fort and the British-era lighthouse', 'Visit an Alphonso mango packaging farm', 'Buy authentic mango pulp and cashews before departure'] }
    ],
    localFoodRecommendations: [
      { name: 'Alphonso Mango & Aamras Puri', description: 'Rich golden mango puree made from naturally ripened Ratnagiri Hapus, served with hot puffed wheat puris.', vegetarian: true, mustTryLocation: 'Local orchards & family restaurants (seasonal)' },
      { name: 'Kombdi Vade (Malvani Chicken)', description: 'Spicy rustic chicken curry simmered with roasted coconut gravy, paired with multigrain puffed puris (vade).', vegetarian: false, mustTryLocation: 'Hotel Amantran, Ratnagiri' },
      { name: 'Ukdiche Modak', description: 'Steamed rice flour dumplings filled with fresh grated coconut, cardamom, and organic jaggery, drizzled with pure ghee.', vegetarian: true, mustTryLocation: 'Ganpatipule temple prasad counters' }
    ],
    nearbyDestinations: [
      { name: 'Tarkarli', slug: 'tarkarli', distance: '145 km' },
      { name: 'Alibaug', slug: 'alibaug', distance: '220 km' },
      { name: 'Mahabaleshwar', slug: 'mahabaleshwar', distance: '180 km' }
    ],
    travelTips: [
      'When buying Alphonso mangoes, look for GI-certified tags to avoid artificially ripened counterfeits.',
      'Avoid swimming during rough seas; respect lifeguard warning flags posted on the beaches.'
    ],
    coordinates: { lat: 16.9902, lng: 73.3120 },
    popular: true,
    featuredOnHome: false
  },
  {
    id: 'tarkarli',
    slug: 'tarkarli',
    name: 'Tarkarli',
    marathiName: 'तारकर्ली',
    tagline: 'Scuba Diving, Turquoise Waters & Sindhudurg Fort',
    category: 'Beach',
    region: 'Konkan',
    district: 'Sindhudurg',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Clear Coral Waters Tarkarli',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80', caption: 'Crystal turquoise waters and coral reefs', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80', caption: 'Long white sands along Karli River estuary', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b271?auto=format&fit=crop&w=1000&q=80', caption: 'Traditional fishing boats at Malvan harbor', credit: 'Unsplash' }
    ],
    shortDescription: 'Renowned as the scuba diving and water-sports capital of Maharashtra, Tarkarli offers crystalline waters, serene backwaters along the Karli River, and the mighty Sindhudurg sea fort.',
    overview: [
      'Situated at the southern tip of Maharashtra\'s Konkan coastline near Malvan, Tarkarli is blessed with crystal-clear turquoise waters where underwater visibility can reach up to 20 feet on calm days. It is home to Maharashtra\'s first premier Scuba Diving Institute (IISDA).',
      'Standing watch over the bay is Sindhudurg Fort, constructed between 1664 and 1667 by Chhatrapati Shivaji Maharaj using lead molten foundation joints. Tarkarli is also famed for its backwaters along the Karli River, offering romantic houseboat stays, dolphin spotting safaris, and legendary fiery Malvani cuisine.'
    ],
    highlights: ['Scuba Diving & Coral Reef Snorkeling', 'Sindhudurg Sea Fort Boat Excursion', 'Karli River Backwater Houseboat Cruise', 'Tsunami Island Water Sports', 'Authentic Malvani Crab & Fish Thali'],
    topAttractions: [
      { name: 'Sindhudurg Fort', description: 'Massive 48-acre island fort with 3 km of ramparts, housing the only temple in the world with an idol of Shivaji Maharaj.', badge: 'Naval Wonder' },
      { name: 'Tarkarli Beach & Karli Estuary', description: 'Wide sweep of fine sand where Karli River flows into the Arabian Sea, flanked by coconut groves.', badge: 'Pristine Beach' },
      { name: 'Tsunami Island', description: 'A natural sandy island formed in the backwaters, ideal for jet-skiing, kayaking, and banana boat rides.', badge: 'Water Sports' },
      { name: 'Devbagh Beach', description: 'A narrow peninsula of land surrounded by the sea on one side and the river on the other, popular for dolphin boat tours.', badge: 'Dolphin Safari' }
    ],
    thingsToDo: [
      'Go for an introductory PADI-guided scuba dive near Sindhudurg Fort to observe brain corals and tropical fish.',
      'Take a country boat to spot playful Indo-Pacific humpback dolphins at the Karli river mouth.',
      'Savor an authentic Malvani feast with freshly caught crab, pomfret, and sour kokum curry.',
      'Cruise through the palm-fringed backwaters on a traditional wooden houseboat.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to May',
      description: 'Clear waters and calm sea swells ideal for underwater diving and water sports.',
      monsoonTip: 'Scuba diving and sea ferries are closed from June to September due to choppy sea conditions.',
      winterTip: 'November to February is the pinnacle season with water visibility at its clearest.'
    },
    estimatedDuration: '3 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'Sindhudurg Airport at Chipi (20 km) has flights from Mumbai. Goa MOPA Airport is 70 km away.',
      rail: 'Kudal or Kankavli railway stations on the Konkan Railway are 35–45 km away with frequent taxis.',
      road: '500 km from Mumbai and 380 km from Pune via Kolhapur and Gaganbawda Ghat.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Sindhudurg Fort & Seafood', activities: ['Arrive via Chipi Airport or Kudal station', 'Ferry to Sindhudurg Fort; explore Shivaji temple and footprint carvings', 'Lunch at Malvan market', 'Sunset walk on Tarkarli Beach'] },
      { day: 2, title: 'Scuba & Tsunami Island', activities: ['Morning scuba diving session with certified divemasters', 'Head to Tsunami Island for water sports and fresh tender coconut water', 'Evening sunset cruise on Karli backwaters'] },
      { day: 3, title: 'Dolphins & Devbagh', activities: ['Early morning dolphin spotting boat trip at Devbagh Sangam', 'Buy locally prepared Malvani masala and cashews', 'Departure'] }
    ],
    localFoodRecommendations: [
      { name: 'Malvani Crab Curry & Wade', description: 'Fresh mud crabs simmered in a dark toasted coconut and coriander seed gravy, accompanied by puffed multigrain vade.', vegetarian: false, mustTryLocation: 'Atithi Bamboo, Malvan' },
      { name: 'Tisrya Masala (Clams Sukka)', description: 'Local clams cooked with freshly grated coconut, Malvani bottle masala, and sour dried kokum.', vegetarian: false, mustTryLocation: 'Chaitanya Restaurant, Malvan' },
      { name: 'Solkadhi & Ghavane', description: 'Lacy soft rice crepes paired with tangy coconut-kokum digestive beverage.', vegetarian: true, mustTryLocation: 'Local Malvani homestays' }
    ],
    nearbyDestinations: [
      { name: 'Ratnagiri', slug: 'ratnagiri', distance: '145 km' },
      { name: 'Goa', slug: 'tarkarli', distance: '85 km' },
      { name: 'Kolhapur', slug: 'pune', distance: '160 km' }
    ],
    travelTips: [
      'Choose certified diving operators with certified PADI/SSI divemasters; ensure life jackets are worn on all boat rides.',
      'Carry cash as digital payment connectivity can be intermittent in smaller fishing hamlets.'
    ],
    coordinates: { lat: 16.0350, lng: 73.4912 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'nashik',
    slug: 'nashik',
    name: 'Nashik',
    marathiName: 'नाशिक',
    tagline: 'Wine Capital of India & Sacred Pilgrimage on Godavari',
    category: 'Spiritual',
    region: 'Khandesh',
    district: 'Nashik',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Temples on Godavari Ghats',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80', caption: 'Panchavati Godavari holy river ghats and temples', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80', caption: 'Scenic rolling vineyards in Dindori Valley', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80', caption: 'Pandavleni 2nd-century BCE rock-cut caves', credit: 'Unsplash' }
    ],
    shortDescription: 'A captivating blend of sacred mythology and contemporary viticulture, Nashik hosts the ancient Kumbh Mela on the Godavari ghats alongside India\'s premier wine estates.',
    overview: [
      'Located on the banks of the sacred Godavari River, Nashik is deeply entwined with the epic Ramayana. Here, at Panchavati, Lord Rama, Sita, and Lakshmana are believed to have lived during their exile. The city is home to Trimbakeshwar, one of the 12 sacred Jyotirlingas, situated at the base of the Brahmagiri hills.',
      'In recent decades, Nashik has blossomed into the "Wine Capital of India," producing over two-thirds of the country\'s premium wines. Dotted across the scenic rolling valleys are internationally renowned vineyards like Sula, York, and Chandon, offering cellar tours, wine tastings, and vineyard stays.'
    ],
    highlights: ['Trimbakeshwar Jyotirlinga Temple', 'Vineyard Tours & Wine Tasting at Sula & York', 'Panchavati & Ramkund Ghats', 'Pandavleni Ancient Rock-Cut Buddhist Caves', 'Misal Pav Capital of Maharashtra'],
    topAttractions: [
      { name: 'Trimbakeshwar Temple', description: 'Sacred Jyotirlinga temple built with black stone featuring three lingas representing Brahma, Vishnu, and Shiva.', badge: 'Sacred Jyotirlinga' },
      { name: 'Sula Vineyards', description: 'Pioneering estate offering guided grape-to-glass winery tours, barrel room tastings, and amphitheater views.', badge: 'Wine Capital' },
      { name: 'Ramkund & Panchavati', description: 'Sacred bathing ghats where thousands congregate during the holy Kumbh Mela festival every 12 years.', badge: 'Sacred River' },
      { name: 'Pandavleni Caves', description: '24 rock-cut Buddhist caves carved between the 2nd century BCE and 5th century CE overlooking the highway.', badge: 'Rock-Cut Art' },
      { name: 'Kalaram Temple', description: 'Historic 18th-century temple carved entirely from black stone with a 2-meter tall black idol of Lord Rama.', badge: 'Historic Temple' }
    ],
    thingsToDo: [
      'Take a guided wine-tasting masterclass overlooking Gangapur Dam at sunset.',
      'Witness the evening Godavari Maha Aarti at Ramkund amid chanting and brass bells.',
      'Trek up the 300 stone steps to Pandavleni Caves for ancient inscriptions and panoramic valley views.',
      'Embark on an early morning spiritual journey to Trimbakeshwar temple at the foot of Brahmagiri.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to March',
      description: 'Pleasant winter season with temperatures between 12°C and 28°C. Grape harvest and stomping season runs from January to March.',
      monsoonTip: 'Monsoon (July to September) brings dramatic lush green hills around Brahmagiri and roaring Dugarwadi waterfalls.',
      winterTip: 'Ideal weather for vineyard tours, al fresco dining, and temple darshans.'
    },
    estimatedDuration: '2 to 3 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'Ozar Airport (Nashik) has domestic connections; Mumbai International Airport is 165 km away.',
      rail: 'Nashik Road Railway Station is a major stop on the Central Railway with regular express trains to Mumbai and Delhi.',
      road: '3.5 hours drive from Mumbai (165 km) via NH 160 across the scenic Kasara Ghat.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Sacred Panchavati & Trimbakeshwar', activities: ['Early morning visit to Trimbakeshwar Jyotirlinga', 'Breakfast of famous Nashik Misal Pav', 'Explore Panchavati, Kalaram Temple, and Sita Gumpha', 'Evening aarti at Ramkund on the Godavari'] },
      { day: 2, title: 'Vineyard Trails & Ancient Caves', activities: ['Climb up to Pandavleni Caves in the morning', 'Head to Gangapur road for guided wine tour and tasting at Sula or York', 'Sunset dinner overlooking Gangapur lake waters'] }
    ],
    localFoodRecommendations: [
      { name: 'Nashik Misal Pav', description: 'Extremely flavorful sprouted moth curry served with thick farsan, chopped onions, lime, and fiery tarri (red chili oil broth).', vegetarian: true, mustTryLocation: 'Sadhana Chulivarchi Misal or Shamsundar' },
      { name: 'Sabudana Khichdi & Vada', description: 'Fluffy tapioca pearls tossed with roasted crushed peanuts, green chilies, and cumin, served with sweet curd.', vegetarian: true, mustTryLocation: 'Sayantara, Bhadrakali' }
    ],
    nearbyDestinations: [
      { name: 'Bhandardara', slug: 'bhandardara', distance: '70 km' },
      { name: 'Shirdi', slug: 'nashik', distance: '85 km' },
      { name: 'Mumbai', slug: 'mumbai', distance: '165 km' }
    ],
    travelTips: [
      'Dress modestly in traditional Indian attire when visiting Trimbakeshwar and Kalaram temples.',
      'Advance booking is recommended for weekend vineyard tours during the winter harvest months.'
    ],
    coordinates: { lat: 19.9975, lng: 73.7898 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'chhatrapati-sambhajinagar',
    slug: 'chhatrapati-sambhajinagar',
    name: 'Chhatrapati Sambhajinagar',
    marathiName: 'छत्रपती संभाजीनगर',
    tagline: 'City of Gates & Gateway to World Heritage Caves',
    category: 'Heritage',
    region: 'Marathwada',
    district: 'Chhatrapati Sambhajinagar',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Bibi Ka Maqbara',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=1000&q=80', caption: 'Bibi Ka Maqbara iconic marble mausoleum', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80', caption: 'Daulatabad Fort impenetrable hill citadel', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80', caption: 'Traditional Himroo and Paithani weaving heritage', credit: 'Unsplash' }
    ],
    shortDescription: 'Famed for its 52 historic gates, the Mughal-era Bibi Ka Maqbara, and the invincible Daulatabad fortress, this heritage hub serves as the gateway to Ajanta and Ellora caves.',
    overview: [
      'Chhatrapati Sambhajinagar (formerly Aurangabad) is a city steeped in medieval and ancient history. Founded in 1610 by Malik Ambar, the Prime Minister of Murtaza Nizam Shah II, the city is historically nicknamed the "City of Gates" due to its numerous monumental stone entryways.',
      'The city is renowned for Bibi Ka Maqbara, often dubbed the "Taj of the Deccan," built by Prince Azam Shah in memory of his mother Dilras Banu Begum. Nearby stands Daulatabad Fort, a medieval fortress with ingenious defensive mazes. The city is also world-renowned for its exquisite Himroo shawls and traditional handwoven Paithani silk sarees.'
    ],
    highlights: ['Bibi Ka Maqbara (Taj of the Deccan)', 'Daulatabad Fort & Dark Maze (Andhari)', 'Panchakki 17th Century Water Mill', 'Base for Ajanta & Ellora Caves', 'Handwoven Paithani Silk & Himroo Shawls'],
    topAttractions: [
      { name: 'Bibi Ka Maqbara', description: 'Stunning 17th-century marble mausoleum set in charbagh Mughal gardens with intricate stucco plasterwork.', badge: 'Mughal Wonder' },
      { name: 'Daulatabad (Devgiri) Fort', description: 'Colossal conical hill citadel with moats, iron spikes, and a dark subterranean passage designed to disorient attackers.', badge: 'Impregnable Citadel' },
      { name: 'Panchakki', description: 'Clever 17th-century medieval engineering marvel using water power channeled from 8 km away to grind grain.', badge: 'Medieval Science' },
      { name: 'Aurangabad Caves', description: '12 rock-cut Buddhist shrines dating from the 6th to 8th century carved into the Sihyachal range overlooking the city.', badge: 'Ancient Caves' }
    ],
    thingsToDo: [
      'Explore the pitch-black labyrinths of the Andhari passageway inside Daulatabad Fort with a local guide.',
      'Visit a traditional weaving workshop in Paithan or local cooperatives to watch silk artisans weave gold-threaded Paithani sarees.',
      'Photograph the symmetry of Bibi Ka Maqbara against the evening sky.',
      'Savor authentic Naan Qalia, a celebratory meat stew and bread dish dating to Tughlaq-era royal kitchens.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to March',
      description: 'Pleasant winter weather with daytime temperatures around 20°C–28°C and cool evenings.',
      summerTip: 'April and May are very hot (exceeding 40°C); carry plenty of water and wear sun protection.',
      winterTip: 'Ideal season for walking up Daulatabad Fort and exploring cave complexes.'
    },
    estimatedDuration: '2 to 3 Days',
    budgetLevel: 'Budget',
    howToReach: {
      air: 'Chhatrapati Sambhajinagar Airport (IXU) connects directly with Mumbai, Delhi, and Hyderabad.',
      rail: 'Chhatrapati Sambhajinagar Railway Station is well-connected to Mumbai, Pune, and Hyderabad.',
      road: 'Directly connected via the high-speed Hindu Hrudaysamrat Balasaheb Thackeray Samruddhi Mahamarg (super expressway).'
    },
    suggestedItinerary: [
      { day: 1, title: 'City of Gates & Daulatabad Citadel', activities: ['Morning exploration of Daulatabad Fort and Chand Minar', 'Visit Panchakki medieval water mill', 'Afternoon at Bibi Ka Maqbara', 'Evening shopping for Paithani silk sarees'] },
      { day: 2, title: 'Ellora Caves & Grishneshwar', activities: ['Excursion to Ellora Caves (30 km away)', 'Marvel at Kailasa Temple monolith', 'Visit sacred Grishneshwar Jyotirlinga temple'] }
    ],
    localFoodRecommendations: [
      { name: 'Naan Qalia', description: 'Slow-cooked spiced mutton stew infused with fragrant spices, paired with soft, tandoor-baked flatbread.', vegetarian: false, mustTryLocation: 'Buddi Lane eateries' },
      { name: 'Khandeshi Shev Bhaji', description: 'Spicy thick curry with crisp sev, cooked in aromatic dark kala masala.', vegetarian: true, mustTryLocation: 'Traditional thali joints' }
    ],
    nearbyDestinations: [
      { name: 'Ajanta & Ellora Caves', slug: 'ajanta-and-ellora-caves', distance: '30 km to Ellora, 100 km to Ajanta' },
      { name: 'Lonar Crater Lake', slug: 'lonar-crater-lake', distance: '140 km' },
      { name: 'Nashik', slug: 'nashik', distance: '180 km' }
    ],
    travelTips: [
      'Ellora Caves are closed on Tuesdays; Ajanta Caves are closed on Mondays. Plan your itinerary accordingly.',
      'Hire a licensed ASI guide at Daulatabad Fort and Kailasa Temple for profound architectural insights.'
    ],
    coordinates: { lat: 19.8762, lng: 75.3433 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'ajanta-and-ellora-caves',
    slug: 'ajanta-and-ellora-caves',
    name: 'Ajanta & Ellora Caves',
    marathiName: 'अजिंठा आणि वेरूळ लेणी',
    tagline: 'UNESCO Masterpieces of Ancient Rock-Cut Art',
    category: 'Heritage',
    region: 'Marathwada',
    district: 'Chhatrapati Sambhajinagar',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Kailasa Temple Ellora Cave 16',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80', caption: 'The monolithic Kailasa Temple (Cave 16) carved top-down from single basalt rock', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80', caption: 'Horse-shoe shaped gorge of Ajanta Buddhist Caves', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=1000&q=80', caption: 'Intricate rock sculpture of Ellora cave monasteries', credit: 'Unsplash' }
    ],
    shortDescription: 'Two of the greatest archaeological marvels on Earth: the Buddhist fresco-adorned caves of Ajanta and the monolithic wonder of Kailasa Temple at Ellora, both UNESCO World Heritage Sites.',
    overview: [
      'Carved into the sheer basalt cliffs of Maharashtra\'s Sahyadri hills, Ajanta and Ellora stand as supreme testaments to ancient Indian artistic genius and religious harmony. Together, they represent two of India\'s earliest UNESCO World Heritage Sites, designated in 1983.',
      'Ajanta consists of 30 Buddhist rock-cut monuments dating from the 2nd century BCE to the 5th century CE, carved in a dramatic horseshoe gorge along the Waghur River. The caves are world-famous for their delicate fresco paintings depicting the Jataka tales, rendered with natural mineral pigments.',
      'Ellora, located 100 km away, features 34 monolithic cave temples spanning Buddhist, Hindu, and Jain traditions. Its crown jewel is the Kailasa Temple (Cave 16), the largest monolithic rock excavation in the world, carved vertically from the top down out of an entire mountain cliff by the Rashtrakutas.'
    ],
    highlights: ['Monolithic Kailasa Temple (Cave 16, Ellora)', 'Ajanta Horseshoe Gorge & Buddhist Frescoes', 'Bodhisattva Padmapani Masterpiece Painting', 'Interfaith Harmony: Buddhist, Hindu & Jain Caves', 'Grishneshwar 12th Jyotirlinga Shrine Nearby'],
    topAttractions: [
      { name: 'Kailasa Temple (Cave 16, Ellora)', description: 'Chiseled top-to-bottom from a single basalt hill, removing an estimated 200,000 tons of rock over generations.', badge: 'Monolithic Miracle' },
      { name: 'Cave 1 (Ajanta)', description: 'Features the world-renowned fresco of Bodhisattva Padmapani holding a blue lotus with compassionate gaze.', badge: 'Frescoes Masterpiece' },
      { name: 'Cave 10 (Ellora - Vishwakarma)', description: 'The famous "Carpenter\'s Cave" with a vaulted ceiling ribbed to resemble wooden beams and a giant seated Buddha.', badge: 'Chaitya Hall' },
      { name: 'Cave 26 (Ajanta)', description: 'Magnificent prayer hall containing a monumental 7-meter-long reclining Buddha sculpture entering Mahaparinirvana.', badge: 'Monumental Carving' }
    ],
    thingsToDo: [
      'Stand in awe in the courtyard of Kailasa Temple and trace the multi-story carved elephant friezes.',
      'View the delicate tempera paintings in Ajanta with specialized low-heat non-flash lighting.',
      'Walk to the viewpoint on the opposite ridge of the Waghur River gorge to view all of Ajanta Caves in one panorama.',
      'Pay homage at Grishneshwar Jyotirlinga temple, located just 1 km from Ellora Caves.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to March',
      description: 'Pleasant winter weather is ideal for extensive walking across the cave complexes.',
      monsoonTip: 'Monsoon (July to September) creates majestic waterfalls spilling right over the cave mouths at both Ajanta and Ellora.',
      winterTip: 'Comfortable 18°C–26°C daytime temperatures; ideal light for exploring and photographing.'
    },
    estimatedDuration: '2 to 3 Days',
    budgetLevel: 'Moderate',
    howToReach: {
      air: 'Chhatrapati Sambhajinagar Airport (30 km to Ellora, 105 km to Ajanta).',
      rail: 'Chhatrapati Sambhajinagar Railway Station; Jalgaon Railway Station is closer for Ajanta (60 km).',
      road: 'Tourist buses and private taxis operate daily from Chhatrapati Sambhajinagar.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Ellora Caves & Kailasa Temple', activities: ['Morning departure to Ellora (30 mins from city)', 'Explore Caves 1 to 12 (Buddhist group)', 'Spend 3 hours exploring Kailasa Temple (Cave 16)', 'Visit Jain Caves 30–34', 'Darshan at Grishneshwar Jyotirlinga'] },
      { day: 2, title: 'Ajanta Caves Full Day Excursion', activities: ['Full-day excursion to Ajanta (100 km / 2.5 hrs)', 'Shuttle bus from T-Junction to cave foot', 'Explore Caves 1, 2, 9, 10, 16, 17, 19, and 26', 'Trek to the gorge viewpoint', 'Return to Sambhajinagar in evening'] }
    ],
    localFoodRecommendations: [
      { name: 'Pithla Bhakri & Thecha', description: 'Spiced gram flour curry served with jowar or bajra bhakri at rustic highway dhaba stops.', vegetarian: true, mustTryLocation: 'MTDC Restaurant, Ellora' },
      { name: 'Gavari Bhaji & Dal Batti', description: 'Cluster beans cooked in local spices paired with wheat bafla balls soaked in hot clarified butter.', vegetarian: true, mustTryLocation: 'Highway restaurants near Phulambri' }
    ],
    nearbyDestinations: [
      { name: 'Chhatrapati Sambhajinagar', slug: 'chhatrapati-sambhajinagar', distance: '30 km' },
      { name: 'Lonar Crater Lake', slug: 'lonar-crater-lake', distance: '140 km' },
      { name: 'Nashik', slug: 'nashik', distance: '180 km' }
    ],
    travelTips: [
      'Ajanta Caves are CLOSED on Mondays. Ellora Caves are CLOSED on Tuesdays.',
      'Flash photography is strictly prohibited inside Ajanta caves to preserve ancient organic pigments.',
      'Wear slip-on shoes with socks, as shoes must be removed before entering many cave sanctums with delicate stone floors.'
    ],
    coordinates: { lat: 20.5519, lng: 75.7033 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'raigad-fort',
    slug: 'raigad-fort',
    name: 'Raigad Fort',
    marathiName: 'रायगड किल्ला',
    tagline: 'The Sovereign Capital of the Maratha Empire',
    category: 'Heritage',
    region: 'Konkan',
    district: 'Raigad',
    heroImage: 'https://images.unsplash.com/photo-1588661750247-a9a3b2b4db3b?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Sahyadri Mountain Fort',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1588661750247-a9a3b2b4db3b?auto=format&fit=crop&w=1000&q=80', caption: 'The formidable mountain plateau of Raigad Fort', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80', caption: 'Ancient stone bastions rising above the clouds', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80', caption: 'Takmak Tok execution cliff drop', credit: 'Unsplash' }
    ],
    shortDescription: 'Perched 820 meters high amidst the Sahyadri mountains, Raigad was chosen by Chhatrapati Shivaji Maharaj as the capital of the Maratha Empire where his coronation took place in 1674.',
    overview: [
      'Described by European travelers as the "Gibraltar of the East," Raigad Fort stands as the emotional and historical heartbeat of Maharashtra. Rising abruptly from the Konkan plains, its wedge-shaped plateau is fortified on all sides by sheer precipices, making it virtually impregnable to siege warfare.',
      'On June 6, 1674, Chhatrapati Shivaji Maharaj was crowned here as the sovereign Chhatrapati of the Maratha Kingdom in a lavish coronation ceremony. Today, visitors can see the Raj Bhavan (palace), the Raj Sabha (coronation throne platform designed with acoustic resonance), the Samadhi (memorial) of Shivaji Maharaj, and the terrifying Takmak Tok cliff.'
    ],
    highlights: ['Coronation Throne Platform (Raj Sabha)', 'Samadhi (Tomb) of Chhatrapati Shivaji Maharaj', 'Maha Darwaja Grand Fortified Gateway', 'Takmak Tok Execution Cliff', 'Raigad Ropeway Aerial Tramway'],
    topAttractions: [
      { name: 'Raj Sabha & Royal Throne', description: 'The grand audience hall built so that whispers at the entrance could be heard distinctly at the royal throne.', badge: 'Coronation Seat' },
      { name: 'Shivaji Maharaj Samadhi', description: 'The revered stone memorial of the visionary Maratha ruler, facing the Jagdishwar Temple.', badge: 'Revered Memorial' },
      { name: 'Takmak Tok', description: 'A sheer vertical precipice with a terrifying 1,200-foot drop used historically for executing traitors.', badge: 'Historic Cliff' },
      { name: 'Maha Darwaja', description: 'Colossal stone entrance flanked by massive 65-foot concave bastions with concealed firing ports.', badge: 'Impregnable Gate' },
      { name: 'Raigad Ropeway', description: 'Modern aerial tramway whisking passengers up 400 vertical meters in just 4 minutes.', badge: 'Aerial Cable Car' }
    ],
    thingsToDo: [
      'Pay homage at the Samadhi of Chhatrapati Shivaji Maharaj and the adjacent pet dog Waghya\'s memorial.',
      'Climb the 1,737 stone steps early in the morning for a spiritually exhilarating Sahyadri hike.',
      'Observe the acoustic brilliance of the Royal Court where normal conversational speech carries across the hall.',
      'Enjoy panoramic views of the surrounding Sahyadri peaks including Torna and Rajgad from the ramparts.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to March',
      description: 'Clear cool weather with crisp mountain air; ideal for walking along the expansive 2.5-km plateau.',
      monsoonTip: 'Monsoon (July to September) drapes Raigad in thick swirling clouds, roaring waterfalls, and vibrant green moss; steps can be slippery.',
      winterTip: 'Mornings have chilly winds and crystal visibility stretching across the Konkan valleys.'
    },
    estimatedDuration: '1 to 2 Days',
    budgetLevel: 'Budget',
    howToReach: {
      air: 'Pune Airport (130 km) or Mumbai International Airport (140 km).',
      rail: 'Mangaon railway station (30 km) on the Konkan Railway is the nearest train station.',
      road: 'Via Mahad from Mumbai (160 km via NH 66) or Pune via Varandha Ghat (130 km).'
    },
    suggestedItinerary: [
      { day: 1, title: 'Ascent to the Royal Capital', activities: ['Arrive at base village Pachad', 'Ascend via the Raigad Ropeway or stone steps', 'Visit Maha Darwaja and Nagarkhana', 'Explore Raj Sabha and Shivaji Maharaj Samadhi', 'Sunset view from Takmak Tok', 'Overnight stay at MTDC Raigad resort on top'] }
    ],
    localFoodRecommendations: [
      { name: 'Pithla Bhakri with Thecha', description: 'Hot gram flour curry served with rustic bajra flatbread and fiery garlic thecha at fort-top dhabas.', vegetarian: true, mustTryLocation: 'Base village Pachad stalls & hilltop shacks' },
      { name: 'Gavran Chicken Thali', description: 'Free-range country chicken cooked in traditional Mahad-Konkani roasted coconut masala.', vegetarian: false, mustTryLocation: 'Local dhabas near Mangaon' }
    ],
    nearbyDestinations: [
      { name: 'Mahabaleshwar', slug: 'mahabaleshwar', distance: '70 km' },
      { name: 'Alibaug', slug: 'alibaug', distance: '90 km' },
      { name: 'Pune', slug: 'pune', distance: '130 km' }
    ],
    travelTips: [
      'The Raigad ropeway saves hours of climbing, but queues can be long on weekends. Buy tickets early.',
      'Carry adequate water and a sun hat; the upper plateau covers over 2.5 square kilometers with open walking trails.',
      'Maintain dignity and solemn respect at the Samadhi of Chhatrapati Shivaji Maharaj.'
    ],
    coordinates: { lat: 18.2346, lng: 73.4414 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'tadoba-andhari-tiger-reserve',
    slug: 'tadoba-andhari-tiger-reserve',
    name: 'Tadoba-Andhari Tiger Reserve',
    marathiName: 'ताडोबा-अंधारी व्याघ्र प्रकल्प',
    tagline: 'The Jewel of Vidarbha & Realm of the Royal Bengal Tiger',
    category: 'Nature & Wildlife',
    region: 'Vidarbha',
    district: 'Chandrapur',
    heroImage: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Royal Bengal Tiger Tadoba',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1000&q=80', caption: 'Royal Bengal Tiger prowling through teak forests', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80', caption: 'Sloth bear and leopard habitat in central India', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80', caption: 'Tadoba Lake marshlands and bird sanctuary', credit: 'Unsplash' }
    ],
    shortDescription: 'Maharashtra\'s oldest and largest national park, Tadoba boasts one of the highest densities of Royal Bengal Tigers in India, alongside leopards, sloth bears, and 280+ bird species.',
    overview: [
      'Covering over 1,727 square kilometers in the Chandrapur district of Vidarbha, Tadoba-Andhari Tiger Reserve is often celebrated as the "Real Jungle Book." The name Tadoba comes from the local tribal deity Taru or Tadoba, worshipped by the Gond tribes, while Andhari refers to the meandering Andhari River.',
      'The reserve\'s diverse dry deciduous teak forest, bamboo thickets, and deep waterholes support a flourishing tiger population with legendary big cats such as Maya, Matkasur, and Scarface. In addition to tigers, visitors frequently encounter Indian leopards, sloth bears, dholes (wild dogs), sambar deer, and marsh crocodiles.'
    ],
    highlights: ['Highest Tiger Sighting Probability in India', 'Open 4x4 Gypsy Forest Safaris', 'Tadoba Lake Birdwatching & Marsh Crocodiles', 'Core and Buffer Zone Safaris', 'Tribal Gond Heritage'],
    topAttractions: [
      { name: 'Moharli, Kolara & Navegaon Gates', description: 'Premier core safari entry points offering deep forest access and high predator tracking chances.', badge: 'Core Safari' },
      { name: 'Tadoba Lake', description: 'Perennial water body attracting wading storks, crested serpent eagles, mugger crocodiles, and herds of spotted deer.', badge: 'Water Sanctuary' },
      { name: 'Kolsa Wildlife Zone', description: 'Quiet southern wilderness characterized by bamboo hills, rock ravines, and elusive leopard sightings.', badge: 'Untamed Wild' },
      { name: 'Night Safari in Buffer Zones', description: 'Unique nocturnal safari tracking civets, jungle cats, owls, and night-roaming leopards.', badge: 'Nocturnal Safari' }
    ],
    thingsToDo: [
      'Embark on early morning and late afternoon open Gypsy safaris accompanied by certified forest guides.',
      'Photograph wetland water birds and crocodiles basking on rocks at Tadoba Lake.',
      'Experience an authorized night safari in the buffer zone to see nocturnal forest life.',
      'Support local community initiatives by visiting local Gond tribal villages and crafts centers.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to June',
      description: 'October to February offers lush pleasant greenery; March to May (summer) offers maximum tiger sightings around waterholes.',
      summerTip: 'April and May are very hot (up to 44°C), but tiger sighting probabilities peak as animals congregate at water bodies.',
      winterTip: 'November to February is delightfully cool (10°C–25°C) with active wildlife and vibrant migratory birds.'
    },
    estimatedDuration: '3 Days',
    budgetLevel: 'Premium',
    howToReach: {
      air: 'Dr. Babasaheb Ambedkar International Airport, Nagpur (140 km), is the nearest airport with frequent daily flights.',
      rail: 'Chandrapur Railway Station (45 km) and Nagpur Railway Station (140 km) connect to major Indian cities.',
      road: 'Well-paved 3-hour drive from Nagpur via the Nagpur-Chandrapur highway.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Arrival & Afternoon Safari', activities: ['Pick-up from Nagpur airport/station', 'Arrive at jungle lodge near Moharli or Kolara Gate', 'Afternoon Gypsy safari in buffer zone', 'Bonfire and wildlife documentary screening at lodge'] },
      { day: 2, title: 'Core Zone Tiger Safaris', activities: ['Dawn core safari (06:00 AM – 10:00 AM)', 'Rest during midday heat', 'Afternoon core safari (02:30 PM – 06:30 PM)', 'Buffer night drive to spot nocturnal civets and leopards'] },
      { day: 3, title: 'Morning Safari & Departure', activities: ['Final sunrise safari tracking alarm calls', 'Breakfast and departure to Nagpur'] }
    ],
    localFoodRecommendations: [
      { name: 'Varhadi Saoji Chicken / Mutton', description: 'Vidarbha\'s legendary fiery culinary tradition prepared with 32 hand-ground roasted spices and black pepper.', vegetarian: false, mustTryLocation: 'Local Vidarbha dhabas around Chandrapur & Nagpur' },
      { name: 'Saoji Patodi Rassa', description: 'Spiced gram flour cakes cooked in a scorching, deeply savory poppy-seed and dry coconut gravy.', vegetarian: true, mustTryLocation: 'Vidarbha roadside family diners' }
    ],
    nearbyDestinations: [
      { name: 'Nagpur', slug: 'tadoba-andhari-tiger-reserve', distance: '140 km' },
      { name: 'Pench National Park', slug: 'tadoba-andhari-tiger-reserve', distance: '190 km' },
      { name: 'Lonar Crater Lake', slug: 'lonar-crater-lake', distance: '280 km' }
    ],
    travelTips: [
      'Core safari permits open 120 days in advance on the official Mahaecotourism portal and sell out within minutes.',
      'Wear neutral, earth-toned clothing (khaki, olive, brown, dark green) during safaris; avoid bright colors and perfumes.',
      'Carry a camera with a telephoto lens (300mm+) and good binoculars for bird and big cat photography.'
    ],
    coordinates: { lat: 20.2443, lng: 79.3039 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'lonar-crater-lake',
    slug: 'lonar-crater-lake',
    name: 'Lonar Crater Lake',
    marathiName: 'लोणार सरोवर',
    tagline: 'World’s Only Hyper-Velocity Basalt Meteorite Crater',
    category: 'Nature & Wildlife',
    region: 'Vidarbha',
    district: 'Buldhana',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Pristine Geological Lake Basin',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80', caption: 'The circular emerald impact crater of Lonar', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80', caption: 'Ancient 12th-century Daitya Sudan Temple carvings', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1439853941329-a95ce04713e7?auto=format&fit=crop&w=1000&q=80', caption: 'Dense ring forest hugging the saline alkaline lake', credit: 'Unsplash' }
    ],
    shortDescription: 'Formed 52,000 years ago when a two-million-ton meteor slammed into the Deccan basalt plateau, Lonar is a Geo-Heritage site with a mysterious halo-alkaline lake and medieval temples.',
    overview: [
      'Lonar Lake, nestled in the Buldhana district, is one of the world\'s most astonishing geological treasures. Created by a hyper-velocity meteorite impact into hard Deccan basalt rock during the Pleistocene epoch, the crater measures 1.8 kilometers in diameter and 150 meters in depth.',
      'The lake inside is both saline and alkaline, supporting unique haloarchaeal micro-organisms found nowhere else. Around the lake’s forested rim stand dozens of 8th to 12th-century Hemadpanthi stone temples, most notably the Daitya Sudan Temple, carved with intricate friezes depicting Lord Vishnu slaying the demon Lavanasura.'
    ],
    highlights: ['National Geo-Heritage Meteorite Crater', 'Halo-Alkaline Saline Lake Ecosystem', 'Daitya Sudan 11th Century Chalukyan Temple', 'Dense Rim Jungle with 160+ Bird Species', 'Gaimukh Temple Natural Spring'],
    topAttractions: [
      { name: 'Lonar Meteorite Lake & Basin', description: 'Walk down the crater rim into the dense forest basin to witness the mineral-rich waters of the extraterrestrial impact.', badge: 'Geo Wonder' },
      { name: 'Daitya Sudan Temple', description: 'Stunning star-shaped stone temple in Lonar village dedicated to Lord Vishnu, resembling Khajuraho carvings.', badge: 'Ancient Temple' },
      { name: 'Gaimukh Temple & Sita Nahani', description: 'A perennial natural freshwater spring flows through a stone cow mouth at the edge of the crater rim.', badge: 'Perennial Spring' },
      { name: 'Kamalja Devi Temple', description: 'Historic shrine situated right on the edge of the saline waters deep within the forested crater bowl.', badge: 'Crater Sanctuary' }
    ],
    thingsToDo: [
      'Trek down the forested crater trail from the MTDC viewpoint down to the water\'s edge at sunrise.',
      'Spot resident and migratory birds including peafowl, gazelles, grey herons, and flamingos along the shores.',
      'Marvel at the astronomical orientation and delicate sandstone figures of Daitya Sudan Temple.',
      'Learn about space geology and meteorite samples at the local geological center.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to March',
      description: 'Pleasant winter weather with daytime temperatures around 20°C–28°C; ideal for crater basin trekking.',
      monsoonTip: 'Monsoon (July to September) makes the crater lush emerald, but trail rocks inside the basin can be slick.',
      winterTip: 'Migratory waterfowl arrive from Central Asia, making winter heaven for birdwatchers.'
    },
    estimatedDuration: '1 to 2 Days',
    budgetLevel: 'Budget',
    howToReach: {
      air: 'Chhatrapati Sambhajinagar Airport (140 km) is the nearest airport.',
      rail: 'Jalna (85 km) or Malkapur (100 km) on Central Railway.',
      road: 'Well-connected by road from Chhatrapati Sambhajinagar (3.5 hours) and Jalna (2 hours).'
    },
    suggestedItinerary: [
      { day: 1, title: 'Impact Crater & Hemadpanthi Marvels', activities: ['Arrival in Lonar and check into MTDC resort overlooking the rim', 'Afternoon walk down the crater path to Kamalja Devi temple', 'Witness twilight over the impact bowl', 'Visit Daitya Sudan Temple in town for night illumination'] }
    ],
    localFoodRecommendations: [
      { name: 'Varhadi Pithla & Jowar Bhakri', description: 'Wholesome rustic meal of thick gram flour stew with dry chili thecha and charred jowar bread.', vegetarian: true, mustTryLocation: 'MTDC Lonar Restaurant & local dhabas' },
      { name: 'Shev Bhaji & Gulab Jamun', description: 'Spiced crispy sev cooked in rich brown gravy, concluded with warm milk-sweet gulab jamun.', vegetarian: true, mustTryLocation: 'Buldhana road restaurants' }
    ],
    nearbyDestinations: [
      { name: 'Chhatrapati Sambhajinagar', slug: 'chhatrapati-sambhajinagar', distance: '140 km' },
      { name: 'Ajanta & Ellora Caves', slug: 'ajanta-and-ellora-caves', distance: '160 km' },
      { name: 'Tadoba Reserve', slug: 'tadoba-andhari-tiger-reserve', distance: '280 km' }
    ],
    travelTips: [
      'Do not touch or taste the crater water; its extreme alkalinity and salt concentration can irritate the skin.',
      'Wear sturdy closed shoes with socks for the descent down the rocky, unpaved crater path.'
    ],
    coordinates: { lat: 19.9757, lng: 76.5074 },
    popular: true,
    featuredOnHome: true
  },
  {
    id: 'bhandardara',
    slug: 'bhandardara',
    name: 'Bhandardara',
    marathiName: 'भंडारदरा',
    tagline: 'Lake Arthur, Fireflies Sanctuary & Mount Kalsubai',
    category: 'Nature & Wildlife',
    region: 'Western Maharashtra',
    district: 'Ahmednagar',
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Arthur Lake Reflections Bhandardara',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80', caption: 'Mirror-like reflections on Arthur Lake', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80', caption: 'Kalsubai peak summit trail into the clouds', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1000&q=80', caption: 'Randha Falls cascading violently over basalt cliffs', credit: 'Unsplash' }
    ],
    shortDescription: 'Cradled beneath Mount Kalsubai (highest peak in Maharashtra), Bhandardara is a paradise of pristine Arthur Lake, the roaring Umbrella Falls, and the magical pre-monsoon Fireflies Festival.',
    overview: [
      'Bhandardara, situated at an altitude of 750 meters in the Sahyadri mountains, is one of Maharashtra\'s most serene and untouched nature getaways. The village is set against the backdrop of Mount Kalsubai, which at 1,646 meters is the highest summit in Maharashtra.',
      'The centerpiece of the valley is Arthur Lake, formed by the 1910 Wilson Dam, one of the oldest dams in India. In late May and early June, the forests around Bhandardara witness the world-famous Kajwa Mahotsav (Fireflies Festival), where millions of bioluminescent fireflies illuminate the trees in synchronized light pulses.'
    ],
    highlights: ['Arthur Lake & Wilson Dam', 'Pre-Monsoon Fireflies Festival (Kajwa Mahotsav)', 'Mount Kalsubai Summit Trek (Highest in Maharashtra)', 'Randha Falls & Umbrella Falls', 'Sandhan Valley "Valley of Shadows" Gateway'],
    topAttractions: [
      { name: 'Arthur Lake & Wilson Dam', description: 'Vast reservoir built in 1910 surrounded by jagged peaks, perfect for camping and tranquil boat rides.', badge: 'Pristine Lake' },
      { name: 'Randha Falls', description: 'Ferocious 170-foot waterfall on Pravara River where water plunges violently into a rocky gorge.', badge: 'Waterfall' },
      { name: 'Mount Kalsubai', description: 'Maharashtra\'s Everest (1,646 m); steel ladders assist hikers to the small summit temple of Kalsubai Devi.', badge: 'Highest Peak' },
      { name: 'Amruteshwar Temple', description: 'Over 1,200-year-old intricately sculpted stone Shiva temple built during the Silhara dynasty in 1100 CE.', badge: 'Ancient Stone' }
    ],
    thingsToDo: [
      'Camp overnight along the serene shores of Arthur Lake under the starry Milky Way canopy.',
      'Witness millions of synchronized glowing fireflies in the forests of Samrad and Ghatghar in late May.',
      'Climb Mount Kalsubai at night to witness the breathtaking sunrise breaking over the sea of Sahyadri clouds.',
      'Explore the dramatic entrance to Sandhan Valley, a 200-foot deep water-carved rock canyon.'
    ],
    bestTimeToVisit: {
      idealMonths: 'October to February (Winter) & Late May–June (Fireflies)',
      description: 'Pleasant winter season for camping and trekking. Late May to early June is prime fireflies season before monsoons arrive.',
      monsoonTip: 'Monsoon (July to September) brings raging waterfalls and misty grandeur; ideal for nature walks.',
      winterTip: 'Crisp nights (10°C–14°C) make winter ideal for lakeside bonfires and starry night camping.'
    },
    estimatedDuration: '2 Days',
    budgetLevel: 'Budget',
    howToReach: {
      air: 'Mumbai International Airport (170 km) or Pune Airport (180 km).',
      rail: 'Igatpuri Railway Station (45 km) on Central Railway has express train connectivity.',
      road: '165 km from Mumbai via Mumbai-Nashik highway (NH 160) via Ghoti.'
    },
    suggestedItinerary: [
      { day: 1, title: 'Lake Camping & Waterfalls', activities: ['Arrive via Igatpuri, drive past Kasara ghats', 'Visit Wilson Dam and Umbrella Falls', 'Explore the historic 9th-century Amruteshwar stone temple', 'Pitch camp at Arthur Lake shore; enjoy bonfire and stargazing'] },
      { day: 2, title: 'Kalsubai Sunrise or Sandhan Canyon', activities: ['Dawn hike or visit to Randha Falls', 'Explore the rim of Sandhan Valley', 'Drive through winding mountain roads back toward Mumbai/Nashik'] }
    ],
    localFoodRecommendations: [
      { name: 'Village Chulivarchi Jowar Bhakri', description: 'Earthen woodfire-cooked jowar flatbread served with fresh village curd, pitla, and groundnut thecha.', vegetarian: true, mustTryLocation: 'Bari village homestays' },
      { name: 'Fresh Pravara River Fish Fry', description: 'Freshwater catch marinated in turmeric and fried on an open iron griddle.', vegetarian: false, mustTryLocation: 'Lakeside tent camps' }
    ],
    nearbyDestinations: [
      { name: 'Nashik', slug: 'nashik', distance: '70 km' },
      { name: 'Lonavala', slug: 'lonavala-and-khandala', distance: '120 km' },
      { name: 'Mumbai', slug: 'mumbai', distance: '165 km' }
    ],
    travelTips: [
      'Do not shine bright torches or use flash photography during the Fireflies Festival; artificial light disrupts their delicate mating signals.',
      'Carry warm clothing if camping by the lake in winter; winds across the open water can drop temperatures sharply.'
    ],
    coordinates: { lat: 19.5317, lng: 73.7589 },
    popular: true,
    featuredOnHome: false
  },
  {
    id: 'kaas-plateau',
    slug: 'kaas-plateau',
    name: 'Kaas Plateau (Valley of Flowers)',
    marathiName: 'कास पठार',
    tagline: 'UNESCO World Natural Heritage Biodiversity Hotspot',
    category: 'Nature & Wildlife',
    region: 'Western Maharashtra',
    district: 'Satara',
    heroImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Photo via Unsplash / Western Ghats Wildflower Plateau',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80', caption: 'Wildflower carpets covering laterite volcanic basalt plateau', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80', caption: 'Vajrai and Thoseghar waterfalls near Satara', credit: 'Unsplash' },
      { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80', caption: 'Kaas Lake serene water catchment surrounded by mountains', credit: 'Unsplash' }
    ],
    shortDescription: 'Maharashtra\'s designated UNESCO World Natural Heritage site, this volcanic laterite plateau bursts into an extraordinary carpet of 850+ species of endemic wildflowers every monsoon.',
    overview: [
      'Known colloquially as the "Valley of Flowers of Maharashtra," the Kaas Pathar is a 10-square-kilometer laterite plateau situated at 1,200 meters in the Satara district. Formed by ancient volcanic lava flows, its thin layer of soil supports a fragile ecosystem recognized globally by UNESCO.',
      'From late August to October, following the heavy monsoon rains, the entire plateau transforms into a vibrant carpet of pinks, purples, blues, yellows, and whites. Over 850 flowering plant species, including insectivorous plants like Utricularia (Bladderworts) and Drosera (Sundews), bloom in synchronized succession.'
    ],
    highlights: ['UNESCO World Natural Heritage Site', '850+ Rare & Endemic Wildflower Species', 'Insectivorous Bladderworts & Sundews', 'Vajrai Falls (One of India\'s Tallest Cascades)', 'Thoseghar Waterfalls Scenic Gorge'],
    topAttractions: [
      { name: 'Kaas Plateau Flower Beds', description: 'Walk along designated fenced walkways to witness carpets of rare orchids, dipcadi, and smithia flowers.', badge: 'UNESCO Nature' },
      { name: 'Kaas Lake', description: 'A scenic man-made lake constructed in 1879 providing clean drinking water to Satara town, surrounded by green hills.', badge: 'Alpine Lake' },
      { name: 'Vajrai Falls (Bhambavli)', description: 'Spectacular three-tiered waterfall dropping 260 meters into the Urmodi river basin, one of India\'s tallest.', badge: 'Waterfall Wonder' },
      { name: 'Thoseghar Waterfalls', description: 'A picturesque series of cascading falls ranging from 15 to 200 meters located 20 km from Satara.', badge: 'Valley Cascade' }
    ],
    thingsToDo: [
      'Walk softly along designated trails to observe miniature insectivorous orchids and floating aquatic flowers.',
      'Trek to the base of Vajrai Falls surrounded by dense evergreen Sahyadri flora.',
      'Visit the windmill plateau of Chalkewadi, where hundreds of giant windmills spin on breezy ridges.',
      'Sample the famous sweet Satara Kandi Pedha in Satara bazaar.'
    ],
    bestTimeToVisit: {
      idealMonths: 'Late August to October',
      description: 'The ephemeral blooming season lasts only 4 to 6 weeks, peaking between early September and mid-October.',
      monsoonTip: 'Late monsoon brings the magical flower bloom; carry rain ponchos and keep camera gear in waterproof pouches.',
      winterTip: 'The plateau turns into a dry golden savanna in winter, though Kaas Lake and Vajrai waterfalls remain scenic.'
    },
    estimatedDuration: '1 to 2 Days',
    budgetLevel: 'Budget',
    howToReach: {
      air: 'Pune Airport (130 km) is the nearest airport.',
      rail: 'Satara Railway Station (25 km) on Central Railway.',
      road: '25 km uphill from Satara city; easily reached via NH 48 from Pune (2.5 hours) and Mumbai (5 hours).'
    },
    suggestedItinerary: [
      { day: 1, title: 'Wildflowers & Cascades', activities: ['Early morning entry to Kaas Plateau with registered forest pass', 'Explore the bloom zones with botanist/eco-guide', 'Visit serene Kaas Lake', 'Afternoon excursion to Thoseghar Waterfalls', 'Taste authentic Satara Kandi Pedha before returning'] }
    ],
    localFoodRecommendations: [
      { name: 'Satara Kandi Pedha', description: 'Rich, caramelized brown milk fudge crafted using pure buffalo mawa and cardamom, a culinary hallmark of Satara.', vegetarian: true, mustTryLocation: 'Rajpurohit or Modi Sweets, Satara' },
      { name: 'Chulivarche Mutton & Bhakri', description: 'Rustic slow-simmered goat curry cooked on earthen hearths with Satara\'s signature red masala.', vegetarian: false, mustTryLocation: 'Dhabas along Satara-Kaas road' }
    ],
    nearbyDestinations: [
      { name: 'Mahabaleshwar', slug: 'mahabaleshwar', distance: '40 km' },
      { name: 'Pune', slug: 'pune', distance: '130 km' },
      { name: 'Kolhapur', slug: 'pune', distance: '120 km' }
    ],
    travelTips: [
      'Daily visitor count is strictly capped at 3,000 visitors by the Forest Department. You MUST pre-book your pass online at kaas.ind.in.',
      'Never step off the designated pathways or pluck flowers; stepping on the thin soil destroys rare endemic tubers for years.'
    ],
    coordinates: { lat: 17.7208, lng: 73.8188 },
    popular: true,
    featuredOnHome: false
  }
];
