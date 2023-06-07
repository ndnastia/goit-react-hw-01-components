import styles from './App.module.css'
import Profile
  from "./profile/Profile";
import Statistics
  from "./statistics/Statistics";
import FriendList from "./friend-list/FriendList";
import TransanctionHistory from "./transanction-history/TransanctionHistory";


import user from '../data/user.json';


  
export const App = () => {
  return (
    <div className={styles['app-container']}>
      <Profile {...user} />
      <Statistics title="Upload stats" />
      <FriendList />
      <TransanctionHistory />
      
    </div>
  );
};
