import React from "react";
import "./Footer.scss";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sign">
        <h2>Ready To Compete ?</h2>
        <h4>Sign up to our mailing list today.</h4>
        <Link to="/Signin" style={{ textDecoration: "none" }}>
          <button>Sign Up</button>
        </Link>
      </div>

      <div className="info">
        <div>
          <BusinessOutlinedIcon
            sx={{
              fontSize: 40,
              color: "white",
              cursor: "pointer",
            }}
          />
          <p>323 Rohini, New Delhi, India&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div>
          <EmailIcon
            sx={{
              fontSize: 40,
              color: "white",
              cursor: "pointer",
            }}
          />
          <p>cobra_team@gmail.com</p>
        </div>
        <div className="phone">
          <LocalPhoneIcon
            sx={{
              fontSize: 40,
              color: "white",
              cursor: "pointer",
            }}
          />
          <p>7987987980</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="social">
        <p>
          Follow us on social media to keep up to date with the lates
          developments in the coding space.
        </p>
        <div className="soc-icons">
          <InstagramIcon style={{ cursor: "pointer" }} />
          <FacebookIcon style={{ cursor: "pointer" }} />
          <LinkedInIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
