import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";

// import FeatherIcon from "./Icons/FeatherIcon";

const MobileNavMenu = ({ open }) => {
  return (
    <nav
      css={css`
        z-index: 500;
        display: ${open ? "flex" : "none"};
        flex-direction: column;
        justify-content: center;
        background-color: var(--color-red-400);
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        right: 0;

        @media (max-width: 576px) {
          width: 100%;
        }

        a {
          font-size: 2rem;
          text-transform: uppercase;
          padding: 2rem 0;
          font-weight: bold;
          letter-spacing: 0.5rem;
          color: var(--color-yellow-400);
          text-decoration: none;
          transition: color 0.3s linear;

          @media (max-width: 576px) {
            font-size: 1.5rem;
            text-align: center;
          }
        }
      `}
    >
      <Link to={"/our-big-day"}>Our big day</Link>

      <Link to={"/where-to-stay"}>Where to stay</Link>

      <Link to={"/things-to-do"}>Things to do</Link>

      <Link to={"/band"}>The band</Link>

      <Link to={"/photos"}>Photos</Link>

      <Link to={"/rsvp"}>RSVP</Link>

      <div>
        <ul
          css={css`
            margin: 2em 0 0 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            list-style-type: none;
          `}
        ></ul>
      </div>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  open: PropTypes.bool,
};

export default MobileNavMenu;
