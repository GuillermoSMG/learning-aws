import { useLabsStore } from '../store/labs';

export const useFilter = name => {
  const { labs } = useLabsStore(state => state);
  return labs.filter(lab => lab.category === name);
};
