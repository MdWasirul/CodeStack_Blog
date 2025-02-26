import { recentBlogs } from "../../utils/recentBlog";
import BlogCard from "./BlogCard";

const RecentBlog = () => {
  return (
    <>
      <div className=" flex justify-center items-center px-4 py-4">
        <h1 className="text-5xl font-semibold">
          Our Recent
          <span className="text-purple-600 ml-3">Blog</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mb-10 ml-20 mr-20 ">
        {recentBlogs.map((item) => (
          <BlogCard key={item.id} blogData={item} />
        ))}
      </div>
    </>
  );
};

export default RecentBlog;
