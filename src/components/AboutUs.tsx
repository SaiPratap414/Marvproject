import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUs, className].join(" ")}  data-scroll-to="About">
      <div className={styles.aboutUsContent}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.aNewKingHasRisenParent}>
          <h3 className={styles.aNewKing}>A New King Has Risen</h3>
          <img
            className={styles.crowmAnimationIcon}
            loading="lazy"
            alt=""
            src="/c.gif"
          />
        </div>
        <div className={styles.marvImage}>
          <img
            className={styles.marv0005Icon}
            loading="lazy"
            alt=""
            src="/marv0005@2x.png"
          />
        </div>
      </div>
      <div className={styles.aboutUsInner}>
        <div className={styles.marvAFrogWithADistinctPParent}>
          <div className={styles.marvAFrog}>
            Marv, a frog with a distinct personality, stands out in the Solana
            ecosystem. He’s slightly racist, a trait that sometimes leads to
            awkward social interactions. His shyness makes him a reserved
            figure, often observing more than participating. However, Marv's
            love for dressing up adds a flair to his character, making him a
            stylish and memorable ruler.
          </div>
          <div className={styles.despiteHisQuirksMarvHasRWrapper}>
            <div className={styles.despiteHisQuirksContainer}>
              <span>
                <p className={styles.despiteHisQuirks}>
                  Despite his quirks, Marv has risen to prominence in Solana,
                  where he rules with a gentle touch and a keen sense of
                  fashion. His approach to leadership combines his shy nature
                  with an undeniable charisma, creating a balance that resonates
                  with his community.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
              </span>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
    </section>
  );
};

export default AboutUs;
