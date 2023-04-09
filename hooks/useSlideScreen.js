import { useEffect } from "react";

export default function useSlideScreen(slideScreenActive, setSlideScreenActive) {

  useEffect(() => {
    document.body.className = slideScreenActive ? "isSlideActive" : "";
  });

  return { slideScreenActive, setSlideScreenActive };
}
