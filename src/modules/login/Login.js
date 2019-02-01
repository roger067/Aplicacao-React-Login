import React from "react";
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form";
import { authenticate } from "./loginAction";
import BgLogin from "../../components/BgLogin";
import Card from "../../components/Card";

class Login extends React.Component {
  /*state = {

  }*/

  onSubmit = async formProps => {
    const response = await this.props.authenticate(formProps);

    if (response) {
      this.props.history.push("/home")
    }

  }
  renderMessage(message) {
    return (
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        { message }
      </div>
    )
  }
  render() {
    const { info } = this.props
    return (
      <BgLogin>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="animated fadeInLeft">
                { info && this.renderMessage(info)}
                <Card title="Login">
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="form-group">
                      <Field component="input" name="email" type="text" className="form-control" placeholder="Digite seu e-mail..." required/>
                    </div>
                    <div className="form-group">
                      <Field component="input" name="password" type="password" className="form-control" placeholder="Digite sua senha..." required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Entrar</button>
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

Login = reduxForm({form: "Login", destroyOnUmount: true})(Login);
const mapStateToProps = (state) => ({
  info: state.login.message
})
export default connect(mapStateToProps, { authenticate })(Login);


