import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoxDetail from "../../components/BoxDetail";
import CardInfo from "../../components/CardInfo";
import Buttons from "../../components/Buttons";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxDetail>
            Hi, User!
          </BoxDetail>
          <div className="row">
            <div className="col-sm-6">
              <CardInfo title="Informações dos Usuários">
                <Buttons
                  link="/User"
                  typeButton="button"
                  icon=""
                  nameButton="Ir para Lista de Usuários"
                  classButton="btn-success"
                />
              </CardInfo>
            </div>
            <div className="col-sm-6">
              <CardInfo title="Informações dos Produtos">
                <Buttons
                  link="/Products"
                  typeButton="button"
                  icon=""
                  nameButton="Ir para Lista de Produtos"
                  classButton="btn-success"
                />
              </CardInfo>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
