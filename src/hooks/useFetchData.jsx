import { getFirebase } from '../services/fetchDatabase';
import { useEffect, useState } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const newData = await getFirebase();
      setData(newData);
    })();
  }, []);
  return { data };
};
