import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoxTitle from "../../components/BoxTitle";
import Tabel from "../../components/Tabel";
import Tbody from "../../components/Tbody";
import Buttons from "../../components/Buttons";

class Products extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Produtos em Estoque" />
          <Tabel>
            <Tbody>
              <Buttons
                link="/UserForm"
                typeButton="button"
                icon="glyphicon glyphicon-edit"
                nameButton=" Editar"
                classButton="btn-success"
              />
            </Tbody>
          </Tabel>
          <Buttons
            link="/ProductsForm"
            typeButton="button"
            icon="glyphicon glyphicon-plus"
            nameButton=" Adicionar Produto"
            classButton="btn-info"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Products;
