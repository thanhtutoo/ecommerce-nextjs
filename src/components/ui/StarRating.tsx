import { FC } from "react";
import { IoIosStarHalf } from "react-icons/io";
import { MdStar } from "react-icons/md";

interface RatingProps {
  rating?: number;
}

const StarRating: FC<RatingProps> = ({ rating = 0 }) => {
  const fullStars = Math.floor(rating);

  const halfStars = Math.ceil(rating) - fullStars;

  const stars = [];

  let halfStarPushed = false;

  for (let i = 0; i < 5; i++) {
    if (fullStars > i) {
      stars.push(<MdStar size={20} key={i} color={"#e9b306"} />);
    } else {
      if (halfStars && !halfStarPushed) {
        stars.push(<IoIosStarHalf size={20} key={i} color={"#e9b306"} />);
        halfStarPushed = true;
      } else {
        stars.push(<MdStar size={20} key={i} color={"#d1d5db"} />);
      }
    }
  }

  return (
    <div className="flex">
      <span className="flex pt-1 text-gray-300">
        {stars.length > 0 ? stars : null}
      </span>
    </div>
  );
};

export default StarRating;
