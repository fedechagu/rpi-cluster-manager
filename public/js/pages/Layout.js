import React from "react";
import { Link } from "react-router";

//import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Card from '../components/Card'

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Dashboard</h1>
                <div class="card-deck-wrapper">
                  <div class="card-deck">
                    <Card title="Available Memory" body="200 / 123" />
                    <Card title="Platform" body="Linux" />
                  </div>
                </div>
              {this.props.children}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
