/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Home } from './pages/Home';
import { DestinationsPage } from './pages/Destinations';
import { DestinationDetail } from './pages/DestinationDetail';
import { BlogsPage } from './pages/Blogs';
import { BlogArticleDetail } from './pages/BlogArticleDetail';
import { HeritagePage } from './pages/Heritage';
import { NaturePage } from './pages/Nature';
import { FoodAndCulturePage } from './pages/FoodAndCulture';
import { TravelGuidePage } from './pages/TravelGuide';
import { ContactPage } from './pages/Contact';
import { BookmarksPage } from './pages/Bookmarks';
import { useSavedArticles } from './hooks/useSavedArticles';
import { applySEO } from './utils/seo';
import { SeoAuditModal } from './components/SeoAuditModal';

export default function App() {
  // Parse initial path from hash or pathname
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    if (window.location.hash) {
      return window.location.hash.replace('#', '') || '/';
    }
    return window.location.pathname || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSeoAuditOpen, setIsSeoAuditOpen] = useState<boolean>(false);
  const { savedSlugs, toggleSave } = useSavedArticles();

  // Dynamically synchronize document title, meta descriptions, canonical URLs, and schema
  useEffect(() => {
    applySEO(currentPath);
  }, [currentPath]);

  // Handle browser back/forward and hash changes
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash
        ? window.location.hash.replace('#', '')
        : window.location.pathname;
      setCurrentPath(path || '/');
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    try {
      window.history.pushState(null, '', path);
    } catch {
      window.location.hash = path;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route parser
  const renderCurrentPage = () => {
    // Parse query params if any
    const [pathOnly, queryString] = currentPath.split('?');
    const params = new URLSearchParams(queryString || '');
    const queryCategory = params.get('cat') || undefined;
    const searchParam = params.get('q') || undefined;

    // 1. Home
    if (pathOnly === '/' || pathOnly === '') {
      return (
        <Home
          onNavigate={navigateTo}
          savedSlugs={savedSlugs}
          onToggleSave={toggleSave}
        />
      );
    }

    // 2. Individual Destination: /destinations/:slug
    if (pathOnly.startsWith('/destinations/')) {
      const slug = pathOnly.replace('/destinations/', '');
      return <DestinationDetail slug={slug} onNavigate={navigateTo} />;
    }

    // 3. Destinations directory: /destinations
    if (pathOnly === '/destinations') {
      return (
        <DestinationsPage
          onNavigate={navigateTo}
          initialCategory={queryCategory}
          initialQuery={searchParam}
        />
      );
    }

    // 4. Individual Blog: /blogs/:slug
    if (pathOnly.startsWith('/blogs/')) {
      const slug = pathOnly.replace('/blogs/', '');
      return (
        <BlogArticleDetail
          slug={slug}
          onNavigate={navigateTo}
          isSaved={savedSlugs.includes(slug)}
          onToggleSave={toggleSave}
        />
      );
    }

    // 5. Blogs listing: /blogs
    if (pathOnly === '/blogs') {
      return (
        <BlogsPage
          onNavigate={navigateTo}
          savedSlugs={savedSlugs}
          onToggleSave={toggleSave}
          initialCategory={queryCategory}
          initialQuery={searchParam}
        />
      );
    }

    // 6. Heritage
    if (pathOnly === '/heritage') {
      return <HeritagePage onNavigate={navigateTo} />;
    }

    // 7. Nature & Wildlife
    if (pathOnly === '/nature') {
      return <NaturePage onNavigate={navigateTo} />;
    }

    // 8. Food & Culture
    if (pathOnly === '/food-and-culture') {
      return <FoodAndCulturePage onNavigate={navigateTo} />;
    }

    // 9. Travel Guide
    if (pathOnly === '/travel-guide') {
      return <TravelGuidePage onNavigate={navigateTo} />;
    }

    // 10. Contact
    if (pathOnly === '/contact') {
      return <ContactPage />;
    }

    // 11. Bookmarks
    if (pathOnly === '/bookmarks') {
      return (
        <BookmarksPage
          onNavigate={navigateTo}
          savedSlugs={savedSlugs}
          onToggleSave={toggleSave}
        />
      );
    }

    // Fallback to Home
    return (
      <Home
        onNavigate={navigateTo}
        savedSlugs={savedSlugs}
        onToggleSave={toggleSave}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#24211D]">
      {/* Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        savedCount={savedSlugs.length}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Global SEO Audit & Keyword Mapping Modal */}
      <SeoAuditModal
        isOpen={isSeoAuditOpen}
        onClose={() => setIsSeoAuditOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenSeoAudit={() => setIsSeoAuditOpen(true)}
      />
    </div>
  );
}
