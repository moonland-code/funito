import { Link } from "@heroui/link";

import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>فانیتو،&nbsp;</span>
          <span className={title({ color: "violet" })}>سرگرمی‌&nbsp;</span>
          <br />
          <span className={title()}>
          !برای همه‌ی لحظه‌هات
          </span>
          <div className={subtitle({ class: "mt-4" })}>
          ... سرگرمی‌, معما, جوک و 
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={'./topics'}
          >
            موضوعات 
          </Link>

        </div>

      </section>
    </DefaultLayout>
  );
}
