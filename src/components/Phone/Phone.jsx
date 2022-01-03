import './phone.scss';

const Phone = ({ number }) => {
  let str = number;
  let newStr = str.replace(/-/g, '');

  return <p className="phoneNumber">{newStr}</p>;
};

export default Phone;
