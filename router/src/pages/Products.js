import React, { Component } from "react";
import '../App.css';
import p1 from '../issets/images/1.jpg';
import p2 from '../issets/images/2.jpg';
import p3 from '../issets/images/3.jpg';
import p4 from '../issets/images/4.jpg';

class Products extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: "Princess Dress",
        img: p1,
        price: 1400000
      },
      {
        id: 2,
        name: "Princess Dress",
        img: p2,
        price: 1400000
      },
      {
        id: 3,
        name: "Princess Dress",
        img: p3,
        price: 1400000
      },
      {
        id: 4,
        name: "Princess Dress",
        img: p3,
        price: 1400000
      }
    ];

    
    var    result = products.map((item, index) => {
          return (
            <div className="column" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top imgProduct"
                  src={item.img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <a href="#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          );
          });
    return <div className="row">{result}</div>;
  }
}

export default Products;
