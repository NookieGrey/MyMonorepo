import { NavLink } from "react-router";
import { Flex } from "antd";
import { SvgLogo } from "./svg/svgLogo.tsx";

export function Logo() {
  return (
    <NavLink to={"/"}>
      <Flex>
        <SvgLogo />
      </Flex>
    </NavLink>
  );
}
