import logo from "../images/ironhack-logo-xs.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function LandingPage() {
    return (
        <div>
        <div className="header">
          <img src={logo} alt="logo" />
          <h1>Say hello to ReachJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
        <div className="feature">
          <img src={icon1} alt="" />
          <h3>Some title</h3>
          <p></p>
        </div>
        <div className="feature">
          <img src={icon2} alt="" />
          <h3>Some title</h3>
          <p></p>
        </div>
        <div className="feature">
          <img src={icon3} alt="" />
          <h3>Some title</h3>
          <p></p>
        </div>
        <div className="feature">
          <img src={icon4} alt="" />
          <h3>Some title</h3>
          <p></p>
        </div>
      </div>
    );
  }
  
  export default LandingPage;