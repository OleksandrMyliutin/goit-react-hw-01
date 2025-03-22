import clsx from "clsx";
import s from "./FriendListItem.module.css";
const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
            <h2 className={s.name}>{name}</h2>
            <p >{isOnline ? <h4 className={clsx(s.status, s.isOnline)}>Online</h4>:<h4 className={clsx(s.status, s.isOffline)}> Offline</h4>}</p>
        </li>
    );
};
export default FriendListItem;
