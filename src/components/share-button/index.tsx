
export const SocialButton = ({ children, href }: any) => {
    return (
      <a
        href={href}
        className="bg-white px-2 py-1 text-xs font-semibold text-gray-900"
        target="_blank"
      >
        {children}
      </a>
    );
};