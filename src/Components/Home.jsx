import React, { useState } from "react";
import Button_black from "./Button_black";
import { useNavigate } from "react-router-dom";
import Sucess from "./Sucess";


const Home = () => {
  let [email, setEmail] = useState("");

  let [error, setError] = useState("");


  const handler = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  let navigate = useNavigate();
  const goToSucess = () => {
    // Validate email before navigating
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    navigate("/Sucess", { state: { email } });
  };


  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Validate email before submitting
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
   
  };

  return (
    <>
      <section>
        <div className="container">


          <div className="left_side">
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src={"/images/icon-list.svg"} alt="icon" />
                Product discovery and building what matters
              </li>
              <li>
                <img src={"/images/icon-list.svg"} alt="icon" />
                Measuring to ensure updates are a success
              </li>
              <li>
                <img src={"/images/icon-list.svg"} alt="icon" />
                And much more!
              </li>
            </ul>

            <form className="email_bar" onSubmit={submitHandler}>
              
              <label htmlFor="emailId">Email address</label>
              <br />
              <input
              
                autoComplete="true"
                value={email}
                onChange={handler}
                type="email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                name="Email"
                id="emailId"
                placeholder="email@company.com"
              />
            
              <Button_black
                name="Subscribe to monthly newsletter"
                click_fn={goToSucess}
              
                />
            
                </form>
          </div>
          <div className="right_side">
            <img src="/images/illustration-sign-up-desktop.svg" alt="" />
          </div>



        </div>
      </section>
    </>
  );
};

export default Home;
