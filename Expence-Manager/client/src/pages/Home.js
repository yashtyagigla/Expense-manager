import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Home = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <Link className="navbar-brand text-light" to="/">
              Expense Manager
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container text-center mt-5">
        <h1>Welcome To Expense Manager!</h1>

        <div className="row mt-5">
          {/* First Image and Name */}
          <div className="col-md-4">
            <Link to="/Expense_Tracker" className="btn btn-primary">
              <img
                src="https://cdn.vectorstock.com/i/1000x1000/08/43/expense-tracker-app-rgb-color-icon-vector-39050843.webp"
                alt="Expenses Tracker"
                className="img-fluid rounded"
                style={{ height: "250px", width: "250px" }}
              />
            </Link>
            <div className="mt-3">
              <Link to="/Expense_Tracker" className="btn btn-primary">
                Your Wallet
              </Link>
            </div>
          </div>

          {/* Second Image and Name */}
          <div className="col-md-4">
     
              <img
                src="https://media.istockphoto.com/id/1393154311/photo/how-much-does-it-cost-business-concept-red-card-text-on-the-background-of-an-open-notepad-on.webp?b=1&s=170667a&w=0&k=20&c=nmAEE5YoJqaVz1o-KOCa2yw-hV821trJ4kQyAwaYr3w="
                alt="To-Do List"
                className="img-fluid rounded"
                style={{ height: "250px", width: "250px" }}
              />
         
          
          </div>

          {/* Third image */}
          <div className="col-md-4">
            <Link to="/Diaries" className="btn btn-primary">
              <img
                src="https://cdn.designbump.com/wp-content/uploads/2011/10/diary-website-layout-photoshop-tutorial-template-photoshop-templates-website-design-graphic-design-web-designer.jpg"
                alt="Diary"
                className="img-fluid rounded"
                style={{ height: "250px", width: "250px" }}
              />
            </Link>
            <div className="mt-3">
              <Link to="/Diaries" className="btn btn-primary">
                Quick Note
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
