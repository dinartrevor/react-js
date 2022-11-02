import React from "react";
import { GoogleLogout } from "react-google-login";

//clientId = xxxx.apps.googleusercontent.com

const clientId = `${process.env.CLIENT_ID}`;

function Logout(props) {
  const onSuccess = (e) => {
    console.log(e);
    console.log("Logout Success");
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    props.onLogout();
  };

  return (
    <div id="signInButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
