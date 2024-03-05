import styles from "./styles.module.css";

export interface Props {
  setQuantity: (value: number) => void;
  quantity: number;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const QuantityCounter: React.FC<Props> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex flex-row	">
      <button
        id="counter-decrement"
        onClick={() => {
          setQuantity(quantity - 1);
        }}
        className={styles.quantityBtn}
      >
        -
      </button>
      <input
        id="counter-value"
        type="number"
        value={quantity}
        className={styles.counterValue}
        onChange={(e) => {
          e.preventDefault();
          setQuantity(Number(e.target.value));
        }}
      />
      <button
        id="counter-increment"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className={styles.quantityBtn}
      >
        +
      </button>
    </div>
  );
};

QuantityCounter.displayName = "QuantityCounter";

export default QuantityCounter;
