const Location = ({ location }) => {
  return (
    <>
      <p>
        {location.street.number},{location.city}
      </p>
      <p>
        {location.country},{location.postcode}
      </p>
    </>
  );
};

export default Location;
