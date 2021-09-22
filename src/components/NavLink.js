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
        <Link
          css={css`
            padding: 0.5em 1em;
            color: var(--color-teal-400);
            ${isCurrent &&
            "background-color: var(--color-teal-100); border-radius: .25rem;"}

            .dark-mode & {
              color: var(--color-teal-300);
              ${isCurrent &&
              "background-color: var(--color-teal-700); border-radius: .25rem;"};
            }
            :hover {
              color: var(--color-teal-300);
            }
          `}
          to={to}
        >
          {children}
        </Link>
      </>
    );
  } else {
    return (
      <>
        <a
          css={css`
            padding: 0.5em 1em;
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
      </>
    );
  }
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
