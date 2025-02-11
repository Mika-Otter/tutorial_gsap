import LogoNavSVG from "../SVG/LogoNavSVG";
import s from "./MenuExploration.module.scss";

export default function MenuExploration() {
  return (
    <>
      <main className={s.menuExploration}>
        <div className={s.nav}>
          <div className={s.nav__logo}>
            <LogoNavSVG />
          </div>
          <span className={s.nav__text}>
            CLIPPATH MENU <br />
            EXPLORATION
          </span>
        </div>
        <div className={s.menuExploration__menuCtn}>
          <div className={`${s.menuExploration__menu}`}>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item1}`}
            >
              <span className={s.menuExploration__menu__item__front1}>
                MENU
              </span>
              <span className={s.menuExploration__menu__item__back1}>OPEN</span>
            </div>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item1}`}
            >
              <span className={s.menuExploration__menu__item__front1}>
                SERVICES
              </span>
              <span className={s.menuExploration__menu__item__back1}>
                VIEW MORE
              </span>
            </div>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item1}`}
            >
              <span className={s.menuExploration__menu__item__front1}>
                ABOUT
              </span>
              <span className={s.menuExploration__menu__item__back1}>
                WE ARE
              </span>
            </div>

            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item1}`}
            >
              <span className={s.menuExploration__menu__item__front1}>
                CONTACT
              </span>
              <span className={s.menuExploration__menu__item__back1}>
                LET'S TALK
              </span>
            </div>
            <span className={s.number}>1.</span>
          </div>
          <div className={`${s.menuExploration__menu}`}>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item2}`}
            >
              <span className={s.menuExploration__menu__item__front2}>
                MENU
              </span>
              <span className={s.menuExploration__menu__item__back2}>OPEN</span>
            </div>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item2}`}
            >
              <span className={s.menuExploration__menu__item__front2}>
                SERVICES
              </span>
              <span className={s.menuExploration__menu__item__back2}>
                VIEW MORE
              </span>
            </div>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item2}`}
            >
              <span className={s.menuExploration__menu__item__front2}>
                ABOUT
              </span>
              <span className={s.menuExploration__menu__item__back2}>
                WE ARE
              </span>
            </div>

            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item2}`}
            >
              <span className={s.menuExploration__menu__item__front2}>
                CONTACT
              </span>
              <span className={s.menuExploration__menu__item__back2}>
                LET'S TALK
              </span>
            </div>
            <span className={s.number}>2.</span>
          </div>
          <div className={`${s.menuExploration__menu}`}>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item3}`}
            >
              <span className={s.menuExploration__menu__item__front3}>
                MENU
              </span>
              <span className={s.menuExploration__menu__item__back3}>OPEN</span>
            </div>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item3}`}
            >
              <span className={s.menuExploration__menu__item__front3}>
                SERVICES
              </span>
              <span className={s.menuExploration__menu__item__back3}>
                VIEW MORE
              </span>
            </div>
            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item3}`}
            >
              <span className={s.menuExploration__menu__item__front3}>
                ABOUT
              </span>
              <span className={s.menuExploration__menu__item__back3}>
                WE ARE
              </span>
            </div>

            <div
              className={`${s.menuExploration__menu__item} ${s.menuExploration__menu__item3}`}
            >
              <span className={s.menuExploration__menu__item__front3}>
                CONTACT
              </span>
              <span className={s.menuExploration__menu__item__back3}>
                LET'S TALK
              </span>
            </div>
            <span className={s.number}>3.</span>
          </div>
        </div>
        <footer className={s.footer}>DEV #004</footer>
      </main>
    </>
  );
}
