import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Login = function(){
    return(
      <div className="container">
        <input type="email" placeholder=" Enter the Email" />
        <input type="password" placeholder=" Enter the password" />
      </div>
      )
}