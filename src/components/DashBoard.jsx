import React, { Component } from "react";
import Header from "./Header";
import Title from "./Title";
import MainPage from "./MainPage";

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="whole">
          <Title />
          <MainPage />
        </div>
      </div>
    );
  }
}
