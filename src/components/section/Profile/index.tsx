import Category from "@/components/common/Category";

/** 블로그 소개 섹션 */
export default function Profile() {
  return (
    <section className="text-center">
      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4" />
      <h2 className="text-3xl font-bold mb-2">안녕하세요!</h2>
      <p className="text-gray-600 mb-4">
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
      <div className="flex justify-center gap-4 mb-4">
        <Category key="1" category="React" />
        <Category key="2" category="Nextjs" />
        <Category key="3" category="Typescript" />
        <Category key="4" category="Storybook" />
        <Category key="5" category="Vite" />
        <Category key="6" category="AWS" />
        <Category key="7" category="김치찌개" />
      </div>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-gray-600 hover:text-black hover:underline">
          GitHub
        </a>
        <a href="#" className="text-gray-600 hover:text-black hover:underline">
          Resume
        </a>
      </div>
    </section>
  );
}
