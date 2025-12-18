export type MapPlace = {
  id: string;
  title: string;
  shortDescription?: string;
  lat: number;
  lng: number;
  storyId?: string;
  compareId?: string;
};

export const mapPlaces: MapPlace[] = [
  {
    id: "main-street",
    title: "الشارع الرئيسي",
    shortDescription: "المحلات القديمة والجديدة على الشارع الرئيسي.",
    lat: 31.809,
    lng: 35.10899,
    compareId: "main-street",
  },
  {
    id: "school",
    title: "المدرسة الثانوية",
    shortDescription: "مكان مشروع المتحف المدرسي.",
    lat: 31.8112,
    lng: 35.1078,
    compareId: "school",
  },
  {
    id: "old-mosque",
    title: "المسجد القديم",
    shortDescription: "أحد أقدم معالم البلدة.",
    lat: 31.8075,
    lng: 35.1078,
  },
  {
    id: "spring",
    title: "عين الماء",
    shortDescription: "مكان تجمع الناس قديماً حول الماء.",
    lat: 31.80758,
    lng: 35.10788,
  },
];
