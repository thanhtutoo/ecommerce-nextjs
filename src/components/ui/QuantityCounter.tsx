export interface Props {
  setQuantity: (value: number) => void;
  quantity: number;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const QuantityCounter: React.FC<Props> = ({ quantity = 1, setQuantity }) => {
  const handleDecreaseBtn = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  return (
    <div className="flex flex-row	items-center text-center">
      <button
        id="counter-decrement"
        onClick={handleDecreaseBtn}
        data-cy-btn="counter-decrement"
        className={
          "cursor-pointer bg-white text-black border border-1 border-solid border-gray-400 min-w-10 h-10 w-10"
        }
      >
        -
      </button>
      <input
        id="counter-value"
        type="number"
        value={quantity}
        className={"border border-gray-400  px-1 text-center w-16 h-10 "}
        onChange={(e) => {
          e.preventDefault();
          setQuantity(parseInt(e.target.value));
        }}
      />
      <button
        id="counter-increment"
        data-cy-btn="counter-increment"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className={
          "cursor-pointer bg-white text-black border border-1 border-solid border-gray-400 min-w-10  h-10 w-10"
        }
      >
        +
      </button>
    </div>
  );
};

QuantityCounter.displayName = "QuantityCounter";

export default QuantityCounter;
