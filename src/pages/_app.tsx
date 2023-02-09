import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box
      as="main"
      className={inter.className}
      maxWidth="1920px"
      color="black.100"
    >
      <Head>
        <title>RW</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Header />
        <Box paddingTop="102px">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </Box>
  );
}
