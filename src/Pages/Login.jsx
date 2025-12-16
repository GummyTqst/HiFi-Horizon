import { Link } from "react-router-dom";
import "../Styles/login.scss";

export default function Login() {
  return (
    <div className="login-page">
      <h1 className="login-page__title">LOGIN</h1>

      <div className="login-page__container">
        <div className="login-form">
          <h2 className="login-form__subtitle">REGISTERED CUSTOMERS</h2>
          <p className="login-form__description">
            If you have an account, sign in with your email address.
          </p>
          <form className="login-form__form">
            <div className="login-form__group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="login-form__group">
              <label htmlFor="password">
                Password <span className="required">*</span>
              </label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="login-form__check">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="login-form__submit">
              SIGN IN
            </button>

            <Link to="/contact" className="login-form__link">
              Forgot your Password?
            </Link>
          </form>
        </div>

        <div className="new-customer">
          <h2 className="new-customer__subtitle">NEW CUSTOMER</h2>
          <p className="new-customer__description">
            Creating an account has many benefits: check out faster, keep more
            than one address and more.
          </p>
          <Link to="/signup" className="new-customer__button">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
