import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import svg from "../../images/success-modal.svg";

import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/Login.css";
import bg from "../../images/bg.svg";
import wave from "../../images/wave.png";
import avatar from "../../images/avatar.svg";
import { auth } from "../../firebase.init";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const CheckOut = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [showPass, setShowPass] = useState(false);
  const handleEmailChange = (e) => {
    const validRegx = /\S+@\S+\.\S+/;
    const validPassword = validRegx.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, email: "" });
    } else {
      setError({ ...error, email: "invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    toast.success("Send Your Information");
    handleOpen();
  };
  const [terms, setTerms] = useState(false);
  return (
    <div className="main-container mb-56">
      <img className="wave" src={wave} alt="" />
      <div className="form-container">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatar} alt="" />
            <h2 className="title">Checkout</h2>

            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <div className="relative">
                  <input
                    type="text"
                    className="input"
                    placeholder=" Enter Your Name"
                  />
                </div>
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div relative">
                <input type="text" className="input" placeholder="Address" />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  onChange={handleEmailChange}
                  type="Email"
                  className="input mt-3"
                  required
                  placeholder="Email"
                />
                {error?.email && (
                  <p className="text-red-600 mt-12">{error.email}</p>
                )}
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div relative">
                <input type="Number" className="input" placeholder="Phone" />
              </div>
            </div>
            <div className="flex items-center mb-4 ml-6">
              <input
                onClick={() => setTerms(!terms)}
                id="checkbox-2"
                aria-describedby="checkbox-2"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox-2"
                className={`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                  terms ? "" : "text-red-600"
                }`}
              >
                Accept Terms and Conditions
              </label>
            </div>

            <button
              disabled={!terms}
              type="submit"
              className="btn"
              value="Sign Up"
            >
              Checkout
            </button>

            <Link to="/signup">create a new account?</Link>
            {/* {hookError && <p className="text-red-600">{hookError?.message}</p>} */}
            <ToastContainer />

            {/* popup modal */}
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="text-center flex justify-center">
                    <img src={svg} className="h-24 " alt="" />
                  </div>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Thank You For Your Submission
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Decades later, Claire, now ill, allows her son to make a
                    documentary based on the idea that the process of creating a
                    memorial is actually part of the grieving process.
                  </Typography>
                </Box>
              </Modal>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
