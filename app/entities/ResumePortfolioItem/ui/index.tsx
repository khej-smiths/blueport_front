import { Link } from "lucide-react";

export function ResumePortfolioItem() {
  return (
    <li className="border-border flex items-center gap-2 rounded-lg border p-4">
      <Link className="text-muted-foreground h-4 w-4" />
      <a
        className="text-primary hover:underline"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        링크
      </a>
    </li>
  );
}
