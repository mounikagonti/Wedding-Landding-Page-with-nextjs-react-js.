import "../styles/index.scss"
import type { AppProps } from "next/app"
import 'swiper/scss';
import 'swiper/scss/autoplay';
import "swiper/scss/effect-coverflow";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
