import React from "react";
import Product from "../components/Product";
import Menu from "../components/Menu";

class Home extends React.Component {
  render() {
    const { ...products } = this.props.products;
    return (
      <>
        <Menu />
        <Product products={products} />
      </>
    );
  }
}

export default Home;
