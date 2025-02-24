import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="login-container">
        <div className="upper-info bg_i">
          <div className="center-text">
            <h1>Welcome To Expense Manager</h1>
            {/* <h4>
              where tasks meet finance. Simplify your life with our one-stop
              solution for to-dos and expenses. Discover the power of simplicity
              today!
            </h4> */}
          </div>
        </div>
        <div className="bg_i">
          <div className="mark-1">
            <div className="resgister-page ">
              {loading && <Spinner />}
              <Form layout="vertical" onFinish={submitHandler}>
                <h1 className="login_form">Register Form</h1>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input type="password" />
                </Form.Item>
                <div className="d-flex justify-content-between">
                  <Link to="/login" style={{ color: "black" }}>
                    Already Register ? Cleck Here to login
                  </Link>
                </div>

                <div className=" hii">
                  <button className="buttonn">Register</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Register;