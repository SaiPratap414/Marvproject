import { FunctionComponent, useCallback } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://twitter.com/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://youtube.com/c/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://t.me/");
  }, []);

  const onHomeButtonClick = useCallback(() => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className={[styles.footer, className].join(" ")} data-scroll-to="Disclaimer">
      <div className={styles.bg}>
        <div className={styles.bgChild} />
        <img
          className={styles.marvWebLastPageWithBg0002}
          alt=""
          src="/marv-web-last-page-with-bg0002-1@2x.png"
        />
      </div>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.heading2}>
            <div className={styles.disclaimer}>Disclaimer</div>
          </div>
        </div>
      </div>
      <div className={styles.footerActions}>
        <div className={styles.actionsContainer}>
          <form className={styles.footerButtonsWrapper}>
            <div className={styles.overlayshadow1}>
              <div className={styles.button1}>
                <input
                  className={styles.container4}
                  placeholder="Risk Disclosure"
                  type="text"
                />
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <img className={styles.icon1} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.overlayshadow2}>
              <button className={styles.button2}>
                <div className={styles.link}>
                  <div className={styles.buyMarv}>Buy $Marv</div>
                </div>
              </button>
              <div className={styles.border}>
                <input
                  className={styles.margin}
                  placeholder="Contract address: "
                  type="text"
                />
                <div className={styles.button3}>
                  <div className={styles.container7}>
                    <img className={styles.icon2} alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.margin1}>
          <div className={styles.container8}>
            <div className={styles.margin2}>
              <div className={styles.container9}>
                <div className={styles.container10}>
                  <div className={styles.polasvg}>
                    <div className={styles.polaLettersParent}>
                      <div className={styles.polaLetters}>
                        <div className={styles.mParent}>
                          <div className={styles.m}>M</div>
                          <div className={styles.m1}>M</div>
                        </div>
                      </div>
                      <div className={styles.aParent}>
                        <div className={styles.a}>A</div>
                        <div className={styles.a1}>A</div>
                      </div>
                      <div className={styles.polaLetters1}>
                        <div className={styles.rParent}>
                          <div className={styles.r}>R</div>
                          <div className={styles.r1}>R</div>
                        </div>
                      </div>
                      <div className={styles.vParent}>
                        <div className={styles.v}>V</div>
                        <div className={styles.v1}>V</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.smallmargin}>
                    <div className={styles.small}>
                      <div className={styles.joinTheMarv}>
                        Join the Marv Army.
                      </div>
                    </div>
                  </div>
                  <div className={styles.container11}>
                    <div
                      className={styles.link1}
                      onClick={onLinkContainerClick}
                    >
                      <div className={styles.container12}>
                        <img
                          className={styles.icon3}
                          loading="lazy"
                          alt=""
                          src="/tww.png"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.link2}
                      onClick={onLinkContainerClick1}
                    >
                      <div className={styles.container13}>
                        <img
                          className={styles.icon4}
                          loading="lazy"
                          alt=""
                          src="/icon-5.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.link3}
                      onClick={onLinkContainerClick2}
                    >
                      <div className={styles.container14}>
                        <img
                          className={styles.icon5}
                          loading="lazy"
                          alt=""
                          src="/dex.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin7}>
              <div className={styles.container21}>
                <div className={styles.container22}>
                  <div className={styles.goPolaGo}>Go Marv Go!</div>
                </div>
                <div className={styles.container23}>
                  <div className={styles.margin8}>
                    <div className={styles.container24}>
                      <div className={styles.link7}>
                        <div className={styles.joinMarvarmy}>TikTok</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin9}>
                    <div className={styles.container25}>
                      <div className={styles.link8}>
                        <div className={styles.memes}>Memes</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin10}>
                    <div className={styles.container26}>
                      <div className={styles.link9}>
                        <div className={styles.twitter}>Twitter</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin11}>
                    <div className={styles.container27}>
                      <div className={styles.link10}>
                        <div className={styles.telegram}>Telegram</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin12}>
                    <div className={styles.container28}>
                      <div className={styles.link11}>
                        <div className={styles.reddit}>Instagram</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeButtonContainer}>
  <img
    className={styles.homeButton}
    src="/arrow.png"
    alt="Home"
    onClick={onHomeButtonClick}
  />
  <div className={styles.homeButtonText}>Punch me to go home</div>
</div>

      </div>
    </section>
  );
};

export default Footer;
