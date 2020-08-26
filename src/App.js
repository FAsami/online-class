import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Components/Courses';

function App() {
  return (
    <div className="container mt-3">
      <h1 className="text-center my-5">Available online Courses</h1>
      <Courses />
    </div>
  );
}

export default App;
