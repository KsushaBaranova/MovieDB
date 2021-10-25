import {useEffect, useState} from 'react';

const useDelay = (valueInput: string, delay: number) => {
  const [value, setValue] = useState(valueInput);

  useEffect(() => {
    const delayFunction = setTimeout(() => {
      setValue(valueInput);
    }, delay);

    return () => {
      clearTimeout(delayFunction);
    };
  }, [valueInput, delay]);

  return value;
};

export default useDelay;
