// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    main: "#BE3130",
  },
  secondary: {
    main: "#35BCF2",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      primary: {
        main: colorTokens.primary.main,
      },
      secondary: {
        main: colorTokens.secondary.main,
      },
      neutral: {
        dark: colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[300],
        light: colorTokens.grey[50],
      },
      background: {
        default: colorTokens.grey[10],
        alt: colorTokens.grey[0],
      },
    },
    typography: {
      fontFamily: ["Montserrat", "serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 24,
        fontWeight: 700
      },
      h2: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 22,
        fontWeight: 700
      },
      h3: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 20,
        fontWeight: 600
      },
      h4: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 18,
        fontWeight: 600
      },
      h5: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 16,
        fontWeight: 550
      },
      h6: {
        fontFamily: ["Montserrat", "serif"].join(","),
        fontSize: 16,
      },
    },
  };
};
