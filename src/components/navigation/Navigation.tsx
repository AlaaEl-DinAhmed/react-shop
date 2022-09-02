import { ReactComponent as Logo } from "@/assets/images/shopify-seeklogo.com.svg";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className={styles["navigation-container"]}>
        <Link to="/">
          <Logo />
        </Link>
        <ul className={styles["navigation-links"]}>
          <li>
            <Link className={styles["navigation-links__link"]} to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className={styles["navigation-links__link"]} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles["navigation-links__link"]} to="/sign-in">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
