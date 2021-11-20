import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import { Button } from 'antd';

function RenderLandingPage(props) {
  return (
    <div className="container">
      <h1>Welcome to Underdog Devs</h1>
      <div className="btn1">
        <h2> Already a mentor or a mentee?</h2>
        <Button type="primary" href="/login">
          Log in
        </Button>
      </div>
      <div className="btn2">
        <h2> Want to become a mentor or mentee?</h2>
        <Button type="primary" href="/signup">
          Sign up
        </Button>
      </div>
    </div>
  );
}
export default RenderLandingPage;
