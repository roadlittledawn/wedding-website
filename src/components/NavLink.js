import PropTypes from "prop-types";
import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/react";

const NavLink = ({ to, children }) => {
  const isInternal = to.startsWith("/");
  const isCurrent =
    typeof window !== "undefined" &&
    (window.location.pathname === to || window.location.pathname === `${to}/`);

  if (isInternal) {
    return (
      <>
        <li
          css={css`
            ${isCurrent &&
            "background-color: var(--color-red-400); border-radius: .25rem; color: var(--color-white);"}

            :hover {
            }
          `}
        >
          <Link to={to}>{children}</Link>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <a
            css={css`
              color: var(--color-teal-300);

              :hover {
                color: var(--color-teal-300);
              }
            `}
            href={to}
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        </li>
      </>
    );
  }
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
