import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';
import Statistics from './Components/Statistics/Statistics';
import data from './Components/Statistics/data.json';
import FriendList from './Components/FriendList/FriendList';
import friends from './Components/FriendList/friends.json';
// import Transactions from './Components/Transactions/Transactions';
// import transactions from './Components/Transactions/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendList={friends} />
      {/* <Statistics stats={data} />; */}
    </>
  );
}
