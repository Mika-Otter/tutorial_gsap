import { useEffect, useRef, useState } from "react";
import "./global.scss";
import StaggerMagazine from "./components/03-StaggerMagazine/StaggerMagazine";
import ClipPathLoader from "./components/02-ClipPathLoader/ClipPathLoader";
import Loader from "./components/04-StaggerThanks/Loader";
import Landing from "./components/04-StaggerThanks/Landing";
import gsap from "gsap";
import ThankYou from "./components/04-StaggerThanks/ThankYou";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function App() {
  const [mainTimeline] = useState(() => gsap.timeline({ paused: true }));
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf?.(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      options={{
        duration: 0.6,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 2,
        infinite: false,
      }}
      root
    >
      <Loader timeline={mainTimeline} />
      <Landing timeline={mainTimeline} />
      <ThankYou />
    </ReactLenis>
  );
}

// Comps for other tutorials
//// CliphPathLoader
// import ClipPathLoader from "./components/02-ClipPathLoader/ClipPathLoader";
{
  /* <ClipPathLoader /> */
}

//// TextTransformHover
// import TextTransformHover from "./components/03-TextTransformHover/TextTransformHover";
{
  /* <TextTransformHover /> */
}

////NotchLoader
// import Home from "./components/01-NotchLoader/Home/Home";
// import NotchLoader from "./components/01-NotchLoader/NotchLoader/NotchLaoder";
// const [isLoader, setIsLoader] = useState(true);
// const mainTimeline = useRef(gsap.timeline({ paused: true }));
{
  /* {isLoader && (
        <NotchLoader setIsLoader={setIsLoader} timeline={mainTimeline} />
      )}
      <Home timeline={mainTimeline} /> */
}

//// StaggerMagazine
{
  /* <StaggerMagazine /> */
}
