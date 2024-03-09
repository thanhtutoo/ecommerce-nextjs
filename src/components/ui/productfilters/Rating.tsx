import { FC } from "react";

import { MdStar } from "react-icons/md";

const Rating: FC<{
  selectedStar: number;
  onChange: (star: number) => void;
}> = ({ selectedStar, onChange }) => {
  const handleOnClick = (star: number) => {
    onChange(star);
  };

  const isStarActive = (star: number, noOfStars: number) => {
    return noOfStars && star <= noOfStars;
  };

  return (
    <div className="max-w-[360px] mx-auto md:max-w-none md:mx-0">
      <label
        htmlFor="category"
        className="block text-md font-bold text-gray-700"
      >
        Rating
      </label>
      {[1, 2, 3, 4, 5].map((noOfStars) => (
        <button
          key={noOfStars}
          onClick={() => handleOnClick(noOfStars)}
          className={`text-lg cursor-pointer ${
            isStarActive(noOfStars, selectedStar)
              ? "text-yellow-500"
              : "text-gray-300"
          }`}
          role="radio"
          data-testid={`rating-${noOfStars}`}
          aria-label={`${noOfStars} star${noOfStars === 1 ? "" : "s"}`}
        >
          <MdStar
            size={40}
            color={
              isStarActive(noOfStars, selectedStar) ? "#e9b306" : "#d1d5db"
            }
          />
        </button>
      ))}
    </div>
  );
};

export default Rating;
