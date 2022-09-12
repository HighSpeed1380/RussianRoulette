import { useContext } from 'react';
import { GameInfoContext } from '../contexts/GameInfoContext';

const useGameInfo = () => useContext(GameInfoContext);

export default useGameInfo;