interface Props {
  userName: string;
}

export function Content({ userName }: Props) {
  return (
    <div>
      <p className="text-sm whitespace-pre-line">
        {`생성된 블로그가 없습니다. 블로그를 생성하고
${userName}님만의 항해일지를 작성해 보세요🧭`}
      </p>
    </div>
  );
}
