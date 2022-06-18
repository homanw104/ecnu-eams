import bg_dark from "assets/background_dark.png";
import bg_light from "assets/background_light.png";

const fontFamily = '"PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei"';
const fontList = {
  textSmRegular: {
    family: fontFamily,
    size: "14px",
    weight: "400",
    lineHeight: "20px"
  },
  textSmMedium: {
    family: fontFamily,
    size: "14px",
    weight: "500",
    lineHeight: "20px"
  },
  displayXsRegular: {
    family: fontFamily,
    size: "24px",
    weight: "400",
    lineHeight: "32px"
  },
  displayXsMedium: {
    family: fontFamily,
    size: "24px",
    weight: "500",
    lineHeight: "32px"
  },
  displaySmRegular: {
    family: fontFamily,
    size: "30px",
    weight: "400",
    lineHeight: "38px",
  },
  displaySmMedium: {
    family: fontFamily,
    size: "30px",
    weight: "500",
    lineHeight: "38px",
  },
  displaySmBold: {
    family: fontFamily,
    size: "30px",
    weight: "700",
    lineHeight: "38px",
  },
  displayMdRegular: {
    family: fontFamily,
    size: "36px",
    weight: "400",
    lineHeight: "44px",
  },
  displayMdMedium: {
    family: fontFamily,
    size: "36px",
    weight: "500",
    lineHeight: "44px",
  }
};

export const lightTheme = {
  colors: {
    red900: "rgba(172,38,52,1)",
    red800: "rgba(182,53,64,1)",
    red700: "rgba(196,59,71,1)",
    red600: "rgba(214,67,78,1)",
    red500: "rgba(230,75,81,1)",
    red400: "rgba(224,90,101,1)",
    red300: "rgba(214,119,129,1)",
    red200: "rgba(227,156,164,1)",
    red100: "rgba(246,206,215,1)",
    red050: "rgba(251,236,240,1)",
    gray900: "rgba(42,51,66,1)",
    gray800: "rgba(51,63,81,1)",
    gray700: "rgba(64,79,101,1)",
    gray600: "rgba(77,95,122,1)",
    gray500: "rgba(85,105, 135,1)",
    gray400: "rgba(136,150,171,1)",
    gray300: "rgba(187,195,207,1)",
    gray200: "rgba(213,218,225,1)",
    gray100: "rgba(238,240,243,1)",
    gray050: "rgba(247,248,249,1)",
    white: "rgba(255,255,255,1)",
    paleTurquoise: "rgba(187,247,208,1)",
    transparentMediumSlateBlue: "rgba(105,81,255,0.05)"
  },
  fonts: fontList,
  background: bg_light
};

export const darkTheme = {
  colors: {
    red900: "rgba(172,38,52,1)",
    red800: "rgba(182,53,64,1)",
    red700: "rgba(196,59,71,1)",
    red600: "rgba(214,67,78,1)",
    red500: "rgba(230,75,81,1)",
    red400: "rgba(224,90,101,1)",
    red300: "rgba(214,119,129,1)",
    red200: "rgba(227,156,164,1)",
    red100: "rgba(246,206,215,1)",
    red050: "rgba(251,236,240,1)",
    gray900: "rgba(42,51,66,1)",
    gray800: "rgba(51,63,81,1)",
    gray700: "rgba(64,79,101,1)",
    gray600: "rgba(77,95,122,1)",
    gray500: "rgba(85,105, 135,1)",
    gray400: "rgba(136,150,171,1)",
    gray300: "rgba(187,195,207,1)",
    gray200: "rgba(213,218,225,1)",
    gray100: "rgba(238,240,243,1)",
    gray050: "rgba(247,248,249,1)",
    white: "rgba(255,255,255,1)",
    paleTurquoise: "rgba(187,247,208,1)",
    transparentMediumSlateBlue: "rgba(105,81,255,0.05)"
  },
  fonts: fontList,
  background: bg_dark
};
