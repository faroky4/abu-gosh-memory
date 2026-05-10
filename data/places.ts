// data/places.ts

export type Place = {
  id: string;
  title: string;       // اسم المكان
  beforeSrc: string;   // صورة زمان
  afterSrc: string;    // صورة اليوم
  lat: number;
  lng: number;
  description?: string;
  compareInitial?: number;    // 0..100
  storyIds?: string[];
  tags?: string[];
};

export const places: Place[]  = [
  // {
  //   id: "main-street",
  //   title: "الشارع الرئيسي",
  //   beforeSrc: "/images/main-street-old.jpg",
  //   afterSrc: "/images/main-street-new.jpg",
  //   description: "نفس المكان بزاويتين (زمان/اليوم).",
  //   compareInitial: 55,
  //   lat: 31.809,
  //   lng: 35.10899,
  //   storyIds: ["harvest-days"],
  //   tags: ["شوارع", "تجارة"],
  // },

  {
    id: "school",
    title: "المدرسة",
    beforeSrc: "/images/school-old.jpg",
    afterSrc: "/images/school-new.jpg",
    lat: 31.8112,
    lng: 35.1078,
    description: "مكان مشروع المتحف المدرسي.",
    compareInitial: 40,
    storyIds: ["first-school-day"],
    tags: ["تعليم", "مدرسة"],
  },

  {
    id: "caravan",
    title: "مطعم كروان",
    description: "من اقدم مطاعم القريه",
    lat: 31.8098,
    lng: 35.1062,
    beforeSrc: "/images/old-caravan.jpg",
    afterSrc: "/images/new-caravan.jpg",
    compareInitial: 55,
    storyIds: ["caravan-memories"],
    tags: ["طعام", "تجارة"],
  },
  {
    id: "old-mosque",
    title: "المسجد القديم",
    description: "أحد أقدم معالم البلدة.",
    beforeSrc: "/images/old-1.jpg",
    afterSrc: "/images/new-1.jpg",
    lat: 31.8075,
    lng: 35.1078,
    storyIds: ["mosque-history"],
    tags: ["دين", "معالم"],
  },
  {
    id: "spring",
    title: "عين الماء",
    description: "مكان تجمع الناس قديماً حول الماء.",
    lat: 31.80758,
    lng: 35.10788,
    beforeSrc: "/images/old-ein.jpg",
    afterSrc: "/images/new-ein.jpg",
    compareInitial: 50,
    storyIds: ["ein-memories"],
    tags: ["طبيعة", "معالم"],
  },

];