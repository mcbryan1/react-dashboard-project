/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";

export default class Page extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {/* Left Side */}

            <div className="col-md-3">
              <div className="heading">
                <i className="fa fa-cog"></i>
                Dashboard
              </div>
              <div className="heading1">
                <i class="fa fa-plus"></i>
                Add Startup
              </div>
              <div className="heading1">
                <i class="fa fa-plus"></i>
                Startup Details
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-9 ">
              <div className="heading">All Startups</div>
              <div className="right">
                <form action="" className="form ">
                  <input
                    type="text"
                    className="field"
                    name="name"
                    placeholder="Filter Startups"
                    required
                  />
                </form>
              

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Market/Industry</th>
                    <th scope="col">Location</th>
                    <th scope="col">Joined</th>
                    <th scope="col">Approve</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <th scope="row"><img src="https://via.placeholder.com/50" alt="image"/> Company Name</th>
                    <td>Real Estate</td>
                    <td>Lagos</td>
                    <td>Dec 20 , 2019</td>
                    <td><i class="fa fa-check check"></i></td>
                    <td className="icons">
                      <i class="fa fa-edit edit"></i>
                      <i class="fa fa-trash trash"></i>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
