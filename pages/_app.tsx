import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import PageWrapper from "../components/shared/PageWrapper/PageWrapper";
import MainWrapper from "../components/shared/MainWrapper/MainWrapper";
import "../i18n";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageWrapper menuOpen={isMenuOpen} closeMenu={closeMenu}>
        <Header handleMenuClick={handleMenuClick} />

        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>

        <Footer className="mt-auto" />
      </PageWrapper>
    </>
  );
}

export default MyApp;
