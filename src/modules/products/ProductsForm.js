import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import BoxTitle from "../../components/BoxTitle";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";

class UserUpdate extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Adicione um Produto" />
          <Card title="">
            <div className="row">
              <div className="col-sm-12">
                <Inputs
                  typeInput="text"
                  idInput="inputProductName"
                  placeholder="Digite o nome do Produto"
                />
              </div>
              <div className="col-sm-6">
                <Inputs
                  typeInput="text"
                  idInput="inputPrice"
                  placeholder="Digite o preço"
                />
              </div>
              <div className="col-sm-6">
                <Inputs
                  typeInput="text"
                  idInput="inputDate"
                  placeholder="Digite a Data"
                />
              </div>
              <div className="col-sm-3 col-sm-offset-9">
                <Buttons
                  link="/ProductsForm"
                  typeButton="button"
                  nameButton="Confirmar"
                  classButton="btn-info"
                />
              </div>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserUpdate;
