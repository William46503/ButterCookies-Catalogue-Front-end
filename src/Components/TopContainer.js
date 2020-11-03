import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jumbotronimg from "../Images/jumbotron.png";
import { Container } from "react-bootstrap";

function TopContainer() {
  return (
    <div className="Jumbotron">
      <img src={jumbotronimg} alt="Butter Cookies" />

      <Container className="TitleText">
        <h1>Seek your ButterCookies </h1>
        <p>Made by ButterCookies Lover, for ButterCookies Lovers</p>
      </Container>
    </div>
  );
}

export default TopContainer;
