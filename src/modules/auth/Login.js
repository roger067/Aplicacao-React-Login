import React from "react";
import BgLogin from "../../components/BgLogin";
import Card from "../../components/Card";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";

class Login extends React.Component {
  /*state = {

  }*/
  handleSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <BgLogin>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="animated fadeInLeft">
                <Card title="Login">
                  <form onSubmit={this.handleSubmit}>
                    <Inputs
                      typeInput="email"
                      idInput="inputEmail"
                      placeholder="E-mail..."
                    />
                    <Inputs
                      typeInput="password"
                      idInput="inputPassword"
                      placeholder="Senha..."
                    />
                    <Buttons
                      typeButton="submit"
                      nameButton="Entrar"
                      link="/home"
                      classButton="btn-primary"
                    />
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </BgLogin>
    );
  }
}

export default Login;
