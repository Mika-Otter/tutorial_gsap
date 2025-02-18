import { useEffect, useRef, useState } from "react";
import "./global.scss";
import gsap from "gsap";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import ScaleGallery from "./components/08-ScaleGallery/ScaleGallery";
import Home from "./components/01-NotchLoader/Home/Home";
import NotchLoader from "./components/01-NotchLoader/NotchLoader/NotchLaoder";
import MenuExploration from "./components/09-MenuExploration/MenuExploration";

export default function App() {
  const mainTimeline = useRef(gsap.timeline({ paused: true }));
  const lenisRef = useRef(null);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf?.(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <MenuExploration />
      {/* <Home timeline={mainTimeline} />
      {isLoader && (
        <NotchLoader setIsLoader={setIsLoader} timeline={mainTimeline} />
      )} */}
    </>

    // <ReactLenis
    //   ref={lenisRef}
    //   options={{
    //     duration: 0.6,
    //     orientation: "vertical",
    //     gestureOrientation: "vertical",
    //     smoothWheel: true,
    //     wheelMultiplier: 0.8,
    //     touchMultiplier: 2,
    //     infinite: false,
    //   }}
    //   root
    // >
    //   <ScaleGallery />
    // </ReactLenis>
  );
}

// Comps for other tutorials

//// VarientNum
// import VariantNum from "./components/07-VariantNum/VariantNum";
{
  /* <VariantNum /> */
}

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
//import StaggerMagazine from "./components/03-StaggerMagazine/StaggerMagazine";
{
  /* <StaggerMagazine /> */
}

//// StaggerThanks
// import Loader from "./components/04-StaggerThanks/Loader";
// import Landing from "./components/04-StaggerThanks/Landing";
// import ThankYou from "./components/04-StaggerThanks/ThankYou";
{
  /* <Loader timeline={mainTimeline} />
      <Landing timeline={mainTimeline} />
      <ThankYou /> */
}

//// InfiniteBanner
// import InfiniteBanner from "./components/06-InfiniteBanner/InfiniteBanner";
// import Loader from "./components/06-InfiniteBanner/Loader";
{
  /* <Loader />
<InfiniteBanner /> */
}

//// RENAME FILES POWERSHELL

// $counter = 1
// $files = Get-ChildItem -Path "." -File
// $name = "scaleGallery"

// foreach ($file in $files) {
//     $extension = $file.Extension
//     $newName = "$name-$counter$extension"
//     Rename-Item -Path $file.FullName -NewName $newName
//     $counter++
// }
