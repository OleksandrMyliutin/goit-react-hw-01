import s from './Profile.module.css';
const Profile = ({name, tag, location, image, stats}) => {
    return (
    <div className={s.wrapper}>
         <div className={s.profile}>
          <img className ={s.avatar}
         src={image}
           alt="User avatar"
           width={100}
          />
          <p className={s.textBlack}>{name}</p>
          <p className={s.textGray}>@{tag}</p>
          <p className={s.textGray}>{location}</p>
         </div>
        
         <ul className={s.stats}>
          <li className={s.statsItem}>
          <span className={s.textBlack}>Followers</span>
           <span className={s.textBlack}>{stats.followers}</span>
          </li>
          <li className={s.statsItem}>
           <span className={s.textBlack}>Views</span>
           <span className={s.textBlack}>{stats.views}</span>
          </li>
          <li className={s.statsItem}>
           <span className={s.textBlack}>Likes</span>
           <span className={s.textBlack}>{stats.likes}</span>
          </li>
         </ul>
    </div>
        );
};
export default Profile;