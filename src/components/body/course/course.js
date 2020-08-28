import React from 'react';
import './course.css'
const course = (props) => {
    const {img, name, price} = props.course
    return (
        <div className="course-card">
            <img src={img} alt="" className="card-img" />
            <h1 className="card-title">{name}</h1>
            <h1 className="card-title">Price: <span className="navy">${price}</span></h1>
            <button className="card-btn" onClick={()=>props.clicked(props)}>Enroll Now</button>
        </div>
    );
};

export default course;