import "../styles/styles.css";
import iconOnline from "../images/icon-online.svg";
import iconBudgeting from "../images/icon-budgeting.svg";
import iconOnboarding from "../images/icon-onboarding.svg";
import iconApi from "../images/icon-api.svg";

function Features() {
  return (
    <div>
      <section className="features">
        <div className="feature_content container conatiner--pall">
          <div className="feature_intro">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="feature_grid">
            <div className="feature_item">
              <div className="feature_icon">
                <img src={iconOnline} />
              </div>
              <div className="feature_title">Online Banking</div>
              <div className="feature_description">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </div>
            </div>

            <div className="feature_item">
              <div className="feature_icon">
                <img src={iconBudgeting} />
              </div>
              <div className="feature_title">Simple Budgeting</div>
              <div className="feature_description">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </div>
            </div>

            <div className="feature_item">
              <div className="feature_icon">
                <img src={iconOnboarding} />
              </div>
              <div className="feature_title">Fast Onboarding</div>
              <div className="feature_description">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </div>
            </div>

            <div className="feature_item">
              <div className="feature_icon">
                <img src={iconApi} />
              </div>
              <div className="feature_title">Open API</div>
              <div className="feature_description">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
