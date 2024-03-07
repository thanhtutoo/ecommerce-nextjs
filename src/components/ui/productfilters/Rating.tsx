import { FC } from "react";

import { MdStar } from "react-icons/md";

const Rating: FC<{
  value: number;
  onChange: (star: number) => void;
}> = ({ value, onChange }) => {
  console.log("value", value);
  const handleOnClick = (star: number) => {
    onChange(star);
  };

  const isStarActive = (star: number, value: number) => {
    return value && star <= value;
  };

  return (
    <div className="max-w-[360px] md:max-w-[200px] mx-auto w-full">
      <label
        htmlFor="category"
        className="block text-md font-bold text-gray-700"
      >
        Rating
      </label>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleOnClick(star)}
          className={`text-lg cursor-pointer ${
            isStarActive(star, value) ? "text-yellow-500" : "text-gray-300"
          }`}
          role="radio"
          data-testid={`rating-${star}`}
          aria-label={`${star} star${star === 1 ? "" : "s"}`}
        >
          <MdStar
            size={40}
            color={isStarActive(star, value) ? "#e9b306" : "#d1d5db"}
          />
        </button>
      ))}
    </div>
  );
};

export default Rating;
