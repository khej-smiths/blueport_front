interface Props {
  github?: string | null;
  email?: string | null;
}

export function ProfileLinks({ github, email }: Props) {
  return (
    <div className="flex justify-center gap-4">
      {github && (
        <a
          href={github}
          target="_blank"
          className="text-gray-600 hover:text-black hover:underline"
        >
          GitHub
        </a>
      )}
      <a href="#" className="text-gray-600 hover:text-black hover:underline">
        Resume
      </a>
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-gray-600 hover:text-black hover:underline"
        >
          Email
        </a>
      )}
    </div>
  );
}
