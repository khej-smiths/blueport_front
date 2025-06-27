import { ROUTE } from "@/shared";
import { Link } from "react-router";

interface Props {
  domain: string;
  github?: string | null;
  email?: string | null;
  resumeId?: string | null;
}

export function ProfileLinks({ domain, github, email, resumeId }: Props) {
  return (
    <div className="flex justify-center gap-4">
      {github && (
        <a
          href={github}
          target="_blank"
          className="text-gray-600 not-xl:text-sm not-xl:underline hover:text-black hover:underline"
        >
          GitHub
        </a>
      )}
      {resumeId && (
        <Link
          to={ROUTE.RESUME.replace(":domain", domain).replace(
            ":resumeId",
            resumeId
          )}
          className="text-gray-600 not-xl:text-sm not-xl:underline hover:text-black hover:underline"
        >
          Resume
        </Link>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-gray-600 not-xl:text-sm not-xl:underline hover:text-black hover:underline"
        >
          Email
        </a>
      )}
    </div>
  );
}
