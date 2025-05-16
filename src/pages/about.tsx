import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>درباره ما</h1>
        </div>
        <h3 className="max-w-xl text-center text-gray-700 dark:text-gray-300 leading-relaxed text-xl">
             .فانیتو جاییه برای همه کسایی که دنبال یه ذره خنده، سرگرمی و حال خوب هستن! ما هر روز سعی می‌کنیم محتوای جذاب، باحال و متنوعی برات بیاریم تا حتی توی شلوغ‌ترین روزات هم یه لبخند مهمون لبت باشه. با فانیتو همیشه می‌تونی یه چیزی برای سرگرم شدن پیدا کنی؛ از بازی و چالش گرفته تا مطالب جالب
        </h3>

      </section>
    </DefaultLayout>
  );
}
