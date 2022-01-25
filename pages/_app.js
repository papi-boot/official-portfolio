import { ChakraProvider } from "@chakra-ui/react";
import { Container, ColorModeScript } from "@chakra-ui/react";
import { theme } from "context/theme";
import GlobalDataProvider from "context/GlobalData";
import Navbar from "component/Navbar";
import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "styles/global.scss";
const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalDataProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
        <Container maxW="container.lg" paddingTop="1.5rem">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </GlobalDataProvider>
  );
};

export default MyApp;
