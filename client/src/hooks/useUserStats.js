import { useContext } from 'react';
import { UserStatsContext } from '../contexts/UserStatsContext';

const useUserStats = () => useContext(UserStatsContext);

export default useUserStats;