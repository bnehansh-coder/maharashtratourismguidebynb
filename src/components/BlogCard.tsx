import React from 'react';
import { Clock, Calendar, ArrowRight, Bookmark } from 'lucide-react';
import { BlogArticle } from '../types';
import { SafeImage } from './SafeImage';

interface BlogCardProps {
  article: BlogArticle;
  onSelect: (slug: string) => void;
  isSaved?: boolean;
  onToggleSave?: (slug: string) => void;
  featuredLayout?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  article,
  onSelect,
  isSaved = false,
  onToggleSave,
  featuredLayout = false
}) => {
  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden border border-[#E8DEC8] hover:border-[#D95D0F] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col ${
        featuredLayout ? 'md:grid md:grid-cols-12 md:gap-0' : ''
      }`}
    >
      {/* Cover Image */}
      <div
        className={`relative overflow-hidden cursor-pointer ${
          featuredLayout ? 'md:col-span-7 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'
        }`}
        onClick={() => onSelect(article.slug)}
      >
        <SafeImage
          src={article.heroImage}
          alt={article.title}
          credit={article.imageCredit}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Category tag */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#164E3D]/95 text-white backdrop-blur-xs border border-white/20">
          {article.category}
        </span>

        {/* Bookmark quick toggle */}
        {onToggleSave && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(article.slug);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
              isSaved
                ? 'bg-[#E86518] text-white shadow-md'
                : 'bg-black/40 text-white/90 hover:bg-black/60 hover:text-white'
            }`}
            title={isSaved ? 'Remove bookmark' : 'Save article'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        )}

        {/* Unobtrusive Image Credit */}
        <span className="absolute bottom-2 right-2 text-[10px] text-white/70 bg-black/40 px-2 py-0.5 rounded">
          {article.imageCredit.replace('Photo via ', '').replace('Photo by ', '')}
        </span>
      </div>

      {/* Text Details */}
      <div
        className={`p-5 sm:p-6 flex-1 flex flex-col justify-between ${
          featuredLayout ? 'md:col-span-5 md:p-8' : ''
        }`}
      >
        <div>
          {/* Metadata: Read time & Date */}
          <div className="flex items-center gap-3 text-xs text-[#736352] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D95D0F]" />
              {article.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#164E3D]" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(article.slug)}
            className="font-heading text-lg sm:text-xl font-bold text-[#24211D] group-hover:text-[#D95D0F] transition-colors leading-snug cursor-pointer line-clamp-2 mb-2.5"
          >
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-[#5C4D3D] leading-relaxed line-clamp-3 mb-4">
            {article.excerpt}
          </p>
        </div>

        {/* Author & Read Article CTA */}
        <div className="pt-4 border-t border-[#F0E9DC] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-[#D95D0F]/30"
            />
            <span className="text-xs font-semibold text-[#3B3026]">
              {article.author.name}
            </span>
          </div>

          <button
            onClick={() => onSelect(article.slug)}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D95D0F] group-hover:text-[#b34805] group-hover:translate-x-0.5 transition-all"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
