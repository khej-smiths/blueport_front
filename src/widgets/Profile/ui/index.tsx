import { Category, DefaultProfile } from "@/shared";

import { ProfileLinks } from "./ProfileLinks";

/** 블로그 소개 섹션 */
export function Profile() {
  return (
    <section className="flex flex-col items-center gap-4">
      <DefaultProfile variant="avatar" />
      <h2 className="text-3xl font-bold">안녕하세요!</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.
      </p>
      <div className="flex justify-center gap-4">
        <Category key="1" category="React" />
        <Category key="2" category="Nextjs" />
        <Category key="3" category="Typescript" />
        <Category key="4" category="Storybook" />
        <Category key="5" category="Vite" />
        <Category key="6" category="AWS" />
        <Category key="7" category="김치찌개" />
      </div>
      <ProfileLinks />
    </section>
  );
}
