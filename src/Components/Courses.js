import React, { useState } from 'react';
import Course from './Course';
import courseData from './../data';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  const handleEnroll = (course) => {
    setCourses([...courses, course]);
  };

  const totalPrice = courses.reduce(
    (totalPrice, course) => totalPrice + course.price,
    0
  );

  return (
    <div className="d-flex">
      <div className="course">
        {courseData.map((course) => (
          <Course key={course.id} course={course} handleEnroll={handleEnroll} />
        ))}
      </div>
      <div className="cart pl-2">
        <h5>Course Summary</h5>
        <p> Total Courses : {courses.length}</p>
        <hr />
        <h6>Total Price : {totalPrice}</h6>
      </div>
    </div>
  );
}
