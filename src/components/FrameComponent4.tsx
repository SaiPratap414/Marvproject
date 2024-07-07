import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const scrollToSection = useCallback((sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    const anchor = document.querySelector(`[data-scroll-to='${sectionId}']`);
    if (anchor) {
      console.log("Found anchor:", anchor);
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Cannot find anchor for sectionId '${sectionId}'`);
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    console.log("Nav clicked:", sectionId);
    scrollToSection(sectionId);
  };

  return (
    <header className={[styles.navWrapper, className].join(" ")}>
      <div className={styles.nav}>
        <div className={styles.navBackgroundParent}>
          <div className={styles.navBackground} />
          <div className={styles.frameWrapper}>
            <div className={styles.homeparent}>
              <a className={styles.home} onClick={() => handleNavClick("header")}>
                Home
              </a>
              <a className={styles.about} onClick={() => handleNavClick("About")}>
                About
              </a>
              <a className={styles.gallery} onClick={() => handleNavClick("Gallery")}>
                Gallery
              </a>
              <a className={styles.roadmap} onClick={() => handleNavClick("Roadmap")}>
                Roadmap
              </a>
              <a className={styles.marvnomics} onClick={() => handleNavClick("Marvnomics")}>
                Marvnomics
              </a>
              <a className={styles.howToBuy} onClick={() => handleNavClick("HowToBuy")}>
                How to Buy
              </a>
              <a className={styles.memes} onClick={() => handleNavClick("Memes")}>
                Memes
              </a>
              <a className={styles.disclaimer} onClick={() => handleNavClick("Disclaimer")}>
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
