import PostTitle from "./post-title";
import CoverImage from "./cover-image";
import Date from "../Date";
import Avatar from "./Avatar";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  authorimg,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} authorimg={authorimg} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 rounded-lg">
        <CoverImage coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} authorimg={authorimg} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <p>Category</p>
        </div>
      </div>
    </>
  );
}
