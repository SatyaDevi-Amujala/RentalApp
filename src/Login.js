import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
//import GoogleButton from "react-google-button";
import { useUserAuth } from "./UserAuthContext";
import gimg from "./Google.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  
  
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
  <div>
        <div class="split left">
<center><h1 style={{marginTop:"40px"}}>RENTAL APP</h1></center>
        <div style={{margin:"25px"}}><h2>Welcome to ...</h2></div>
        <div style={{padding:"30px",marginRight:"30px",textAlign:"justify"}}><p>Lorem Ipsum is simply dummy teaxt of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
            </div>
            </div>
        <div class="split right">
        <center><h2 style={{padding:"30px"}}className="mb-3">Login</h2>
        <p>------------  Easily Using  ------------</p>
        </center>
        <div>
          <center><img class="image" src={gimg}  alt="Google"
            onClick={handleGoogleSignIn}
          /></center>
        </div>
        <center><p style={{margin:"20px"}}>----------- Or Using Account Details ----------</p></center>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
    <div style={{color:"blue",textAlign:"right"}}> <p>forgot password? </p></div>
          <center><div  style={{margin:"10px",width:"500px",align:"center"}}className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div></center>
        </Form>
        <hr />
       
     
      <div className="p-4 box mt-3 text-center">
        New to RentalApp? <Link  style={{color:"red"}}to="/signup">Register</Link>
      </div> </div>
      </div>
    </>
  );
};

export default Login;