// data/places.ts

export type PlaceCompare = {
  id: string;
  title: string;       // اسم المكان
  beforeSrc: string;   // صورة زمان
  afterSrc: string;    // صورة اليوم
  description?: string;
  initial?: number;    // 0..100
};

export const placesCompare: PlaceCompare[] = [
  {
    id: "main-street",
    title: "الشارع الرئيسي",
    beforeSrc: "/images/old-1.jpg",
    afterSrc: "/images/new-1.jpg",
    description: "نفس المكان بزاويتين (زمان/اليوم).",
    initial: 55,
  },
  {
    id: "school",
    title: "المدرسة",
    beforeSrc: "/images/old-1.jpg",
    afterSrc: "/images/new-1.jpg",
    description: "كيف تغير شكل المدرسة عبر السنين.",
    initial: 40,
  },
  // زيدي كمان أماكن لاحقًا…
];