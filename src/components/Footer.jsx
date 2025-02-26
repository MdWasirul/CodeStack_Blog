import { Link } from "react-router-dom";
const Footer = () => {
  const footerLinks = [
    {
      label: "Privacy",
      link: "/privacy",
    },
    {
      label: "Terms",
      link: "/terms",
    },
    {
      label: "Contact",
      link: "/contact",
    },
    {
      label: "Blog",
      link: "/blog",
    },
  ];
  const socialMedia = [
    {
      id: 1,
      src: "./icons/discord.svg",
      alt: "Discord",
    },
    {
      id: 2,
      src: "icons/facebook.svg",
      alt: "Facebook",
    },
    {
      id: 3,
      src: "icons/telegram.svg",
      alt: "Telegram",
    },
    {
      id: 4,
      src: "icons/instagram.svg",
      alt: "Instagram",
    },
  ];

  return (
    <div className="grid grid-cols-3 items-center  bg-blue-950 text-white">
      <div className="">
        <h1 className=" font-bold text-2xl ml-10">CodeStack</h1>
      </div>
      <div>
        <ul className=" flex justify-center items-center flex-wrap  gap-5">
          {footerLinks.map((footer, i) => (
            <li key={i} className=" hover:bg-blue-900 rounded-full px-2 ">
              <Link to={footer.link}>{footer.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex justify-center items-center flex-wrap">
          {socialMedia.map((icon) => (
            <li key={icon.id} className="m-3 cursor-pointer">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-[50px] h-[50px]"
              ></img>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
