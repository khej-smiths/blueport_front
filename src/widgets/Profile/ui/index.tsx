import { Category } from "@/shared";
import { ProfileLinks } from "./ProfileLinks";

/** 블로그 소개 섹션 */
export function Profile() {
  return (
    <section className="text-center">
      <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-200" />
      <h2 className="mb-2 text-3xl font-bold">안녕하세요!</h2>
      <p className="mb-4 text-gray-600">
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
      <div className="mb-4 flex justify-center gap-4">
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
