import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { ActionCreate } from "./ActionCreate";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import BoxTitle from "../../components/BoxTitle";
//import Inputs from "../../components/Inputs";
//import Buttons from "../../components/Buttons";

class UserAdd extends React.Component {
  renderInput({input, placeholder, type}) {
    return (
      <div className="form-group">
        <input
          type={type} className="form-control" {...input} placeholder={placeholder} required
        />
      </div>
    );
  }

  onSubmit(formProps) {
    console.log(formProps);
  }

  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Formulário Usuário" />
          <Card title="">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <Field name="inputEmail" component={this.renderInput} type="email" placeholder="Digite o e-mail..."/>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field name="inputName" component={this.renderInput} type="text" placeholder="Digite o nome..."/>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field name="inputPassword" component={this.renderInput} type="password" placeholder="Digite a senha..."/>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field name="inputPhone" component={this.renderInput} type="text" placeholder="Digite o Telefone..."/>
                </div>
                <div className="col-sm-3 col-sm-offset-9">
                  <button className="btn btn-info">Confirmar</button>
                </div>
              </div>
            </form>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}

export default reduxForm({
  form: "UserForm"
})(UserAdd);
