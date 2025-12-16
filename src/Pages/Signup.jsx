import "../Styles/signup.scss";

export default function Signup() {
  return (
    <div className="signup-page">
      <h1 className="signup-page__title">CREATE AN ACCOUNT</h1>
      <div className="signup-form">
        <h2 className="signup-form__subtitle">CREATE NEW CUSTOMER ACCOUNT</h2>
        <form className="signup-form__form">
          <div className="signup-form__group">
            <label htmlFor="fullname">
              Full name <span className="required">*</span>
            </label>
            <input type="text" id="fullname" name="fullname" required />
          </div>

          <div className="signup-form__group">
            <label htmlFor="address">
              Address <span className="required">*</span>
            </label>
            <input type="text" id="address" name="address" required />
          </div>

          <div className="signup-form__group">
            <label htmlFor="address2">Address - line 2</label>
            <input type="text" id="address2" name="address2" />
          </div>

          <div className="signup-form__row">
            <div className="signup-form__group signup-form__group--half">
              <label htmlFor="zipcode">
                Zip code <span className="required">*</span>
              </label>
              <input type="text" id="zipcode" name="zipcode" required />
            </div>
            <div className="signup-form__group signup-form__group--half">
              <label htmlFor="city">
                City <span className="required">*</span>
              </label>
              <input type="text" id="city" name="city" required />
            </div>
          </div>

          <div className="signup-form__row">
            <div className="signup-form__group signup-form__group--half">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" />
            </div>
            <div className="signup-form__group signup-form__group--half">
              <label htmlFor="phone">Phone no.</label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>

          <div className="signup-form__group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="signup-form__group">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="signup-form__group">
            <label htmlFor="confirm-password">
              Repeat password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
          </div>

          <div className="signup-form__checks">
            <div className="signup-form__check">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                By using this form you agree with the storage and handling of
                your data by this website. <span className="required">*</span>
              </label>
            </div>
            <div className="signup-form__check">
              <input type="checkbox" id="marketing" name="marketing" />
              <label htmlFor="marketing">
                Accept marketing from HiFi Horizon (newsletter and discount
                offers by email). <span className="required">*</span>
              </label>
            </div>
          </div>

          <button type="submit" className="signup-form__submit">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}
