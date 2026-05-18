import { ar } from "@/messages/ar";
import { he } from "@/messages/he";

export const locales = ["ar", "he"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export interface NavDictionary {
  home: string;
  about: string;
  news: string;
  students: string;
  heritage: string;
  contact: string;
  portal: string;
}

export interface Dictionary {
  nav: NavDictionary;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaAbout: string;
    ctaHeritage: string;
    quoteText: string;
    quoteLabel: string;
  };
  stats: {
    labels: string[];
  };
  pulse: {
    badge: string;
    title: string;
    subtitle: string;
    card1: { title: string; text: string; linkLabel: string };
    card2: { badge: string; title: string; text: string; status: string };
    card3: { title: string; text: string; badge: string };
  };
  about: {
    badge: string;
    title: string;
    para1: string;
    para2: string;
    cards: Array<{ title: string; text: string }>;
  };
  impact: {
    badge: string;
    title: string;
    subtitle: string;
    teams: Array<{
      initial: string;
      title: string;
      subtitle: string;
      description: string;
      tag: string;
    }>;
    ctaLabel: string;
    ctaText: string;
  };
  heritageCta: {
    badge: string;
    title: string;
    subtitle: string;
    highlights: string[];
    ctaButton: string;
  };
  footer: {
    quickLinksLabel: string;
    contactLabel: string;
    emailLabel: string;
    phoneLabel: string;
    phonePlaceholder: string;
    copyright: string;
  };
  news: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    featured: {
      sectionLabel: string;
      imagePlaceholder: string;
      categoryBadge: string;
      date: string;
      title: string;
      excerpt: string;
      readMoreLabel: string;
    };
    grid: {
      sectionLabel: string;
      imagePlaceholder: string;
      articles: Array<{ title: string; date: string; excerpt: string }>;
      cta: { title: string; text: string; button: string };
    };
  };
  portal: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    grid: {
      enterLabel: string;
      cards: Array<{ title: string; description: string }>;
    };
    cta: {
      title: string;
      text: string;
      button: string;
    };
  };
  forms: {
    hero: { badge: string; title: string; subtitle: string };
    schoolForms: {
      heading: string;
      linkSoonLabel: string;
      items: Array<{ title: string; description: string }>;
    };
    importantFiles: {
      heading: string;
      comingSoonLabel: string;
      items: Array<{ title: string; description: string }>;
    };
    heritage: {
      heading: string;
      subtitle: string;
      comingSoonLabel: string;
      items: Array<{ title: string; description: string }>;
    };
  };
  resources: {
    hero: { badge: string; title: string; subtitle: string };
    visitLabel: string;
    sections: Array<{
      heading: string;
      resources: Array<{ description: string }>;
    }>;
    cta: { title: string; text: string; button: string };
  };
  heritage: {
    header: {
      logoTitle: string;
      logoSubtitle: string;
      menuLabel: string;
      links: {
        past: string;
        present: string;
        stories: string;
        compare: string;
        map: string;
        future: string;
      };
    };
    hero: {
      projectLabel: string;
      title: string;
      titleAccent: string;
      description: string;
      ctaPast: string;
      ctaCompare: string;
      ctaStories: string;
      floatingLabel: string;
      studentNote: string;
    };
    sections: {
      past: { title: string; subtitle: string };
      present: { title: string; subtitle: string };
      compare: {
        title: string;
        subtitle: string;
        example1Label: string;
        example2Label: string;
      };
      stories: { title: string; subtitle: string };
      videos: { title: string; subtitle: string };
      map: { title: string; subtitle: string };
      future: { title: string; subtitle: string; placeholder: string };
    };
    readMoreLabel: string;
    featureCards: Array<{ title: string; text: string }>;
    footer: {
      projectLabel: string;
      schoolName: string;
      yearLabel: string;
    };
  };
  studentsProjects: {
    hero: { badge: string; title: string; subtitle: string };
    sectionLabel: string;
    projects: Array<{
      title: string;
      team: string;
      grade: string;
      description: string;
      category: string;
    }>;
    statusLabels: { ongoing: string; complete: string };
    cta: { title: string; text: string; button: string };
  };
  common: {
    readMore: string;
    comingSoon: string;
    backToPortal: string;
    visitPlatform: string;
  };
}

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(_locale: Locale): "rtl" | "ltr" {
  // Both Arabic and Hebrew are RTL
  return "rtl";
}

const dictionaries: Record<Locale, Dictionary> = { ar, he };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
