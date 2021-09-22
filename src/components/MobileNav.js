import React, { useState, useRef } from "react";
import { css } from "@emotion/react";
import Hamburger from "./Hamburger";
import MobileNavMenu from "./MobileNavMenu";
import { siteOptions } from "../utils/constants";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const mobileNavRef = useRef();

  return (
    <div
      ref={mobileNavRef}
      css={css`
        display: none;
        @media screen and (max-width: ${siteOptions.layout.mobileBreakpoint}) {
          display: block;
        }
      `}
    >
      <Hamburger open={open} onClick={() => setOpen(!open)} />
      <MobileNavMenu open={open} />
    </div>
  );
};

export default MobileNav;
