import PropTypes from 'prop-types';
import { Status, Item, Image, Description } from './FriendList.styled';

const FriendListItem = ({ friend }) => {
  return (
    <Item key={friend.id}>
      <Status
        className={'status ' + friend.isOnline.toString()}
        status={friend.isOnline ? 'online' : 'offline'}
      ></Status>
      <Image src={friend.avatar} alt="User avatar" width="48" />
      <Description>{friend.name}</Description>
    </Item>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendListItem;
