import React from 'react';
import './cart.css'
const cart = (props) => {
    const { cart } = props;
    let element2 = 0;
    for (let i = 0; i < props.cart.length; i++) {
        let element = props.cart[i].course.price;
        element2 += element;
    }
    return (
        <div className="cart">
            <h1><span className="inner-head">Course Added: <span id="courseNumber">{props.cart.length}</span></span></h1>
            <div className="cart-table-head">
                <h1 className="inner-head">Name</h1>
                <h1 className="inner-head">Price</h1>
            </div>
                {
                    cart.map(ct =>
                        <div className="cart-table-row">
                            <div className="cart-table-row-name">
                            <img src={ct.course.img} alt="" className="cart-table-img" />
                                <h1 className="cart-table-name">{ct.course.name}</h1>
                            </div>
                            <div className="cart-table-row-price">${ct.course.price}</div>
                        </div>
                    )
                }
            <div className="cart-total">
                <h1> <span className="inner-head"> Total Price</span></h1>
                <h1> <span className="navy"> ${element2}</span></h1>
            </div>
            <button className="cart-btn">Checkout</button>
        </div>
    );
};

export default cart;