import React, { Component } from "react";
import "../App.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <i className="fa fa-cog"></i>
              Dashboard
            </div>
            <div className="col-md-6 ">
                <button type="button" className="btn btn-light pull-right">Add Startup</button>
            </div>
            </div>
            </div>
          </div>
        </div>
      
    );
  }
}
