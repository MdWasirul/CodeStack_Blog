import { trendingBlogs } from "../../utils/trendingBlog";
import BlogCard from "./BlogCard";
const BlogCards = () => {
  return (
    <>
      <div className=" text-center m-5 px-4 py-4">
        <h1 className="text-5xl font-bold mb-5"> Top Trending Blog</h1>
        <p className="text-3xl ">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mb-10 ml-20 mr-20">
        {trendingBlogs.map((blog) => (
          <BlogCard blogData={blog} key={blog.id} />
        ))}
      </div>
    </>
  );
};

export default BlogCards;
