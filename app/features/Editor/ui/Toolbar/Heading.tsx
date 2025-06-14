interface Props {
  level: string;
}

export function Heading({ level }: Props) {
  return (
    <div className="font-[serif] text-[1rem] font-bold">
      H<span className="text-[0.75rem]">{level}</span>
    </div>
  );
}
