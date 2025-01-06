import { useState } from "react";
import Home from "./components/01-NotchLoader/Home/Home";
import NotchLoader from "./components/01-NotchLoader/NotchLoader/NotchLaoder";
import "./global.scss";
import gsap from "gsap";
import TextTransformHover from "./components/XX-TextTransformHover/TextTransformHover";
import ClipPathLoader from "./components/02-ClipPathLoader/ClipPathLoader";

export default function App() {
  // const [isLoader, setIsLoader] = useState(true);
  // const [mainTimeline] = useState(() => gsap.timeline({ paused: true }));

  return (
    <>
      {/* {isLoader && (
        <NotchLoader setIsLoader={setIsLoader} timeline={mainTimeline} />
      )}
      <Home timeline={mainTimeline} /> */}
      {/* <TextTransformHover /> */}
      <ClipPathLoader />
    </>
  );
}
