import React from "react";
import { Link, Route } from "react-router-dom";
import "../App.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const products = Object.values(this.props.products);
    var result = products.map((item, index) => {
      return (
        <div className="column" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            {/* <Link to={{pathname:`products/${item.id}`, state:item}}> */}
            <Link
              to={{
                pathname: `product/${item.id}`
              }}
            >
              <img
                className="card-img-top imgProduct"
                src={item.img}
                alt="Card image cap"
                title="Click on img to display the detail"
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}</p>
              <button>Buy</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className=" product">{result}</div>
      </div>
    );
  }
}

export default Product;
