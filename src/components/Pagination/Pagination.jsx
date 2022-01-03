import React from 'react';
import './pagination.scss';

const Pagintaion = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pageItem">
            <a onClick={() => paginate(number)} href="!#" className="pageLink">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagintaion;
