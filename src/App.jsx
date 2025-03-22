import Profile from './components/Profile/Profile'
import userData from './assets/userData.json'
import FriendList from './components/FriendList/FriendList'
import friends from './assets/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './assets/transactions.json'

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
    <table className='table-style'>
      <thead className="header-table">
              <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
              </tr>
      </thead>
      <tbody className="body-table">
        {transactions.map((transaction, idx) => (
          <TransactionHistory key = {idx}
          type = {transaction.type}
          amount = {transaction.amount}
          currency = {transaction.currency}/>
        ))}
      </tbody>
    </table>
    
  </>
  );
}

export default App
