import React from 'react';
import { Bookmark, ArrowRight, BookOpen, Trash2 } from 'lucide-react';
import { BLOGS } from '../data/blogs';
import { BlogCard } from '../components/BlogCard';

interface BookmarksPageProps {
  onNavigate: (path: string) => void;
  savedSlugs: string[];
  onToggleSave: (slug: string) => void;
}

export const BookmarksPage: React.FC<BookmarksPageProps> = ({
  onNavigate,
  savedSlugs,
  onToggleSave
}) => {
  const savedArticles = BLOGS.filter((b) => savedSlugs.includes(b.slug));

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-xs mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#E86518]/10 text-[#E86518] flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#24211D]">
                Saved Travel Stories
              </h1>
              <p className="text-xs sm:text-sm text-[#736352] mt-0.5">
                Your personal reading list saved in your local browser storage.
              </p>
            </div>
          </div>
        </div>

        {savedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedArticles.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                onSelect={(slug) => onNavigate(`/blogs/${slug}`)}
                isSaved={true}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center border border-[#E8DEC8] max-w-lg mx-auto">
            <Bookmark className="w-12 h-12 text-[#9A8875] mx-auto mb-3 opacity-50" />
            <h3 className="font-heading text-xl font-bold text-[#24211D]">
              No Saved Stories Yet
            </h3>
            <p className="text-xs text-[#736352] mt-1 mb-6 leading-relaxed">
              Click the bookmark icon on any travel story across the website to save it here for offline reading or future trip planning.
            </p>
            <button
              onClick={() => onNavigate('/blogs')}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#164E3D] text-white hover:bg-[#113d2f] transition-all"
            >
              Browse 12 Travel Stories
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
