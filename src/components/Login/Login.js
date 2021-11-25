import React from "react";
import { useHistory, useLocation } from "react-router";
// toastify
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {signInUsingGoogle, setUser, setIsLoading } = useAuth();
  // const notify = () => toast.success("Login successfully");
  const location = useLocation();
  const history = useHistory();
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
       
        history.push(location.state?.from || "/");
        // console.log(location.state?.from,"google er te");

        setUser(result.user);
      })
      .finally(() => {
        // const success = true;
        setIsLoading(false)
      });

  };

  return (
    <div className="text-center login-container ">
      {/* <h2 className=" text-info  ">Please Login</h2> */}

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center mb-5 fw-bold fs-5 ">
                  Login Here
                </h2>
                <>
                  <div className="d-grid mb-2">
                    <button
                      onClick={handleGoogleLogin}
                      className="btn btn-google btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;
