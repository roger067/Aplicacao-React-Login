import React from "react";
import { Field, reduxForm } from "redux-form";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import BoxTitle from "../../components/BoxTitle";
//import Inputs from "../../components/Inputs";
//import Buttons from "../../components/Buttons";

class ProductsAdd extends React.Component {
  renderInput({ input, placeholder, type }) {
    return (
      <div className="form-group">
        <input
          type={type}
          className="form-control"
          {...input}
          placeholder={placeholder}
          required
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
          <BoxTitle title="Adicione um Produto" />
          <Card title="">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <Field
                    name="inputProduct"
                    component={this.renderInput}
                    type="text"
                    placeholder="Digite o Produto..."
                  />
                </div>
                <div className="col-sm-6 col-xs-12">
                  <Field
                    name="inputPrice"
                    component={this.renderInput}
                    type="text"
                    placeholder="Digite o Preço..."
                  />
                </div>
                <div className="col-sm-6 col-xs-12">
                  <Field
                    name="inputDate"
                    component={this.renderInput}
                    type="text"
                    placeholder="Data de Validade (dd/mm/aaaa)"
                  />
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
})(ProductsAdd);
