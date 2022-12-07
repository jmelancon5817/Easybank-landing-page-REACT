import "../styles/styles.css";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero_image"></div>
          <div className="hero_text conatiner--pall">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="hero_button" type="button">
              Request Invite
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
