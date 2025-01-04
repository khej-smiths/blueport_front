import PopularPostItem from "../PopularPostItem";

export default function PopularPostList() {
  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-2xl font-bold">초 인기 게시글</h2>
      <ul className="flex flex-col gap-5">
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
        <PopularPostItem />
      </ul>
    </div>
  );
}
