// gluestack-ui.config.ts
import { config as defaultConfig, createConfig } from "@gluestack-ui/themed";

export const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    fonts: {
      ...defaultConfig.theme.tokens.fonts,
      karla: "karla",
    },
    colors: {
      ...defaultConfig.theme.tokens.colors,

      gray700: "#1A181B",
      gray600: "#3E3A40",
      gray500: "#5F5B62",
      gray400: "#9F9BA1",
      gray300: "#D9D8DA",
      gray200: "#EDECEE",
      gray100: "#F7F7F8",
      blue500: "#364D9D",
      blue100: "#647AC7",
    },
  },
});

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module "@gluestack-style/react" {
  interface ICustomConfig extends ConfigType {}
}
 