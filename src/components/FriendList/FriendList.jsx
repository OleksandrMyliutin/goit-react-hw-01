import s from "./FriendList.module.css";
const FriendList = ({avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
            <h3 className={s.name}>{name}</h3>
            <p >{isOnline ? <h4 className={ s.isOnline}>Online</h4>:<h4 className={s.isOffline}> Offline</h4>}</p>
        </li>
    );
};
export default FriendList;