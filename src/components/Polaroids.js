import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/react";
import random from "random";
import { siteOptions } from "../utils/constants";

const VARIANTS = {
  FAN: "fan",
  ALBUM: "album",
};

const getRandomNumber = (range, idx = null) => {
  // let num = Math.floor(Math.random() * range) + 1;
  let num = 0;

  if (idx !== null) {
    num = random.int(range);
    num *= idx % 2 ? 1 : -1;
  } else {
    num = random.int(-Math.abs(range), range);
    // num *= Math.round(Math.random()) ? 1 : -1;
  }

  return num;
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
      @media screen and (max-width: ${siteOptions.layout.maxWidth}) {
        > :not(:nth-child(2)) {
          display: none;
        }
        > * {
          margin-right: 0;
        }
      }
    `,
    [VARIANTS.ALBUM]: css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      > * {
        position: relative;
        overflow: hidden;
        margin: 1em;
        background: #fff;
        padding: 1.5em 1.5em 6em 1.5em;
        box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
      }
      img {
        object-fit: cover;
        height: 26em;
        width: 26em;
      }
      @media screen and (max-width: ${siteOptions.layout.maxWidth}) {
        > :not(:nth-child(2)) {
          flex-direction: column;
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
      {images.map((img, idx) => (
        <div
          css={css`
            transform: scale(0.8, 0.8) rotate(${getRandomNumber(20, idx)}deg)
              translateY(${getRandomNumber(75)}px)
              translateX(${getRandomNumber(75)}px);
            @media screen and (max-width: ${siteOptions.layout.maxWidth}) {
              transform: scale(0.8, 0.8) rotate(${getRandomNumber(10)}deg);
            }
          `}
        >
          <img src={img.src} />
          {img.annotation && (
            <div
              css={css`
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, -20%);
                font-size: 1.75em;
                font-family: var(--polaroid-annotation-font);
              `}
              dangerouslySetInnerHTML={{
                __html: img.annotation,
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

Polaroids.VARIANT = VARIANTS;

Polaroids.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      annotation: PropTypes.string,
    })
  ).isRequired,
  variant: PropTypes.oneOf(Object.values(Polaroids.VARIANT)).isRequired,
  featuredImg: PropTypes.string,
  annotation: PropTypes.string,
};

export default Polaroids;
