import React from 'react';
import './cardBody.scss';

const CardBody = (props) => {
  return (
    <div className="row">
      <h5 className="title">{props.title}</h5>
      <div className="desc">{props.desc}</div>
    </div>
  );
};

export default CardBody;
