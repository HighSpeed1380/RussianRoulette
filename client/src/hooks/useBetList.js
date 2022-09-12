import { useContext } from 'react';
import { BetListContext } from '../contexts/BetListContext';

const useBetList = () => useContext(BetListContext);

export default useBetList;