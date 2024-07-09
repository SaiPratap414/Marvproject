import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")} id="header">
      <FrameComponent4 />
      <FrameComponent3 />
    </section>
  );
};

export default Header;
