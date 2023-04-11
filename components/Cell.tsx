import styles from "~/styles/modules/cell.module.scss";
import { memo, useEffect, useRef } from "react";
import { TYPES } from "~/constants";

interface Props {
  value: number;
  type: TYPES;
}

const Cell: React.FC<Props> = ({ value, type }) => {
  const frontTopRef = useRef<HTMLParagraphElement>(null!);
  const frontBottomRef = useRef<HTMLParagraphElement>(null!);

  const previous = (value - 1 + type) % type;

  useEffect(() => {
    const topEL = frontTopRef.current;
    const bottomEl = frontBottomRef.current;

    topEL.classList.add(styles["top-front-animate"]);
    bottomEl.classList.add(styles["bottom-front-animate"]);

    const timer = setTimeout(() => {
      topEL.classList.remove(styles["top-front-animate"]);
      bottomEl.classList.remove(styles["bottom-front-animate"]);
    }, 950);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.cell}>
      <p className={`${styles.top}`} data-value={previous}></p>
      <p className={`${styles.bottom}`} data-value={value}></p>

      <p ref={frontTopRef} className={`${styles.front} ${styles.top}`}>
        {value}
      </p>
      <p ref={frontBottomRef} className={`${styles.front} ${styles.bottom}`} data-value={value}></p>
    </div>
  );
};

export default memo(Cell);
