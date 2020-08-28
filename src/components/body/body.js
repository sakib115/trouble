import React, { useState } from 'react';
import Course from './course/course'
import Cart from './cart/cart'
import './body.css'
const body = () => {
    const courses = [
        { name: "HTML5", price: 9, img: "https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" },
        { name: "Javascript", price: 19, img: "https://cdn.worldvectorlogo.com/logos/javascript.svg" },
        { name: "Css3", price: 9, img: "https://image.flaticon.com/icons/svg/25/25462.svg" },
        { name: "Boostrap", price: 19.9, img: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" },
        { name: "Angular", price: 19.9, img: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
        { name: "PhP", price: 16.5, img: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
        { name: "React", price: 25.3, img: "https://cdn.worldvectorlogo.com/logos/react.svg" },
        { name: "React Router", price: 8, img: "https://cdn.worldvectorlogo.com/logos/react-router.svg" },
        { name: "Python", price: 17, img: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "Ruby", price: 6, img: "https://cdn.worldvectorlogo.com/logos/ruby.svg" },
        { name: "C#", price: 19.9, img: "https://cdn.worldvectorlogo.com/logos/c--4.svg" },
        { name: "C++", price: 14, img: "https://cdn.worldvectorlogo.com/logos/c.svg" },
        { name: "C", price: 12.9, img: "https://cdn.worldvectorlogo.com/logos/c-2975.svg" },
        { name: "GitHub", price: 4.5, img: "https://cdn.worldvectorlogo.com/logos/github-1.svg" },
        { name: "MongoDB", price: 12.3, img: "https://cdn.worldvectorlogo.com/logos/mongodb.svg" }
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cart, setCart] = useState([]);
    const clicked = (props) => {
        const newCart = [...cart, props];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="course-container">
                {courses.map(
                    course => 
                    <Course course={course} clicked={clicked}></Course>
                )}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default body;