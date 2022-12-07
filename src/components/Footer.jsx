import "../styles/styles.css";
import logoDark from "../images/logo_dark.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <a className="footer_logo" href="#">
          <img src={logoDark} />
        </a>
        <div className="footer_social">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="footer_links col1">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer_links col2">
          <a href="#">Careers</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer_cta">
          <button href="#" className="button">
            Request Invite
          </button>
          <div className="footer_copyright">
            © Easybank. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
