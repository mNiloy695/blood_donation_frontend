import React from 'react';
import BloodImage from '../assets/images/blood_cell.jpg';
import { Link } from 'react-router-dom';

const Blood_Card = (props) => {
  const emailAddress = "example@domain.com"; // Replace with the email address you want to send to

  return (
    <>
      <div className="flex rounded-md transform transition-all hover:-translate-y-2 flex-col justify-center p-4 shadow-md w-[300px]">
        <img className="flex items-center rounded-md" src={BloodImage} alt="blood cell image" />
        <div className="m-2">
          <h1><span className="font-bold">Name:</span> {props.name}</h1>
          <h3><span className="font-semibold">Blood Group:</span> {props.blood_group}</h3>
          <h3><span className="font-semibold">Phone: </span> {props.phone}</h3>
          <h3><span className="font-semibold">Unit:</span> {props.unit}</h3>
          <h3><span className="font-semibold">Address: </span> {props.address}</h3>
          <h3><span className="font-semibold">Address: </span> {props.email}</h3>
          <div className="mt-4 flex justify-between">
            <Link to={`/blood/${props.id}`}>
              <button className="bg-red-600 font-semibold py-2 px-8 rounded-md">
                Apply
              </button>
            </Link>
            {/* Email Button */}
            <a href={`mailto:${props.email}`} className="flex items-center bg-gray-700 font-semibold py-2 px-4 rounded-md text-white hover:bg-blue-700">
            <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blood_Card;
