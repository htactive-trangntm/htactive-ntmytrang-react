import React from "react";
import Menu from "../components/Menu";

class ProductDetail extends React.Component {
  render() {
    let product = this.props.products.filter(item => {
      if (item.id == this.props.match.params.id) {
        return item;
      }

      return null;
    });

    const { name, description, img } = product[0];

    return (
      <>
        <div>
          <Menu />
        </div>
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active">
                      <img src={img} />
                    </div>
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{name}</h3>
                  <p className="product-description">{description}</p>
                  <h4 className="price">
                    Price: <span>$180</span>
                  </h4>
                  <h5 className="sizes">
                    sizes:
                    <span className="size" data-toggle="tooltip" title="small">
                      s
                    </span>
                    <span className="size" data-toggle="tooltip" title="medium">
                      m
                    </span>
                    <span className="size" data-toggle="tooltip" title="large">
                      l
                    </span>
                    <span
                      className="size"
                      data-toggle="tooltip"
                      title="xtra large"
                    >
                      xl
                    </span>
                  </h5>
                  <div className="action">
                    <button
                      className="add-to-cart btn btn-success"
                      type="button"
                    >
                      add to cart
                    </button>
                    <button className="like btn btn-default" type="button">
                      <span className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetail;
