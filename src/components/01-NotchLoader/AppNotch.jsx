import { useState, useRef } from "react";
import "./global.scss";
import gsap from "gsap";
import NotchLoader from "./NotchLoader/NotchLaoder";
import Home from "./Home/Home";

export default function AppNotch() {
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
