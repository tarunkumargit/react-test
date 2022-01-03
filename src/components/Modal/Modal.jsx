import './modal.scss';
import CardBody from '../CardBody/CardBody';
import Location from '../Location/Location';
import Phone from '../Phone/Phone';

const Modal = ({ closeModal, userData }) => {
  return (
    <div className="modal">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>

          <div className="modalTitle">
            <h2>More user information</h2>
          </div>
          <hr />
          <div className="modalBody">
            <CardBody
              title="Full name:"
              desc={`${userData.name.first}  ${userData.name.last}`}
            />
            <CardBody title="Email:" desc={userData.email} />
            <CardBody title="Login Username:" desc={userData.login.username} />
            <CardBody title="Login Password:" desc={userData.login.password} />
            <CardBody title="Age:" desc={userData.dob.age} />
            <CardBody title="Gender:" desc={userData.gender} />

            <CardBody
              title="Phone Number:"
              desc={<Phone number={userData.phone} />}
            />
            <CardBody
              title="Full Address:"
              desc={<Location location={userData.location} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
