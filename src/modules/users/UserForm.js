import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import BoxTitle from "../../components/BoxTitle";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";

class UserAdd extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Formulário Usuário" />
          <Card title="">
            <div className="row">
              <div className="col-sm-6">
                <Inputs
                  typeInput="email"
                  idInput="inputEmail"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div className="col-sm-6">
                <Inputs
                  typeInput="text"
                  idInput="inputNome"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="col-sm-6">
                <Inputs
                  typeInput="password"
                  idInput="inputPassword"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="col-sm-6">
                <Inputs
                  typeInput="text"
                  idInput="inputPhone"
                  placeholder="Digite seu Telefone"
                />
              </div>
              <div className="col-sm-3 col-sm-offset-9">
                <Buttons
                  link="/UserForm"
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

export default UserAdd;
