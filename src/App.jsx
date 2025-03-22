import Profile from './components/Profile/Profile'
import userData from './assets/userData.json'
import FriendList from './components/FriendList/FriendList'
import friends from './assets/friends.json'

const App = () => {
  return (
  <>
    <Profile 
      name = {userData.username}
      tag = {userData.tag}
      location = {userData.location}
      image = {userData.avatar} 
      stats = {userData.stats}
    />
    
    <ul className='wrapper'>
      {friends.map((friendList, idx ) => (
        <FriendList
          key = {idx}
          avatar = {friendList.avatar}
          name = {friendList.name}
          isOnline = {friendList.isOnline}
        />
      ))}
    </ul>
  </>
  );
}

export default App
