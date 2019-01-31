import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/UserPage">
              <div className="nav-brand">PlasticApp</div>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={props.linkOne}>
                  <span className="glyphicon glyphicon-user" /> Usuários
                </Link>
              </li>
              <li>
                <Link to={props.linkTwo}>
                  <span className="glyphicon glyphicon-shopping-cart" /> Produtos
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="glyphicon glyphicon glyphicon-off" /> Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
