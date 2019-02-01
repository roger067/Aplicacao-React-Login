import React from "react";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import BoxTitle from "../../components/BoxTitle";
import { save, getById } from "./userAction";
import { get as getProducts } from "../products/productAction";
class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      products: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.props.getById(id);
    }

    this.props.getProducts();
  }

  componentDidUpdate(prevProps) {
    const { initialValues } = this.props;

    if (prevProps.initialValues !== initialValues && initialValues.products) {
      this.setState({ products: initialValues.products });
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

  selectProduct(product) {
    this.setState({ selectedProduct: JSON.parse(product) });
  }

  addProduct() {
    const { selectedProduct, products } = this.state;

    if (selectedProduct) {
      products.push(selectedProduct._id);

      this.setState({ products });
    }
  }

  onSubmit = async formProps => {
    const { products } = this.state;

    formProps.products = products;

    const response = await this.props.save(formProps);

    if (response) {
      this.props.history.push("/User");
    }
  };

  parseProducts(products) {
    const userProducts = [];

    if (this.state.products && products) {
      this.state.products.map(id => {
        const product = products.find(p => p._id === id);

        if (product) {
          userProducts.push(product);
        }
      });
    }

    return userProducts;
  }

  render() {
    const { products, handleSubmit } = this.props;

    const userProducts = this.parseProducts(products);

    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Formulário Usuário" />
          <Card title="">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <Field
                    name="email"
                    component={this.renderInput}
                    type="email"
                    placeholder="Digite o e-mail..."
                  />
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field
                    name="name"
                    component={this.renderInput}
                    type="text"
                    placeholder="Digite o nome..."
                  />
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field
                    name="password"
                    component={this.renderInput}
                    type="password"
                    placeholder="Digite a senha..."
                  />
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field
                    name="phoneNumber"
                    component={this.renderInput}
                    type="text"
                    placeholder="Digite o Telefone..."
                  />
                </div>

                <div className="col-sm-12 col-xs-12">
                  <div style={{ marginBottom: "2rem" }}>
                    <select
                      className="form-control"
                      onChange={e => this.selectProduct(e.target.value)}
                    >
                      {products.map(product => (
                        <option
                          key={product._id}
                          value={JSON.stringify(product)}
                        >
                          {product.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="btn"
                      style={{ marginTop: "1rem" }}
                      onClick={() => this.addProduct()}
                    >
                      Adicionar
                    </button>
                  </div>

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Data de Validade</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userProducts.map(product => (
                        <tr key={product._id}>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>{product.createDate}</td>
                          <td>
                            <button type="button" className="btn btn-danger">
                              <i className="glyphicon glyphicon-trash" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div
                  className="col-sm-3 col-sm-offset-9"
                  style={{ marginTop: "3rem" }}
                >
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

UserForm = reduxForm({ form: "UserForm", destroyOnUnmount: true })(UserForm);

const mapStateToProps = state => ({
  initialValues: state.users.user,
  formValues: getFormValues("UserForm"),
  products: state.products.list
});

export default connect(
  mapStateToProps,
  { save, getById, getProducts }
)(UserForm);
