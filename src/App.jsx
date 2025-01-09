import { useRef, useState } from "react";
import Home from "./components/01-NotchLoader/Home/Home";
import NotchLoader from "./components/01-NotchLoader/NotchLoader/NotchLaoder";
import "./global.scss";
import gsap from "gsap";

export default function App() {
  const [isLoader, setIsLoader] = useState(true);
  const mainTimeline = useRef(gsap.timeline({ paused: true }));

  return (
    <>
      {isLoader && (
        <NotchLoader setIsLoader={setIsLoader} timeline={mainTimeline} />
      )}
      <Home timeline={mainTimeline} />
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
