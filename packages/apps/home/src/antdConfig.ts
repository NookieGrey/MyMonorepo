import type { ThemeConfig } from "antd";

export const antdThemeConfig: ThemeConfig = {
  cssVar: true,
  token: {
    colorBgContainer: "#F1F4F6",
    colorTextBase: "#000000",
    colorPrimary: "#2A7FFF",
    colorBgElevated: "rgb(241, 244, 246, 80%)",
    colorTextPlaceholder: "#909090",
    lineWidth: 0,
  },
  components: {
    Button: {
      colorPrimaryHover: "#2A7FFF",
      controlHeight: 40,
      paddingContentHorizontal: 25,
    },
    Input: {
      colorText: "#000000",
      activeBorderColor: "rgb(42, 127, 255, 80)",
      hoverBorderColor: "transparent",
      colorBorder: "transparent",
      lineWidth: 2,
      controlHeight: 38,
      paddingInline: 15,
      borderRadius: 38,
    },
    Dropdown: {
      paddingBlock: 6,
      controlPaddingHorizontal: 10,
      boxShadowSecondary: "0px 2px 7px rgba(0, 0, 0, 0.15)",
    },
  },
};
