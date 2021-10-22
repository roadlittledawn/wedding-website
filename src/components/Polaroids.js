import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";

const VARIANTS = {
  FAN: "fan",
};

const styles = {
  variant: {
    [VARIANTS.FAN]: css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      > * {
        position: relative;
        overflow: hidden;
        margin-right: -6em;
        background: #fff;
        padding: 1.5em 1.5em 6em 1.5em;
        box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
      }
      > :first-child {
        transform: scale(0.8, 0.8) rotate(-10deg) translateY(75px);
        z-index: 10;
      }
      > :nth-child(2) {
        box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
        transform: scale(0.8, 0.8);
        z-index: 0;
      }
      > :last-child {
        transform: scale(0.8, 0.8) rotate(10deg) translateY(75px);
        z-index: 10;
      }
      img {
        object-fit: cover;
        height: 26em;
        width: 26em;
      }
      @media screen and (max-width: ${siteOptions.layout.mobileBreakpoint}) {
        > :not(:nth-child(2)) {
          display: none;
        }
        > * {
          margin-right: 0;
        }
      }
    `,
  },
};

const Polaroids = ({ images, featuredImg, variant }) => {
  return (
    <div
      css={css`
        ${styles.variant[variant]}
      `}
    >
      {images.map((img) => (
        <div>
          <img src={img} />
        </div>
      ))}
    </div>
  );
};

Polaroids.VARIANT = VARIANTS;

Polaroids.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.oneOf(Object.values(Polaroids.VARIANT)).isRequired,
  featuredImg: PropTypes.string,
};

export default Polaroids;
