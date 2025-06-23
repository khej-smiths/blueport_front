export function ResumeCareerItem() {
  return (
    <li className="border-border flex rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-thin">회사명</p>
        <div className="flex items-baseline gap-2">
          <div className="flex flex-col">
            <p className="text-muted-foreground text-sm">재직여부</p>
            <div className="flex items-baseline gap-2">
              <div className="flex gap-2">
                <p className="text-muted-foreground">입사일</p>
                <p className="text-muted-foreground">-</p>
                <p className="text-muted-foreground">퇴사일</p>
              </div>
              <div className="bg-muted-foreground h-3 w-[1px]" />
              <div className="flex gap-1">
                <p className="text-muted-foreground">부서</p>
                <p className="text-muted-foreground">·</p>
                <p className="text-muted-foreground">직급</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm">담당업무</div>
      </div>
    </li>
  );
}
