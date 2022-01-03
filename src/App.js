import './App.scss';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard/UserCard';
import Pagintaion from './components/Pagination/Pagination';

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch('https://randomuser.me/api/?results=100');
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  // Filter / Search users
  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.login.username}`.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  // Pagination
  // get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // page refresh storage

  return (
    <div className="App">
      <div className="heading">
        <h2>User Info Cards</h2>
        <input
          type="text"
          className="searchBox"
          onInput={filterCards}
          placeholder="Search by username here..."
        />
      </div>

      <div className="cardsContainer">
        {currentUsers.map((user, index) => (
          <UserCard key={index} userData={user} />
        ))}
      </div>

      <Pagintaion
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
