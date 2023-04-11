import styles from "~/styles/modules/clock.module.scss";
import Cell from "~/components/Cell";
import { useEffect, useSyncExternalStore } from "react";
import { TYPES } from "~/constants";
import store from "~/store";

const subscribe = (notify: Fn) => store.subscribe(notify);

const Clock: React.FC<{ now: INow }> = ({ now: ssrNow }) => {
  const now = useSyncExternalStore(
    subscribe,
    () => store.now,
    () => ssrNow
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const clear = store.init(ssrNow);

      return clear;
    }
  });

  return (
    <ul className={styles.wrapper}>
      <li className={styles.cell}>
        <Cell value={now.hours} type={TYPES.HOURS} />
      </li>
      <li className={styles.cell}>
        <Cell value={now.minutes} type={TYPES.MINUTES} />
      </li>
      <li className={styles.cell}>
        <Cell value={now.seconds} type={TYPES.SECONDS} />
      </li>
    </ul>
  );
};

export default Clock;
