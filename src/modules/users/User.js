import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Tabel from "../../components/Tabel";
import Tbody from "../../components/Tbody";
import Buttons from "../../components/Buttons";

class User extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products"/>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Tabel>
                <Tbody></Tbody>
              </Tabel>
              <Buttons link="/User" typeButton="button" nameButton="Adicionar Usuário" classButton="btn-info"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default User;
