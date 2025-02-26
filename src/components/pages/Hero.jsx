import BlogCards from "./BlogCards";
import RecentBlog from "./RecentBlog";

const Hero = () => {
  return (
    <>
      <div>
        <div className=" bg-[url(/images/hero.webp)] h-[80vh] bg-cover bg-center flex justify-center items-center flex-wrap">
          <input
            type="text"
            placeholder="Search Here"
            className="px-4 py-4 w-120 border rounded-sm bg-gray-200  outline-none text-start  text-2xl"
          />
          <button
            className="bg-amber-300 border rounded-sm px-4 py-4 ml-5 w-32 cursor-pointer text-2xl hover:bg-amber-400"
            onClick={() => {
              console.log("Button Clicked!");
            }}
          >
            Search
          </button>
        </div>
        <BlogCards />
        <RecentBlog />
        {/* <img src="./src/utils/hero.webp" alt="HeroIMg" className="bg-cover" /> */}
      </div>
    </>
  );
};
export default Hero;
