// components/PageWithTransition.tsx
import { useState, useEffect, useRef } from "react";
//import { AppProps } from "next/app";
//import { useRouter } from "next/router";

const WithTransition = ({ Component, pageProps, router }) => {
  const last = useRef(Component);

  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    const handler = () => {
      setTransitioning(true);
      setTimeout(() => {
        last.current = Component;
        setTransitioning(false);
      }, 280);
    };

    router.events.on("routeChangeComplete", handler);

    return () => {
      router.events.off("routeChangeComplete", handler);
    };
  }, [Component, router.events]);

  const Screen = !transitioning ? Component : last.current;

  return (
    <div className={!transitioning ? 'animate-slideUpEnter' : 'animate-slideUpLeave'}>
      <Screen {...pageProps} />
    </div>
  );
};
export default WithTransition;
