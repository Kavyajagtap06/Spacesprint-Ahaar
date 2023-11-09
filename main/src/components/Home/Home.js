import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home(props) {
  return (
    <div>
      <div className="header">
        <b className="text">Aahar</b>
        <div className="nav">
          <div className="tab-default">
         
          <div className="sobre">
            <Link to="/login"> Login </Link>  
          </div>
          </div>
          <div className="tab-default">
            <div className="sobre">
              <Link to="/signup"> Sign Up </Link>
            </div>
          </div>
          {/* <div className="tab-default">
            <div className="sobre">
              <Link to="/Calorie"> Calorie </Link>
            </div>
          </div> */}
          <div className="tab-default">
            <div className="sobre">
              <Link to="/Bmi"> BMI </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text">
      <h2>{props.name ? `Welcome - ${props.name}` : "Welcome to page"}</h2>
      </div>
    </div>
  );
}

export default Home;
