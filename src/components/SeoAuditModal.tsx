import React, { useState, useMemo } from 'react';
import { X, Search, CheckCircle2, ShieldCheck, Compass, ExternalLink, Filter, HelpCircle, Globe, FileText, Sparkles } from 'lucide-react';
import { KEYWORD_MAPPING, KeywordMapEntry } from '../data/seoKeywords';

interface SeoAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SeoAuditModal: React.FC<SeoAuditModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'keywords' | 'checklist' | 'aeo'>('keywords');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIntent, setSelectedIntent] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredKeywords = useMemo(() => {
    return KEYWORD_MAPPING.filter((item) => {
      // Category filter
      if (selectedCategory === 'Hubs' && (item.targetUrl.startsWith('/destinations/') || item.targetUrl.startsWith('/blogs/'))) {
        return false;
      }
      if (selectedCategory === 'Destinations' && !item.targetUrl.startsWith('/destinations/')) {
        return false;
      }
      if (selectedCategory === 'Blogs' && !item.targetUrl.startsWith('/blogs/')) {
        return false;
      }

      // Intent filter
      if (selectedIntent !== 'All' && item.searchIntent !== selectedIntent) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.pageName.toLowerCase().includes(q) ||
          item.primaryKeyword.toLowerCase().includes(q) ||
          item.secondaryKeywords.some((k) => k.toLowerCase().includes(q)) ||
          item.targetUrl.toLowerCase().includes(q) ||
          item.mainQuestionAnswered.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [searchQuery, selectedIntent, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] text-[#24211D] rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl border border-[#E8DEC8] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#164E3D] text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden shrink-0">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-[#164E3D] flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Live SEO & AEO Audit Report
              </span>
              <span className="text-xs font-medium text-emerald-200 bg-white/10 px-3 py-1 rounded-full">
                28 Fully Mapped URLs • Verified Maharashtra Focus
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Keyword Mapping, Technical SEO & Search Engine Audit
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1.5 leading-relaxed">
              Comprehensive keyword architecture, search intent mapping, self-referencing canonicals, JSON-LD structured schemas, and Answer Engine Optimization (AEO) matrix for the Maharashtra Tourism Portal.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
            aria-label="Close Audit Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="bg-white border-b border-[#E8DEC8] px-6 py-3 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('keywords')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'keywords'
                  ? 'bg-[#164E3D] text-white shadow-xs'
                  : 'text-[#5C4D3D] hover:bg-[#FAF7F2]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Keyword Mapping Table ({KEYWORD_MAPPING.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'checklist'
                  ? 'bg-[#164E3D] text-white shadow-xs'
                  : 'text-[#5C4D3D] hover:bg-[#FAF7F2]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Technical SEO Health</span>
            </button>
            <button
              onClick={() => setActiveTab('aeo')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'aeo'
                  ? 'bg-[#164E3D] text-white shadow-xs'
                  : 'text-[#5C4D3D] hover:bg-[#FAF7F2]'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>AEO & Perplexity Readiness</span>
            </button>
          </div>

          {activeTab === 'keywords' && (
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter keywords, pages, intent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-[#FAF7F2] border border-[#E8DEC8] rounded-xl text-xs focus:outline-none focus:border-[#164E3D]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'keywords' && (
            <div>
              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E8DEC8]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#6B5E4F] uppercase tracking-wider mr-1">
                    Section:
                  </span>
                  {(['All', 'Hubs', 'Destinations', 'Blogs'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        selectedCategory === cat
                          ? 'bg-[#D95D0F] text-white shadow-xs'
                          : 'bg-white border border-[#E8DEC8] text-[#5C4D3D] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#6B5E4F] uppercase tracking-wider mr-1">
                    Intent:
                  </span>
                  {(['All', 'Informational', 'Commercial Investigation', 'Navigational'] as const).map((intent) => (
                    <button
                      key={intent}
                      onClick={() => setSelectedIntent(intent)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        selectedIntent === intent
                          ? 'bg-[#164E3D] text-white shadow-xs'
                          : 'bg-white border border-[#E8DEC8] text-[#5C4D3D] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {intent}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-2xl border border-[#E8DEC8] shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#F4EFE6] text-[#4A3E31] uppercase tracking-wider font-bold border-b border-[#E8DEC8]">
                        <th className="py-3 px-4">Page & Target URL</th>
                        <th className="py-3 px-4">Primary Keyword</th>
                        <th className="py-3 px-4">Secondary Keywords</th>
                        <th className="py-3 px-4">Intent & Volume</th>
                        <th className="py-3 px-4">Main Visitor Question Answered</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DEC8]">
                      {filteredKeywords.map((item) => (
                        <tr key={item.targetUrl} className="hover:bg-[#FAF7F2] transition-colors">
                          <td className="py-3 px-4">
                            <span className="font-bold text-[#164E3D] block">{item.pageName}</span>
                            <code className="text-[11px] text-[#8C7E6D] bg-[#F4EFE6] px-1.5 py-0.5 rounded font-mono">
                              {item.targetUrl}
                            </code>
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-semibold text-[#D95D0F] bg-[#D95D0F]/10 px-2.5 py-1 rounded-full inline-block border border-[#D95D0F]/20">
                              {item.primaryKeyword}
                            </span>
                            <span className="text-[10px] text-[#6B5E4F] block mt-1">
                              H1: {item.targetH1}
                            </span>
                          </td>
                          <td className="py-3 px-4 space-y-1">
                            {item.secondaryKeywords.map((sec, idx) => (
                              <span
                                key={idx}
                                className="block text-[11px] text-[#5C4D3D] bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200"
                              >
                                {sec}
                              </span>
                            ))}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block ${
                                item.searchIntent === 'Informational'
                                  ? 'bg-blue-100 text-blue-800'
                                  : item.searchIntent === 'Commercial Investigation'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {item.searchIntent}
                            </span>
                            <span className="text-[11px] text-[#5C4D3D] font-medium block mt-1">
                              {item.searchVolume}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-[#5C4D3D] max-w-xs leading-relaxed">
                            {item.mainQuestionAnswered}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => {
                                onClose();
                                onNavigate(item.targetUrl);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-[#164E3D] text-white hover:bg-[#D95D0F] transition-all font-semibold inline-flex items-center gap-1"
                            >
                              <span>View</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1: Content Accuracy */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DEC8] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#164E3D]">1. Content & Destination Accuracy</h4>
                    <span className="text-xs text-[#8C7E6D]">100% Focused on Maharashtra, India</span>
                  </div>
                </div>
                <p className="text-xs text-[#5C4D3D] leading-relaxed">
                  Every page, destination profile, and travel blog is strictly located within Maharashtra. Verified zero confusion with Madhya Pradesh. Thoroughly covers Mumbai, Pune, Mahabaleshwar, Lonavala, Alibaug, Konkan, Ajanta Caves, Ellora Caves, Nashik, and Tadoba.
                </p>
              </div>

              {/* Item 2: URL & Routing Architecture */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DEC8] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#164E3D]">2. Clean Lowercase Hyphenated URLs</h4>
                    <span className="text-xs text-[#8C7E6D]">Vercel SPA Rewrites Configured</span>
                  </div>
                </div>
                <p className="text-xs text-[#5C4D3D] leading-relaxed">
                  Every destination and blog has its own human-readable, lowercase URL with hyphens (e.g., <code>/destinations/ajanta-and-ellora-caves</code>, <code>/blogs/exploring-majestic-forts-maharashtra</code>). `vercel.json` provides rewrite fallback to prevent 404s on browser reload.
                </p>
              </div>

              {/* Item 3: Metadata & Canonicalization */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DEC8] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#164E3D]">3. Meta Titles, Descriptions & Canonical Tags</h4>
                    <span className="text-xs text-[#8C7E6D]">Dynamic Route Synchronization</span>
                  </div>
                </div>
                <p className="text-xs text-[#5C4D3D] leading-relaxed">
                  Dynamic <code>applySEO</code> updates <code>document.title</code>, meta description, and self-referencing canonical URL on every route change. Avoids keyword cannibalization with distinct primary keywords mapped to each page.
                </p>
              </div>

              {/* Item 4: Schema.org Structured Data */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DEC8] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#164E3D]">4. Schema.org JSON-LD Structured Data</h4>
                    <span className="text-xs text-[#8C7E6D]">Rich Search Result Snippets</span>
                  </div>
                </div>
                <p className="text-xs text-[#5C4D3D] leading-relaxed">
                  Embedded JSON-LD for <code>TouristDestination</code>, <code>BlogPosting</code>, <code>BreadcrumbList</code>, and <code>FAQPage</code> schemas enables rich SERP features, star ratings, breadcrumb trails, and answer cards.
                </p>
              </div>

              {/* Item 5: OpenGraph & Social Sharing */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DEC8] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#164E3D]">5. Open Graph & Twitter Cards</h4>
                    <span className="text-xs text-[#8C7E6D]">High-Res Preview Cards</span>
                  </div>
                </div>
                <p className="text-xs text-[#5C4D3D] leading-relaxed">
                  Configured <code>og:title</code>, <code>og:description</code>, <code>og:image</code>, <code>twitter:card="summary_large_image"</code> for Facebook, Twitter/X, LinkedIn, Discord, and WhatsApp sharing.
                </p>
              </div>

              {/* Item 6: Search Crawlers & Sitemap */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8DEC8] shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#164E3D]">6. XML Sitemap & Robots.txt</h4>
                    <span className="text-xs text-[#8C7E6D]">Located in /public/</span>
                  </div>
                </div>
                <p className="text-xs text-[#5C4D3D] leading-relaxed">
                  Both <code>/robots.txt</code> and <code>/sitemap.xml</code> are deployed in <code>public/</code>. Sitemap includes all 28 production URLs with lastmod dates, priorities, and change frequencies.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'aeo' && (
            <div className="space-y-6">
              <div className="bg-[#164E3D] text-white p-6 rounded-2xl">
                <h4 className="font-heading font-bold text-lg mb-2">
                  Answer Engine Optimization (AEO) Strategy
                </h4>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Modern search engines and AI assistants (Google AI Overviews, Perplexity, ChatGPT Search, Gemini) extract answers from authoritative, cleanly structured pages. We have engineered direct answer blocks, FAQ accordions, distance charts, transit directions, and authoritative references across every article.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-[#E8DEC8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D95D0F] block mb-2">
                    1. Direct Answer Lead Paragraphs
                  </span>
                  <p className="text-xs text-[#5C4D3D] leading-relaxed">
                    Key questions like "What are the best places to visit in Maharashtra?" and "What are the 5 UNESCO sites?" are answered in concise 40-60 word definitive summaries at the beginning of respective sections.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E8DEC8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D95D0F] block mb-2">
                    2. Structured FAQ Accordions
                  </span>
                  <p className="text-xs text-[#5C4D3D] leading-relaxed">
                    All 12 travel blogs feature dedicated FAQ accordions addressing practical concerns (permits, costs, best seasons, child/senior accessibility) accompanied by Schema.org FAQPage data.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#E8DEC8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D95D0F] block mb-2">
                    3. Authoritative Government Outbound Links
                  </span>
                  <p className="text-xs text-[#5C4D3D] leading-relaxed">
                    Direct citations to official sources including MTDC (maharashtratourism.gov.in), Archaeological Survey of India (asi.nic.in), and Maharashtra Forest Department (mahaecotourism.gov.in) establish domain authority.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F4EFE6] border-t border-[#E8DEC8] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-[#6B5E4F]">
            Audit compiled by Maharashtra Tourism Editorial Team • Fully compliant with Google SERP & Vercel SPA standards
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#164E3D] hover:bg-[#D95D0F] text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            Close Audit Report
          </button>
        </div>
      </div>
    </div>
  );
};
