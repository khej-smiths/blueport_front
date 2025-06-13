import { Link } from "react-router";

import { ROUTE } from "@/shared";

export function Content() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm whitespace-pre-line">
        {`하지만 블로그를 방문해 주신 분들을 위해
기능을 이용해 볼 수 있도록 로그인하지 않고
글쓰기를 체험할 수 있게 만들어 봤습니다.

글쓰기를 체험해보고 싶으시다면 아래 버튼을 눌러
다음 페이지로 입장해 주세요!

방문해주셔서 감사합니다!😄`}
      </p>
      <Link to={`${ROUTE.EDITOR}?demo=true`}>
        <p className="text-sm underline">글쓰기 체험하기</p>
      </Link>
    </div>
  );
}
