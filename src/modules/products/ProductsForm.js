import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import BoxTitle from "../../components/BoxTitle";
import { save, getById } from './productAction';

class ProductsForm extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.props.getById(id);
    }
  }

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

  onSubmit = async formProps => {
    const response = await this.props.save(formProps);

    if (response) {
      this.props.history.push('/Products');
    }
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
                    name="name"
                    component={this.renderInput}
                    type="text"
                    placeholder="Digite o Produto..."
                  />
                </div>
                <div className="col-sm-6 col-xs-12">
                  <Field
                    name="price"
                    component={this.renderInput}
                    type="text"
                    placeholder="Digite o Preço..."
                  />
                </div>
                <div className="col-sm-6 col-xs-12">
                  <Field
                    name="createDate"
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

ProductsForm = reduxForm({ form: "ProductsForm", destroyOnUnmount: true })(ProductsForm);

const mapStateToProps = state => ({
  initialValues: state.products.products
});

export default connect(mapStateToProps, { save, getById })(ProductsForm);
