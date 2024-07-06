import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  marvWebNewSet0005?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackground?: CSSProperties["background"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  marvWebNewSet0005,
  propWidth,
  propBackground,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      background: propBackground,
    };
  }, [propWidth, propBackground]);

  return (
    <div
      className={[styles.marvWebNewSet0005Parent, className].join(" ")}
      style={frameDivStyle}
    >
      <img
        className={styles.marvWebNewSet0005}
        alt=""
        src={marvWebNewSet0005}
      />
      <div className={styles.taxes}>
        <span className={styles.taxesTxt}>
          T<span className={styles.axes}>AXES</span>
        </span>
      </div>
      <div className={styles.div}>0/0</div>
    </div>
  );
};

export default FrameComponent2;
