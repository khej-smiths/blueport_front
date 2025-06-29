import { ReadResumeQuery } from "@/shared";
import { Link } from "lucide-react";

interface Props {
  item: NonNullable<
    NonNullable<ReadResumeQuery["readResume"]>["portfolioList"]
  >[number];
}

export function ResumePortfolioItem({ item }: Props) {
  return (
    <li className="border-border flex items-center gap-2 rounded-lg border p-4">
      <Link className="text-muted-foreground h-4 w-4" />
      <a
        className="text-primary hover:underline"
        href={item.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {item.url}
      </a>
    </li>
  );
}
