import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  const currentUser = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              {currentUser && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
export default Topbar;
