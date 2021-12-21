import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <h1>WellCome To My Application Login Page</h1>
      <p>
        Here Enter Ur UserName & Password For Authrization of My Application...
      </p>
      <form>
        <input
          type="submit"
          value="Learn More"
          className="btn btn-success btn-block"
        />
      </form>
    </Fragment>
  );
};

export default Login;
