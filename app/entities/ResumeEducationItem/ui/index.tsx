export function ResumeEducationItem() {
  return (
    <li className="border-border flex rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-thin">학교명</p>
        <div className="flex items-baseline gap-2">
          <div className="flex flex-col">
            <p className="text-muted-foreground text-sm">졸업여부</p>
            <div className="flex items-baseline gap-2">
              <div className="flex gap-2">
                <p className="text-muted-foreground">입학일</p>
                <p className="text-muted-foreground">-</p>
                <p className="text-muted-foreground">졸업일</p>
              </div>
              <div className="bg-muted-foreground h-3 w-[1px]" />
              <p>전공</p>
            </div>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-muted-foreground">학점</p>
          <div className="bg-muted-foreground h-3 w-[1px]" />
          <p>입력 학점 / 기준학점</p>
        </div>
      </div>
    </li>
  );
}
