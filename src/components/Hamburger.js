import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/react";

const Hamburger = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      css={css`
        position: absolute;
        top: 30px;
        right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 550;

        &:focus {
          outline: none;
        }

        div {
          width: 2rem;
          height: 0.25rem;
          background: ${open
            ? `var(--color-neutrals-700)`
            : `var(--color-red-400)`};
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;

          .dark-mode & {
            background: var(--color-dark-700);
          }

          :first-child {
            transform: ${open ? "rotate(45deg)" : "rotate(0)"};
          }

          :nth-child(2) {
            opacity: ${open ? "0" : "1"};
            transform: ${open ? "translateX(20px)" : "translateX(0)"};
          }

          :nth-child(3) {
            transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
          }
        }
      `}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

Hamburger.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hamburger;
