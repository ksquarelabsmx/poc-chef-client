import styledComponents from "styled-components";

export const NavBarContainer = styledComponents.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "2.5rem",
  bottom: "0px",
  position: "fixed",
  boxShadow: " 0 -1px 4px 0 rgba(0, 0, 0, 0.3)",
  background: "#f2f2f2",
});

export const NavBarItem = styledComponents.div({
  width: "33%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
});