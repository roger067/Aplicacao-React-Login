import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoxTitle from "../../components/BoxTitle";
import Tabel from "../../components/Tabel";
import Tbody from "../../components/Tbody";
import Buttons from "../../components/Buttons";

class User extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Lista de Usuários" />
          <Tabel>
            <Tbody>
              <Buttons
                link="/UserUpdate"
                typeButton="button"
                icon="glyphicon glyphicon-edit"
                nameButton=" Editar"
                classButton="btn-success"
              />
            </Tbody>
          </Tabel>
          <Buttons
            link="/UserForm"
            typeButton="button"
            icon="glyphicon glyphicon-plus"
            nameButton=" Adicionar Usuário"
            classButton="btn-info"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default User;
