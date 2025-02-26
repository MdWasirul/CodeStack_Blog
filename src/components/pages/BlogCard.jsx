const BlogCard = ({ blogData }) => {
  const { category, date, description, image, title } = blogData;
  console.log(blogData);
  return (
    <>
      <div className="shadow-xl">
        <img src={image} alt="BlogImage" className="  rounded-[20px] "  />
        <div className=" px-3 py-3  flex justify-start mt-10 items-center">
          <time dateTime={date} className="text-gray-600  font-normal">
            {date}
          </time>
          <button className="  rounded-full border-none font-mono bg-gray-100 px-4 py-2 cursor-pointer hover:bg-gray-200 ml-10">
            {category}
          </button>
        </div>
        <div className="cursor-pointer break-words">
          <h2 className="font-bold text-xl mb-3">{title}</h2>
          <p className=" font-[30px] text-gray-600 ">{description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
