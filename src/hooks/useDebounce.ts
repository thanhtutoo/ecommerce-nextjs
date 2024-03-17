import { useEffect, useState } from "react";

function useDebounce<T>(
  callback: (value: T) => void,
  delay: number
): (value: T) => void {
  const [pendingValue, setPendingValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    if (pendingValue !== undefined) {
      const handler = setTimeout(() => {
        callback(pendingValue);
        setPendingValue(undefined);
      }, delay);

      return () => clearTimeout(handler);
    }
  }, [pendingValue, delay, callback]);

  return (value: T) => setPendingValue(value);
}

export default useDebounce;
