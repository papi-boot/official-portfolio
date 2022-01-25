import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "link",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans",
    body: "Plus Jakarta Sans",
  },
  config,
});
