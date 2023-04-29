import userData from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';


import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Wrapper } from './App.styled';


export const App = () => {
  return (
    <Wrapper>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </Wrapper>
  );
};
