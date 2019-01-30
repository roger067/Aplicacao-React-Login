import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoxDetail from "../../components/BoxDetail";

class UserPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products" />
        <div className="container">
          <BoxDetail>
            <h1>Hi, User!</h1>
          </BoxDetail>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserPage;
