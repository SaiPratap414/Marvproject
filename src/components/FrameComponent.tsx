import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  marvWebNewSet0004?: string;
  totalSupply?: string;
  m?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackground?: CSSProperties["background"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  marvWebNewSet0004,
  totalSupply,
  m,
  propWidth,
  propBackground,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      background: propBackground,
    };
  }, [propWidth, propBackground]);

  return (
    <div
      className={[styles.marvWebNewSet0004Parent, className].join(" ")}
      style={frameDiv2Style}
    >
      <img
        className={styles.marvWebNewSet0004}
        alt=""
        src={marvWebNewSet0004}
      />
      <div className={styles.totalSupply}>{totalSupply}</div>
      <div className={styles.m}>{m}</div>
    </div>
  );
};

export default FrameComponent;
