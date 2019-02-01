import React from "react";
import { connect } from 'react-redux';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoxTitle from "../../components/BoxTitle";
import Buttons from "../../components/Buttons";
import { get as getUsers } from './userAction';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
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
    const { users, loading, message } = this.props;

    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxTitle title="Lista de Usuários" />
          { message && this.renderMessage(message) }
          { loading
              ? this.renderLoading()
              : <div className="scroll-table table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      { users.map(user => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phoneNumber}</td>
                          <td>
                            <Buttons
                              link={`/UserForm/${user._id}`}
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

const mapStateToProps = state => ({
  users: state.users.list,
  loading: state.users.loading,
  message: state.users.message
});

export default connect(mapStateToProps, { getUsers })(UsersPage);
