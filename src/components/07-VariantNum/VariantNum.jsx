import { useEffect, useState } from "react";
import s from "./VariantNum.module.scss";

export default function VariantNum() {
  const [numbers, setNumbers] = useState("000");

  useEffect(() => {
    let count = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        count++;
        setNumbers(count.toString().padStart(3, "0"));
        if (count === 100) clearInterval(interval);
      }, 50);
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <main className={s.variantNum}>
      <div className={s.variantNum__header}>
        <div className={s.variantNum__header__title}>
          <span>CR</span>
        </div>

        <div className={s.variantNum__header__right}>
          <span>font-variant-numeric: </span>
          <span>tabular-nums;</span>
        </div>
      </div>
      <div className={s.variantNum__center}>
        <div className={s.variantNum__center__left}>
          <span className={s.variantNum__center__left__numbers}>{numbers}</span>
        </div>
        <div className={s.variantNum__center__center}>
          <span className={s.variantNum__center__center__versus}>VS</span>
        </div>
        <div className={s.variantNum__center__right}>
          <span className={s.variantNum__center__right__numbers}>
            {numbers}
          </span>
        </div>
      </div>
      <div className={s.variantNum__footer}>
        <span>BASICS #004</span>
      </div>
    </main>
  );
}
