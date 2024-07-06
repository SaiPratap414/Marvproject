import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const anchor = document.querySelector(`[data-scroll-to='${sectionId}']`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header className={[styles.navWrapper, className].join(" ")}>
      <div className={styles.nav}>
        <div className={styles.navBackgroundParent}>
          <div className={styles.navBackground} />
          <div className={styles.frameWrapper}>
            <div className={styles.homeparent}>
              <a className={styles.home}>Home</a>
              <a className={styles.about} onClick={() => scrollToSection("About")}>
                About
              </a>
              <a className={styles.gallery} onClick={() => scrollToSection("Gallery")}>
                Gallery
              </a>
              <a className={styles.roadmap} onClick={() => scrollToSection("Roadmap")}>
                Roadmap
              </a>
              <a className={styles.marvnomics} onClick={() => scrollToSection("Marvnomics")}>
                Marvnomics
              </a>
              <a className={styles.howToBuy} onClick={() => scrollToSection("HowToBuy")}>
                How to Buy
              </a>
              <a className={styles.memes} onClick={() => scrollToSection("Memes")}>
                Memes
              </a>
              <a className={styles.disclaimer} onClick={() => scrollToSection("Disclaimer")}>
                Disclaimer
              </a>
            </div>
          </div>
          <div className={styles.navMenu}>
            <div className={styles.navMenuInner}>
              <div className={styles.frameParent}>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/tw.png"
                  />
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/tg.png"
                  />
                </div>
                <img className={styles.dexIcon} alt="" src="/dex@2x.png" />
              </div>
            </div>
            <div className={styles.buttonBackgroundParent}>
              <div className={styles.buttonBackground} />
              <a className={styles.buy}>Buy</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
