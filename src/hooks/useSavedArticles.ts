import { useState, useEffect } from 'react';

const STORAGE_KEY = 'maharashtra_tourism_saved_blogs';

export function useSavedArticles() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedSlugs));
    } catch {
      // storage unavailable or full
    }
  }, [savedSlugs]);

  const toggleSave = (slug: string) => {
    setSavedSlugs(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const isSaved = (slug: string) => savedSlugs.includes(slug);

  return { savedSlugs, toggleSave, isSaved };
}
