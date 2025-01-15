import { useRef, useState } from "react";
import "./global.scss";
import StaggerMagazine from "./components/03-StaggerMagazine/StaggerMagazine";
import ClipPathLoader from "./components/02-ClipPathLoader/ClipPathLoader";
import Loader from "./components/04-StaggerThanks/Loader";

export default function App() {
  return (
    <>
      <Loader />
    </>
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
