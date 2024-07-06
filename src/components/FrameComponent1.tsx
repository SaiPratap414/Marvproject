import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  marvWebNewSet0003?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackground?: CSSProperties["background"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  marvWebNewSet0003,
  propWidth,
  propBackground,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      background: propBackground,
    };
  }, [propWidth, propBackground]);

  return (
    <div
      className={[styles.marvWebNewSet0003Parent, className].join(" ")}
      style={frameDiv1Style}
    >
      <img
        className={styles.marvWebNewSet0003}
        alt=""
        src={marvWebNewSet0003}
      />
      <div className={styles.freezeMintContainer}>
        <span className={styles.freezeMintContainer1}>
          <span className={styles.f}>F</span>
          <span className={styles.reeze}>{`REEZE `}</span>
          <span className={styles.m}>{`& M`}</span>
          <span className={styles.int}>INT</span>
        </span>
      </div>
      <div className={styles.revoke}>
        <span className={styles.revokeTxt}>
          R<span className={styles.evoke}>evoke</span>
        </span>
      </div>
    </div>
  );
};

export default FrameComponent1;
