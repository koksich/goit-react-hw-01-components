import PropTypes from 'prop-types';
import { FriendAvatar, FriendItem, FriendName, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus status={isOnline ? 'green' : 'red'}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
