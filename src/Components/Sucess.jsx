import React, { useState } from "react";
import Button_black from "./Button_black";
import { useLocation, useNavigate } from "react-router-dom";

const Sucess = () => {
  const location = useLocation();
  const { email } = location.state || "Not A Email";

  let navigate1 = useNavigate();
  let gotoHome = () => {
    navigate1("/");
  };

  return (
    <>
      <section className="sucess">
        <div className="sucess_container">
          <img src="/images/icon-success.svg" alt="" />
          <h1>Thanks For Subscribing!</h1>
          <p>
            A Confirmation email has been send to <strong>{email}</strong>{" "}
            .Please open it click the button inside to confirm your subscription
          </p>

          <Button_black name="Dismiss message" click_fn={gotoHome} />
        </div>
      </section>
    </>
  );
};

export default Sucess;
