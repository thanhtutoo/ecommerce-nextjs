import React, { FC, useState, useEffect, ChangeEvent } from "react";
import Input from "../Input";
import Button from "../Button";

export interface PriceRangeProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceRange: FC<PriceRangeProps> = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleMinValChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    setLocalValue([newMin, localValue[1]]);
  };

  const handleMaxValChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    setLocalValue([localValue[0], newMax]);
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
        value={localValue[1]}
        onChange={handleMaxValChange}
      />
      <div className="flex items-center mt-6">
        <Button
          onClick={() => onChange(localValue)}
          className="max-w-[360px] mx-auto w-full rounded-md h-10 flex items-center justify-center"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default PriceRange;
