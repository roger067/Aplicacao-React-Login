import React from "react";
import { connect } from 'react-redux';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoxTitle from "../../components/BoxTitle";
import Buttons from "../../components/Buttons";
import { get as getProducts } from './productAction';

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  renderMessage(message) {
    return (
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        { message }
      </div>
    )
  }

  renderLoading() {
    return (
      <div className="alert alert-info text-center" role="alert">
        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
        Aguarde... Efetuando operação
      </div>
    )
  }

  render() {
    const { products, loading, message } = this.props;

    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Produtos em Estoque" />
          { message && this.renderMessage(message) }
          { loading
              ? this.renderLoading()
              : <div className="table-responsive">
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
                      { products.map(products => (
                        <tr>
                          <td>{products.name}</td>
                          <td>{products.price}</td>
                          <td>{products.createDate}</td>
                          <td>
                            <Buttons
                              link={`/ProductsForm/${products._id}`}
                              typeButton="button"
                              icon="glyphicon glyphicon-edit"
                              nameButton=" Editar"
                              classButton="btn-success"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
          }
          <Buttons
            link="/ProductsForm"
            typeButton="button"
            icon="glyphicon glyphicon-plus"
            nameButton=" Adicionar Produto"
            classButton="btn-info"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.list,
  loading: state.products.loading,
  message: state.products.message
});

export default connect(mapStateToProps, { getProducts })(ProductsPage);
