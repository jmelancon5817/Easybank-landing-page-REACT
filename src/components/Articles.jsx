import "../styles/styles.css";

function Articles() {
  return (
    <div>
      <section className="articles">
        <div className="article_content container conatiner--pall">
          <h2>Latest Articles</h2>
          <div className="article_grid">
            <a href="#" className="article_item">
              <div className="article_image currency"></div>
              <div className="article_text">
                <div className="article_author">By Claire Robinson</div>
                <div className="article_title">
                  Receive money in any currency with no fees
                </div>
                <div className="article_description">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </div>
              </div>
            </a>
            <a href="#" className="article_item">
              <div className="article_image restaurant"></div>
              <div className="article_text">
                <div className="article_author">By Wilson Hutton</div>
                <div className="article_title">
                  Treat yourself without worrying about money
                </div>
                <div className="article_description">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </div>
              </div>
            </a>
            <a href="#" className="article_item">
              <div className="article_image plane"></div>
              <div className="article_text">
                <div className="article_author">By Wilson Hutton</div>
                <div className="article_title">
                  Take your Easybank card wherever you go
                </div>
                <div className="article_description">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </div>
              </div>
            </a>
            <a href="#" className="article_item">
              <div className="article_image confetti"></div>
              <div className="article_text">
                <div className="article_author">By Claire Robinson</div>
                <div className="article_title">
                  Our invite-only Beta accounts are now live!
                </div>
                <div className="article_description">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articles;
