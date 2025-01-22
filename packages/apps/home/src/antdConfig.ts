import type {ThemeConfig} from "antd";

export const antdThemeConfig: ThemeConfig = {
    cssVar: true,
    token: {
        colorPrimary: '#2A7FFF',
    },
    components: {
        Button: {
            colorPrimaryHover: "#2A7FFF",
            controlHeight: 40,
            paddingContentHorizontal: 25,
        },
        Dropdown: {
            // я не нашел как задать blur и отступ всплывающего окна от кнопки
            colorBgElevated: 'rgb(241, 244, 246, 80%)',
            paddingBlock: 6,
            controlPaddingHorizontal: 10,
            boxShadowSecondary: '0px 2px 7px rgba(0, 0, 0, 0.15)',
        }
    }
};
