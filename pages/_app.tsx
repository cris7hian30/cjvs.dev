import { Header } from "@/components/header";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransitions } from "@/utils/animations";
import "./styles/globals.css";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Script from "next/script";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.1}
          duration={5}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "fixed inset-0 h-full w-full -z-10 flex items-center justify-center backdrop-blur-lg"
          )}
        />
        <Header />
        <motion.main
          className="block m-auto max-w-7xl"
          {...pageTransitions.zoomInFadeOut}
        >
          <Component {...pageProps} className="z-10" />
        </motion.main>
      </motion.div>
      {/* Google Analytics */}
      {GOOGLE_ANALYTICS_ID && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          ></Script>
          <Script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      )}
    </AnimatePresence>
  );
};

export default App;
