export default function Footer() {
  return (
    // Footer
    <footer
      className="border-t mt-16"
      role="article"
      aria-label="footer-section"
    >
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About 섹션 */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <p className="text-sm text-gray-600">
              About에는 어떤 내용이 들어가는게 좋을까요? 그냥 빼버리는게
              좋을까요?
            </p>
          </div>
          {/* 링크 섹션 */}
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Pangho297 GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  dev-eunjiLee GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  RSS
                </a>
              </li>
            </ul>
          </div>
          {/* Contact 섹션 */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-600">이메일: example@email.com</p>
            <p className="text-sm text-gray-600">이메일: example@email.com</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 EPlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
