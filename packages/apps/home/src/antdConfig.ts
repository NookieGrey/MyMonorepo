import type {ThemeConfig} from "antd";
import {theme} from "antd";

const {getDesignToken} = theme;

export const antdThemeConfig: ThemeConfig = {
    cssVar: true
};

// By static function
export const antdGlobalThemeToken = getDesignToken(antdThemeConfig);
