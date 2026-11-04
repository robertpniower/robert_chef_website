// src/components/LanguageSwitcher.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';

// Define available languages with flags and labels
const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'Español', short: 'ES', flag: '🇪🇸' },
  { code: 'ca', label: 'Català', short: 'CA', flag: 'CA' }, // Or use 🇦🇩 / custom flag icon if preferred
] as const;

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find the currently selected language details
  const selectedLang = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Switch locale while maintaining current path
  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale === currentLocale) return;

    // Replace locale prefix in the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 bg-white/80 hover:bg-stone-100 text-stone-700 hover:text-stone-900 text-xs font-semibold tracking-wider transition-all shadow-xs focus:outline-hidden"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{selectedLang.flag}</span>
        <span>{selectedLang.short}</span>
        <ChevronDown size={14} className={`text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Floating Menu Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white shadow-lg border border-stone-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors ${
                currentLocale === lang.code
                  ? 'bg-stone-100 text-stone-900 font-semibold'
                  : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
              <span className="text-[10px] uppercase text-stone-400 font-mono">{lang.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
