export type MapPlace = {
  id: string;
  title: string;
  shortDescription?: string;
  lat: number;
  lng: number;

  placeId: string;
  storyId?: string;
  compareId?: string;
};

export const mapPlaces: MapPlace[] = [
  {
    id: "main-street-pin",
    title: "الشارع الرئيسي",
    shortDescription: "المحلات القديمة والجديدة على الشارع الرئيسي.",
    lat: 31.809,
    lng: 35.10899,
    placeId: "main-street",
    
  },
  {
    id: "school-pin",
    title: "المدرسة الثانوية",
    shortDescription: "مكان مشروع المتحف المدرسي.",
    lat: 31.8112,
    lng: 35.1078,
    placeId: "school",
    //compareId: "school",
  },
  {
    id: "caravan-pin",
    title: "مطعم كروان",
    shortDescription: "من اقدم مطاعم القريه",
    lat: 31.8098,
    lng: 35.1062,
    compareId: "caravan",
    placeId: "caravan",
  },
  {
    id: "old-mosque-pin",
    title: "المسجد القديم",
    shortDescription: "أحد أقدم معالم البلدة.",
    lat: 31.8075,
    lng: 35.1078,
    placeId: "old-mosque",
  },
  {
    id: "spring-pin",
    title: "عين الماء",
    shortDescription: "مكان تجمع الناس قديماً حول الماء.",
    lat: 31.80758,
    lng: 35.10788,
    compareId: "spring",
    placeId: "spring",
  },
];
