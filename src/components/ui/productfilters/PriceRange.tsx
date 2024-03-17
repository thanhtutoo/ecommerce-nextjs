import React, { FC, useState, useEffect, ChangeEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import useDebounce from "@/hooks/useDebounce"; // Assuming useDebounce is in the same directory

export interface PriceRangeProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceRange: FC<PriceRangeProps> = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value);
  const debouncedOnChange = useDebounce(onChange, 1500);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (newValue: [number, number]) => {
    setLocalValue(newValue);
    debouncedOnChange(newValue);
  };

  const handleMinValChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    handleChange([newMin, localValue[1]]);
  };

  const handleMaxValChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    handleChange([localValue[0], newMax]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:min-w-[360px]">
      <Input
        type="number"
        id="priceMin"
        label="Min Price"
        value={String(localValue[0])}
        onChange={handleMinValChange}
      />
      <Input
        type="number"
        id="priceMax"
        label="Max Price"
        value={String(localValue[1])}
        onChange={handleMaxValChange}
      />
    </div>
  );
};

export default PriceRange;
