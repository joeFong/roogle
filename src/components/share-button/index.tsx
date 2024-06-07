
export const SocialButton = ({ children, label, href, onClick }: any) => {
    return (
      <a
        className="bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm "
        target="_blank"
      >
        {children}
      </a>
    );
};