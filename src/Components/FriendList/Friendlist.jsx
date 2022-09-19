import FriendListItem from './FriendListItem';
import { FriendListUl } from './FriendList.styled';

const FriendList = ({ friendList }) => {
  return (
    <FriendListUl>
      {friendList.map(friend => (
        <FriendListItem friend={friend} />
      ))}
    </FriendListUl>
  );
};

export default FriendList;
