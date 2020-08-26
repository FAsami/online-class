import React from 'react';

export default function Course(props) {
  const { name, instructor, ratings, price } = props.course;
  return (
    <div className="card mb-2 bg-light">
      <div className="card-body">
        <h5 className="card-title">Couse Name : {name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Instructor : {instructor}
        </h6>
        <p>Ratings : {ratings}</p>
        <h5>Price : {price}$</h5>
        <button
          className="btn btn-success"
          onClick={() => props.handleEnroll(props.course)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}
