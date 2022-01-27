const logo = require("../../assets/img/logo.png");

const Landing = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src={logo} alt="Logo" className="header__logo" />
        <span className="header__title-main">JS Quiz</span>
      </h1>
      <div className="header__title-sub">
        Welcome to JavaScript quiz. Let's prove your skill level !!
      </div>
      <div className="header__user-info">
        <div>
          <input
            type="text"
            className="header__user-info-textbox"
            placeholder="Enter your name"
          />
        </div>
        <ul className="radio-group">
          <li className="radio-group__items">
            <input type="radio" name="level" id="radio-beginner" />
            <label htmlFor="radio-beginner">Beginner</label>
          </li>
          <li className="radio-group__items">
            <input type="radio" name="level" id="radio-intermediate" />
            <label htmlFor="radio-intermediate">Intermediate</label>
          </li>
          <li className="radio-group__items">
            <input type="radio" name="level" id="radio-master" />
            <label htmlFor="radio-master">Master</label>
          </li>
        </ul>
        <div className="button-holder">
          <a href="#" className="button large">
            Proceed
          </a>
        </div>
      </div>
    </header>
  );
};

export default Landing;
