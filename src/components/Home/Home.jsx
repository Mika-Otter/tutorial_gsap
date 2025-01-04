import s from "./Home.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <video
        className={s.video}
        src="/videos/TreeLakelow.webm"
        autoPlay
        muted
        loop
      />
      <nav className={s.home__nav}>
        <span>Services</span>
        <span>About</span>
        <span>Contact</span>
      </nav>
      <h1 className={s.title}>Take to the skies</h1>
      <div className={s.home__bottom}>
        <span className={s.home__bottom__span}>Discover new horizons</span>
        <span className={s.home__bottom__span}>Scroll to explore</span>
      </div>
    </main>
  );
}
