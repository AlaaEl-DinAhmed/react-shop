import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Sign in</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
