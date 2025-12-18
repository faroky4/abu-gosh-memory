export default function FeatureCards() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <div className="rounded-xl bg-white shadow-sm p-4 border border-slate-100">
        <h4 className="font-semibold text-sm mb-2">البيوت والبناء</h4>
        <p className="text-xs text-slate-600">
          صور للبيوت الحجرية القديمة، الساحات، والأزقة مع وصف لكل صورة.
        </p>
      </div>

      <div className="rounded-xl bg-white shadow-sm p-4 border border-slate-100">
        <h4 className="font-semibold text-sm mb-2">الحياة اليومية</h4>
        <p className="text-xs text-slate-600">
          كيف كان الناس يتسوقون، يتنقلون، ويلتقون في الحارة والمضافات.
        </p>
      </div>

      <div className="rounded-xl bg-white shadow-sm p-4 border border-slate-100">
        <h4 className="font-semibold text-sm mb-2">التعليم والمدرسة</h4>
        <p className="text-xs text-slate-600">
          قصص وصور عن أولى الصفوف والمعلمين وكيف كانت الدراسة زمان.
        </p>
      </div>
    </div>
  );
}