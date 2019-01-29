import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoxDetail from "../../components/BoxDetail";

class Products extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products"/>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <BoxDetail />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Products;
