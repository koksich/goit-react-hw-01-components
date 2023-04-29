import PropTypes from 'prop-types';
import { Avatar, Description, Item, Label, Name, ProfileCard, Stats, Tag } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <p>{location}</p>
      </Description>

      <Stats>
        <Item>
          <Label className="label">Followers</Label>
          <span className="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <span className="quantity">{stats.views}</span>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <span className="quantity">{stats.likes}</span>
        </Item>
      </Stats>
    </ProfileCard>
  );
};


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};