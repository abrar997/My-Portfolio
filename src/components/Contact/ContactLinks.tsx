const ContactLinks = (data: { ContactDataProps: { social: any[] } }) => {
  return (
    <div>
      {data.ContactDataProps.social.map((item: any, idx) => (
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
          <span className="text-text capitalize">{item.title}</span>
          <span>:</span>
          <span className="text-pink-300 hover:text-teal-300">{item.text}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
