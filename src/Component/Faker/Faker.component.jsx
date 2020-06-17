import React from 'react';

const FakerComponent = (props) => {
  let { photo, firstname, email, phoneNumber } = props.student;

  return (
    <div>
      <img src={photo} alt="test" />
      <h1>{firstname}</h1>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};

export default FakerComponent;
