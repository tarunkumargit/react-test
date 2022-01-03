import { useState } from 'react';
import './userCard.scss';
import Location from '../Location/Location';
import Phone from '../Phone/Phone';
import Modal from '../Modal/Modal';
import CardBody from '../CardBody/CardBody';

const UserCard = ({ userData }) => {
  // Handling modal
  const [openModal, setOpenModal] = useState(false);

  // Formatting the date
  let oldDate = userData.dob.date;
  let timestamp = new Date(oldDate).getTime();
  let Day = new Date(timestamp).getDate();
  let Month = new Date(timestamp).getMonth() + 1;
  let Year = new Date(timestamp).getFullYear();
  let formatDate = `${Day}/${Month}/${Year}`;

  return (
    <div className="card">
      <div className="cardImg">
        <img src={userData.picture.thumbnail} alt="" />
      </div>

      <div className="cardTitle">
        <h3 className="username" onClick={() => setOpenModal(true)}>
          {userData.login.username}
        </h3>
        {openModal && <Modal closeModal={setOpenModal} userData={userData} />}
      </div>

      <div className="cardBody">
        <CardBody
          title="Full name:"
          desc={`${userData.name.first}  ${userData.name.last}`}
        />
        <CardBody title="DOB:" desc={formatDate} />
        <CardBody title="Email:" desc={userData.email} />
        <CardBody
          title="Phone Number:"
          desc={<Phone number={userData.phone} />}
        />
        <CardBody
          title="Address:"
          desc={<Location location={userData.location} />}
        />
      </div>
    </div>
  );
};

export default UserCard;
