import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {
            "stunk-violet": ["#a953f8"],
            "stunk-green": ["#0acb93"],
            "stunk-red": ["#ff5e42"],
            "stunk-yellow": ["f5fe57"],
            "stunk-blue": ["#51c5ea"],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
