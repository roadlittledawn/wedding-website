import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import Logo from "../components/Logo";
// import FeatherIcon from "../components/Icons";
import { siteOptions } from "../utils/constants";
import NavLink from "./NavLink";

const Header = ({ className }) => {
  return (
    <>
      <header
        className={className}
        css={css`
          position: relative;
          top: 0;
          z-index: 80;

          a {
            text-decoration: none;
          }
        `}
      >
        <div
          css={css`
            height: var(--global-header-height);
            display: flex;
            justify-content: space-between;
            max-width: var(--site-max-width);
            margin: 0 auto;
            padding: 0 var(--site-content-padding);
            align-items: center;
          `}
        >
          <div
            css={css`
              max-width: 33%;
            `}
          >
            <Link
              to={"/"}
              css={css`
                align-items: center;
                position: relative;
                &:hover {
                  &::before {
                    position: absolute;
                    content: "";
                    height: 20px;
                    width: 20px;
                    background-color: #fddf99;
                    border-radius: 50%;
                    left: 50%;
                    top: 0;
                    transform: translate(-77%, -400%);
                    z-index: 100;
                    box-shadow: 0 0 60px 30px #fddf99;
                  }
                }
              `}
            >
              <Logo />
            </Link>
          </div>
          <nav
            css={css`
              display: block;
              @media screen and (max-width: ${siteOptions.layout
                  .mobileBreakpoint}) {
                display: none;
              }
            `}
          >
            <ul
              css={css`
                margin: 0;
                margin-left: 1rem;
                padding: 0;
                display: flex;
                align-items: center;
                list-style-type: none;

                > li {
                  transition: all 0.2s ease-out;
                  /* color: var(--secondary-text-color); */

                  &:not(:first-of-type) {
                    margin-left: 1em;
                  }
                }
              `}
            >
              <li>
                <NavLink to={"/where-to-stay"}>Where to stay</NavLink>
              </li>
              <li>
                <NavLink to={"/things-to-do"}>Things to do</NavLink>
              </li>
              <li>
                <NavLink to={"/photos"}>Photos</NavLink>
              </li>
              <li>
                <NavLink to={"/rsvp"}>RSVP</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
