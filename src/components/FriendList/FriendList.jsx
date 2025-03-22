import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({ friends }) => (
    <ul className={s.wrapper}>
      {friends.map((friendList, idx ) => (
        <FriendListItem
          key = {idx}
          avatar = {friendList.avatar}
          name = {friendList.name}
          isOnline = {friendList.isOnline}
        />
      ))}
    </ul>
);
export default FriendList;

