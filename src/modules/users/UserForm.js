import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import BoxTitle from "../../components/BoxTitle";
import { save, getById } from './userAction';

class UserForm extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.props.getById(id);
    }
  }

  renderInput({input, placeholder, type}) {
    return (
      <div className="form-group">
        <input
          type={type} className="form-control" {...input} placeholder={placeholder} required
        />
      </div>
    );
  }

  onSubmit = async formProps => {
    const response = await this.props.save(formProps);

    if (response) {
      this.props.history.push('/User');
    }
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
                  <Field name="email" component={this.renderInput} type="email" placeholder="Digite o e-mail..."/>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field name="name" component={this.renderInput} type="text" placeholder="Digite o nome..."/>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field name="password" component={this.renderInput} type="password" placeholder="Digite a senha..."/>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <Field name="phoneNumber" component={this.renderInput} type="text" placeholder="Digite o Telefone..."/>
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

UserForm = reduxForm({ form: "UserForm", destroyOnUnmount: true })(UserForm);

const mapStateToProps = state => ({
  initialValues: state.users.user
});

export default connect(mapStateToProps, { save, getById })(UserForm);
