import PropTypes from 'prop-types';

import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
  Item,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} width="450" alt="User avatar" />
        <Name> {username}</Name>
        <Tag> {tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity> {followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity> {views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity> {likes}</Quantity>
        </Item>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
