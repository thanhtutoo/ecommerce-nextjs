import React from "react";

interface Props {
  setQuantity: (value: number) => void;
  quantity: number;
}

const QuantityCounter: React.FC<Props> = ({ quantity = 1, setQuantity }) => {
  const handleDecreaseBtn = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseBtn = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <button
        id="counter-decrement"
        onClick={handleDecreaseBtn}
        className="cursor-pointer bg-black text-white border border-black min-w-10 h-10 w-10 rounded-l"
        data-testid="decrement-quantity"
        data-cy-btn="decrement-quantity"
      >
        -
      </button>
      <input
        id="counter-value"
        type="number"
        value={quantity}
        className="bg-gray-200 border-black px-4 text-center w-16 h-10"
        data-testid="quantity-input"
        onChange={(e) => {
          e.preventDefault();
          const value = parseInt(e.target.value);
          setQuantity(value >= 0 ? value : 0);
        }}
      />
      <button
        id="counter-increment"
        onClick={handleIncreaseBtn}
        className="cursor-pointer bg-black text-white border border-black min-w-10 h-10 w-10 rounded-r"
        data-testid="increment-quantity"
        data-cy-btn="increment-quantity"
      >
        +
      </button>
    </div>
  );
};

QuantityCounter.displayName = "QuantityCounter";

export default QuantityCounter;
