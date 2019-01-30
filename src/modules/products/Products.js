import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Tabel from "../../components/Tabel";
import Tbody from "../../components/Tbody";
import Buttons from "../../components/Buttons";

class Products extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Tabel>
                <Tbody />
              </Tabel>
              <Buttons link="/Products" typeButton="button" nameButton="Adicionar Produto" classButton="btn-info"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Products;
