const ContactSocial = ({
  social,
  isIcon,
}: {
  social: any[];
  isIcon?: boolean;
}) => {
  return (
    <div
      className={
        isIcon
          ? "flex gap-5  border rounded-full p-3 px-6 bg-main hover:border-primary"
          : "grid gap-2"
      }
    >
      {social.map((item: any, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={
              item.title === "email"
                ? `mailto:${item.url}`
                : item.title === "phone"
                  ? `https://api.whatsapp.com/send?phone=${item.url}`
                  : item.url
            }
            target="_blank"
            className="flex gap-1"
          >
            {isIcon && Icon ? (
              <span className="hover:text-slate-400 text-lg">
                <Icon />
              </span>
            ) : (
              <>
                <span className="text-text capitalize">{item.title}</span>
                <span>:</span>
                <span className="text-pink-300 hover:text-teal-300">
                  {item.text}
                </span>
              </>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default ContactSocial;
