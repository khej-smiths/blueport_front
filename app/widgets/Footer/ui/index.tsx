import { About } from "./About";
import { Contact } from "./Contact";
import { Links } from "./Links";

export function Footer() {
  return (
    // Footer
    <footer className="border-t" role="article" aria-label="footer-section">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <About />
          <Links />
          <Contact />
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2024 EPlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
