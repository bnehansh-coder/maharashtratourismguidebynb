import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Bookmark, Share2, ArrowRight, ChevronRight, Check, Copy, MessageCircle, Facebook, Twitter, HelpCircle, Utensils, AlertTriangle, Compass, MapPin } from 'lucide-react';
import { BLOGS } from '../data/blogs';
import { DESTINATIONS } from '../data/destinations';
import { SafeImage } from '../components/SafeImage';

interface BlogArticleDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  isSaved: boolean;
  onToggleSave: (slug: string) => void;
}

export const BlogArticleDetail: React.FC<BlogArticleDetailProps> = ({
  slug,
  onNavigate,
  isSaved,
  onToggleSave
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const article = BLOGS.find((b) => b.slug === slug) || BLOGS[0];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const shareText = encodeURIComponent(`${article.title} - Maharashtra Tourism`);
  const shareUrl = encodeURIComponent(window.location.href);

  const relatedArticles = BLOGS.filter((b) =>
    article.relatedSlugs?.includes(b.slug)
  ).slice(0, 3);

  const relatedDestination = article.destinationSlug
    ? DESTINATIONS.find((d) => d.slug === article.destinationSlug)
    : null;

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-[#E8DEC8]">
        <div
          className="h-full bg-gradient-to-r from-[#D95D0F] to-[#E86518] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[440px] max-h-[640px] bg-black overflow-hidden">
        <SafeImage
          src={article.heroImage}
          alt={article.title}
          credit={article.imageCredit}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />

        {/* Breadcrumbs */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              <button onClick={() => onNavigate('/blogs')} className="hover:text-white transition-colors">
                Travel Blogs
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-[#FFA96B] font-semibold truncate max-w-[200px] sm:max-w-none">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header Overlay */}
        <div className="absolute bottom-10 left-0 right-0 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white border border-white/20">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-neutral-300 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                <Calendar className="w-3.5 h-3.5 text-[#FFA96B]" />
                {article.publishedDate}
              </span>
              <span className="flex items-center gap-1 text-xs text-neutral-300 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                <Clock className="w-3.5 h-3.5 text-emerald-300" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-3">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
              {article.subtitle}
            </p>
          </div>
        </div>

        <span className="absolute bottom-3 right-4 text-[10px] text-white/70 bg-black/50 px-2 py-0.5 rounded">
          {article.imageCredit}
        </span>
      </div>

      {/* Main Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        {/* Author Card & Social Share Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8DEC8] shadow-xs mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D95D0F]"
            />
            <div>
              <div className="text-sm font-bold text-[#24211D]">{article.author.name}</div>
              <div className="text-xs text-[#736352]">{article.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Save Button */}
            <button
              onClick={() => onToggleSave(article.slug)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                isSaved
                  ? 'bg-[#E86518] text-white'
                  : 'bg-[#FAF7F2] border border-[#DDD3C0] text-[#4A3E31] hover:bg-[#F2ECE1]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save Story'}</span>
            </button>

            {/* WhatsApp Share */}
            <a
              href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
              title="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Facebook Share */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors"
              title="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Twitter/X Share */}
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/10 text-neutral-800 hover:bg-black/20 transition-colors"
              title="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-[#5C4D3D] hover:bg-[#F2ECE1] transition-colors"
              title="Copy article link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Quick Facts Box */}
        <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-8 border border-[#E8DEC8] mb-12">
          <h3 className="text-xs uppercase font-bold tracking-widest text-[#164E3D] mb-4">
            Travel Planning Snapshot
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[#8A7966] block">Ideal Duration</span>
              <span className="font-bold text-[#24211D] text-sm mt-0.5 block">{article.quickFacts.idealDuration}</span>
            </div>
            <div>
              <span className="text-[#8A7966] block">Best Season</span>
              <span className="font-bold text-[#164E3D] text-sm mt-0.5 block">{article.quickFacts.bestSeason}</span>
            </div>
            <div>
              <span className="text-[#8A7966] block">Nearest Hub</span>
              <span className="font-bold text-[#24211D] text-sm mt-0.5 block">{article.quickFacts.nearestHub}</span>
            </div>
            <div>
              <span className="text-[#8A7966] block">Estimated Budget</span>
              <span className="font-bold text-[#D95D0F] text-sm mt-0.5 block">{article.quickFacts.budget}</span>
            </div>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="text-lg sm:text-xl text-[#3E342B] font-serif italic leading-relaxed border-l-4 border-[#D95D0F] pl-6 mb-12 py-1">
          "{article.excerpt}"
        </div>

        {/* Main Article Sections */}
        <div className="space-y-12 text-[#3B3026]">
          {article.sections.map((section, idx) => (
            <section key={idx} className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#24211D] mb-6">
                {section.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#4A3E31]">
                {section.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {section.proTip && (
                <div className="mt-6 p-4 rounded-2xl bg-[#FAF5EC] border-l-4 border-[#164E3D] text-xs sm:text-sm text-[#3E342B]">
                  <strong className="text-[#164E3D] block font-bold uppercase tracking-wider text-[11px] mb-1">
                    💡 Author's Field Tip:
                  </strong>
                  {section.proTip}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Destination Highlights Checklist */}
        {article.highlights && article.highlights.length > 0 && (
          <div className="my-12 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
            <h3 className="font-heading text-xl font-bold text-[#24211D] mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#D95D0F]" />
              <span>Highlights Not to Miss</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3E31] p-2.5 rounded-xl bg-[#FAF7F2]">
                  <span className="text-[#164E3D] font-bold">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Suggested Itinerary */}
        {article.suggestedItinerary && article.suggestedItinerary.length > 0 && (
          <div className="my-12 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
            <h3 className="font-heading text-xl font-bold text-[#24211D] mb-6">
              Suggested Travel Itinerary
            </h3>
            <div className="space-y-6">
              {article.suggestedItinerary.map((day) => (
                <div key={day.day} className="relative pl-8 pb-4 border-l-2 border-[#D95D0F]/30 last:border-l-transparent">
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

        {/* Travel Tips & Safety */}
        {article.travelTips && article.travelTips.length > 0 && (
          <div className="my-12 bg-[#FAF4EB] rounded-3xl p-6 sm:p-10 border border-[#E5DAC6]">
            <h3 className="font-heading text-xl font-bold text-[#24211D] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D95D0F]" />
              <span>Practical Advice & Safety Recommendations</span>
            </h3>
            <ul className="space-y-2.5">
              {article.travelTips.map((tip, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#4A3E31] flex items-start gap-2.5">
                  <span className="text-[#D95D0F] font-bold mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Local Flavors */}
        {article.localFlavors && article.localFlavors.length > 0 && (
          <div className="my-12 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
            <h3 className="font-heading text-xl font-bold text-[#24211D] mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[#D95D0F]" />
              <span>What to Eat on This Journey</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.localFlavors.map((flavor, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-xs sm:text-sm font-medium text-[#3B3026]">
                  🍛 {flavor}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frequently Asked Questions (Accordion) */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="my-12 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DEC8] shadow-xs">
            <h3 className="font-heading text-xl font-bold text-[#24211D] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#164E3D]" />
              <span>Frequently Asked Questions</span>
            </h3>
            <div className="space-y-3">
              {article.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-[#E8DEC8] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-heading text-base font-bold text-[#24211D] bg-[#FAF7F2] hover:bg-[#F2ECE1] transition-colors flex items-center justify-between"
                    >
                      <span>{faq.question}</span>
                      <span className="text-lg text-[#D95D0F] ml-2">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-[#4A3E31] leading-relaxed border-t border-[#E8DEC8]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Link to Linked Destination Page if exists */}
        {relatedDestination && (
          <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#164E3D] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-1">
                Explore Full Guide
              </span>
              <h4 className="font-heading text-2xl font-bold text-white">
                Planning a trip to {relatedDestination.name}?
              </h4>
              <p className="text-xs text-emerald-100 mt-1 max-w-md">
                Browse complete hotel stays, transport connections, photo galleries, and maps.
              </p>
            </div>
            <button
              onClick={() => onNavigate(`/destinations/${relatedDestination.slug}`)}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#164E3D] hover:bg-amber-100 transition-all shrink-0"
            >
              Open {relatedDestination.name} Guide →
            </button>
          </div>
        )}

        {/* Related Articles Carousel */}
        {relatedArticles.length > 0 && (
          <div className="my-14 pt-10 border-t border-[#E8DEC8]">
            <h3 className="font-heading text-2xl font-bold text-[#24211D] mb-6">
              Recommended Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onNavigate(`/blogs/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8DEC8] hover:border-[#D95D0F] cursor-pointer shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h5 className="font-heading font-bold text-sm text-[#24211D] group-hover:text-[#D95D0F] transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h5>
                    <span className="text-[11px] text-[#736352] flex items-center gap-1 font-semibold text-[#D95D0F]">
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
