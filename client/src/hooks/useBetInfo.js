import { useContext } from 'react';
import { BetInfoContext } from '../contexts/BetInfoContext';

const useBetInfo = () => useContext(BetInfoContext);

export default useBetInfo;