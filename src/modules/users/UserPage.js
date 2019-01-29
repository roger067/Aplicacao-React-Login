import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class UserPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar linkOne="/User" linkTwo="/Products"/>
        <div className="container">
        </div>
        <Footer/>
      </div>
    );
  }
}

export default UserPage;
