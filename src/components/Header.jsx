import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Contact",
      link: "/contact", 
    },
  ];
  return (
    <>
      <div className="bg-blue-900 flex justify-between items-center flex-wrap text-white px-2 py-2  sticky top-0">
        <div className="text-3xl font-bold ml-14">
          <h1>CodeStack</h1>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-10 px-4 py-4 mr-6 ">
            {navLinks.map((navItem, i) => (
              <li
                key={i}
                className="text-xl transition-all duration-200 ease-in hover:text-red-500"
              >
                <Link to={navItem.link}>{navItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
