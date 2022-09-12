import { useContext } from 'react';
import { FairnessContext } from '../contexts/FairnessContext';

const useFairness = () => useContext(FairnessContext);

export default useFairness;