import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import myimage from "../phone-image.png";
import Footer from "../components/Layout/Footer";


const Landing = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg" id="navbb">
        <div class="container-fluid">
          <div class="d-flex justify-content-space-between align-items-center w-100 spotify">
            <div class="font_work">
            <FontAwesomeIcon icon={faMoneyBillTrendUp}/>
            </div>
            <a class="navbar-brand text-center" href="/">
              <i class="fa-brands fa-spotify"></i>
              Expense Manager
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav justify-content-evenly navul">
              <a class="nav-link active" aria-current="page" href="#special">
                About_Us
              </a>
              <a class="nav-link active" aria-current="page" href="https://forms.gle/ieRnjz46iokfe9L48">
              Support
              </a>
              <a class="nav-link active" aria-current="page" href="/">
                <Link to="/login">Login/signup</Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class=" bg">
        <img src={myimage} alt="" class="phone_spo" />
        <div class="content1">
          <p>Expense Manager! A Comprehensive Personal Management Solution</p>
          <button class="button">
            {" "}
            <Link to="/login" className="btn">
              GET STARTED
            </Link>
          </button>
        </div>
      </div>
      <div id="special">
        <a href="/"></a>
      </div>
      <h2>Why Expense Manager?</h2>

      <div class="part2">
        <div class="rectangle">
          <div class="circle">
          <FontAwesomeIcon icon={faThumbsUp}  className="ii" />
          </div>
          <h6>
            {" "}
            <b> EmpowerSuccess</b>
          </h6>
          <p>Break down goals, focusing on each step's impacts.</p>
        </div>
        <div class="rectangle">
          <div class="circle">
          <FontAwesomeIcon icon={faClockRotateLeft}  className="ii" />
          </div>
          <h6>
            {" "}
            <b>Boost Productivity</b>
          </h6>
          <p>Priortize tasks based on urgency and importance.</p>
        </div>
        <div class="rectangle">
          <div class="circle">
          <FontAwesomeIcon icon={faMoneyBill1Wave} className="ii"/>
          </div>
          <h6>
            <b>Financial Mastery</b>
          </h6>
          <p>Track spending to achieve long-term financial goals.</p>
        </div>
        <div class="rectangle">
          <div class="circle">
          <FontAwesomeIcon icon={faChartLine} className="ii"/> 
          </div>
          <h6>
            <b>Budget Brilliance</b>
          </h6>
          <p>
            Categorize expenses, ensuring smart financial decisions and
            stability.
          </p>
        </div>
      </div>
      <div className="part3">
        {" "}
        {/* <p>It's free. No credit card required.</p> */}
        <p>Managing your income isn't just about making ends meet; it's about creating opportunities and security for your future self.</p>
      </div>

      <div id="special1">
        <a href="/"></a>
      </div>
      <footer class="text-center text-lg-start bg-white text-muted footer">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
         
          <div>
            <a href="/" class="me-4 link-secondary">
              <i class="fab fa-facebook-f font_color"></i>
            </a>
            <a href="/" class="me-4 link-secondary">
              <i class="fab fa-twitter font_color"></i>
            </a>
            <a href="/" class="me-4 link-secondary">
              <i class="fab fa-google font_color"></i>
            </a>
            <a href="/" class="me-4 link-secondary">
              <i class="fab fa-instagram font_color"></i>
            </a>
            <a href="/" class="me-4 link-secondary">
              <i class="fab fa-linkedin font_color"></i>
            </a>
            <a href="/" class="me-4 link-secondary">
              <i class="fab fa-github font_color"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 font_color">
                  <i class="fa-brands fa-spotify font_color"></i>
                  Expense Manager
                </h6>
                <p class=" font_color">
                An effective app having a functionality of tracking expenses managing your monthly expenses according to your income
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4  font_color">
                  Powered By:
                </h6>
                <p class=" font_color">
                  <a href="/" class="text-reset font_color">
                    Pankaj
                  </a>
                </p>
                <p class=" font_color">
                  <a href="/" class="text-reset font_color">
                    Avin Gupta
                  </a>
                </p>
                <p class=" font_color">
                  <a href="/" class="text-reset font_color">
                    Vaibhav Agarwal
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4  font_color">
                  Email-ID
                </h6>
                <p class=" font_color">
                  <a href="/" class="text-reset font_color">
                    pankaj.atri_cs21@gla.ac.in
                  </a>
                </p>
                <p class=" font_color">
                  <a href="/" class="text-reset font_color">
                    avin.gupta_cs21@gla.ac.in
                  </a>
                </p>
                <p class=" font_color">
                  <a href="/" class="text-reset font_color">
                    vaibhav.agarwal_cs21@gla.ac.in
                  </a>
                </p>
                <p class=" font_color">
                  <a href="/" class="text-reset font_color">
                    
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-black text-light p-4">
          <h4 className="text-center">All rights reserved &copy; Expense Manager</h4>
        </div>
      </footer>

      
    </>
  );
};
export default Landing;
