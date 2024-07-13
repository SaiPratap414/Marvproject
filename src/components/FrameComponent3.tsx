import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.heroContentParent, className].join(" ")}>
      <div className={styles.heroContent}>
        <img
          className={styles.marvWebRemovedBg00011}
          loading="lazy"
          alt=""
          src="/marv-web-removed-bg0001-1@2x.png"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.httpslottiefilescomanimatParent}>
          <img
            className={styles.httpslottiefilescomanimatIcon}
            alt=""
            src="/star.gif"
          />
          <img
            className={styles.httpslottiefilescomanimatIcon1}
            alt=""
            src="/star.gif"
          />
          <div className={styles.content}>
            <img
              className={styles.httpslottiefilescomanimatIcon2}
              alt=""
              src="/star.gif"
            />
            <div className={styles.httpslottiefilescomanimatWrapper}>
              <img
                className={styles.httpslottiefilescomanimatIcon3}
                alt=""
                src="/star.gif"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.heroDescriptionContentParent}>
                <div className={styles.heroDescriptionContent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameDiv}>
                      <div className={styles.mParent}>
                        <h1 className={styles.m}>M</h1>
                        <h1 className={styles.m1}>M</h1>
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.aParent}>
                        <h1 className={styles.a}>A</h1>
                        <h1 className={styles.a1}>A</h1>
                      </div>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.rParent}>
                        <h1 className={styles.r}>R</h1>
                        <h1 className={styles.r1}>R</h1>
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.vParent}>
                        <h1 className={styles.v}>V</h1>
                        <h1 className={styles.v1}>V</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.marvIsAContainer}>
                    <span className={styles.marvIsAContainer1}>
                      <p className={styles.marvIsA}>
                        Marv is a slightly racist, shy frog who loves to dress
                        up.  In the world of Solana, Marv has become a unique
                        and influential figure.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <button className={styles.buyBackgroundParent}>
                <div className={styles.buyBackground} />
                <div className={styles.buyNow}>Buy Now</div>
              </button>
            </div>
          </div>
          <div className={styles.marvWebNewSet0011Wrapper}>
            <img
              className={styles.marvWebNewSet0011}
              loading="lazy"
              alt=""
              src="/marv-web-new-set0011@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
