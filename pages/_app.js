import { ChakraProvider } from "@chakra-ui/react";
import { Container, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { theme } from "context/theme";
import { store } from "context/store";
import {
  faCalendar,
  faUserCircle,
  faQuoteLeft,
  faHome,
  faLink,
  faMoon,
  faSun,
  faCode,
  faAngleRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import GlobalDataProvider from "context/GlobalData";
import Navbar from "component/global/Navbar";
import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "styles/global.scss";
library.add(
  faCalendar,
  faUserCircle,
  faQuoteLeft,
  faHome,
  faLink,
  faMoon,
  faSun,
  faCode,
  faAngleRight,
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faClock,
  faQuoteLeft
);
const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalDataProvider>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Navbar />
          <Container maxW="container.lg" paddingTop="2rem">
            <Component {...pageProps} />
          </Container>
        </ChakraProvider>
      </Provider>
    </GlobalDataProvider>
  );
};

export default MyApp;
