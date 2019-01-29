import React from "react";
import BgLogin from "../../components/BgLogin";
import Card from "../../components/Card";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";

class Login extends React.Component {
  render() {
    return (
      <BgLogin>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <Card>
                <form action ="">
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
                  <Buttons typeButton="submit" nameButton="Entrar" link="/UserPage"/>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </BgLogin>
    );
  }
}

export default Login;
