import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";
import PageTitle from "../components/PageTitle";

const ThingsToDoPage = () => {
  return (
    <>
      <SEO title="Brie & Clinton | The Band" />
      <MainLayout>
        <PageTitle title="Things to do" />

        <h2>Portland</h2>
        <div
          css={css`
            max-width: 600px;
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              width: 100%;
              max-width: 100%;
            }
          `}
        >
          <p>
            Portland is a foodie town and an outdoors-person's paradise. The
            city is chock full of eclectic restaurants and bars, as well as a
            bajillion breweries, wineries, and cideries (even meaderies).
          </p>

          <p>
            And it's a short day trip to the mountains (Mt. Hood, Mt. Saint
            Helens), the Columbia River Gorge, or the coast.
          </p>

          <p>
            Here's a map of some of our favorite spots in / near Portland you
            should check out.
          </p>

          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1eHAPbxhehGH9bMpQP7r9Rz8DUblRqXkb"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
          />

          <h2
            css={css`
              margin-top: 2em;
            `}
          >
            Willamette Valley / Wine Country
          </h2>
          <p>
            Willamette Valley is a fairly young wine producing region, first
            established in the early 1970s. It's best known for its world class
            Pinot Noir. Other varietals of growing acclaim include pinot gris,
            chardonnay, and riesling.
          </p>
          <p>
            Sure, we've been to our fair share of winereis/vineyards in{" "}
            <a href="https://www.willamettewines.com/">Willamette Valley</a>
            over the years. But with about 700 wineries in the Willammette
            Valley, we've barely scratched the surface. Here's a map of some of
            our favorite places we've been / know about. But there are obviously
            many more we don't know about.{" "}
            <a href="https://www.yelp.com/search?find_desc=wineries&find_loc=Willamette+Valley%2C+OR&l=g%3A-122.6090088895262%2C45.472211479760915%2C-123.4934083035887%2C45.044460725305925">
              Yelp
            </a>{" "}
            and Google are your friends. And the official Willamette Valley
            visitor's guide has a{" "}
            <a href="https://www.willamettewines.com/wineries-and-vineyards/">
              searchable winery/vineyard list
            </a>
            , ideas for{" "}
            <a href="https://www.willamettewines.com/things-to-do/">
              things to do
            </a>
            , and what not.
          </p>
          <p>
            Note that many wineries/vineyards require making an appointment
            ahead of time, so be sure to call ahead / book online so you don't
            miss out!
          </p>

          <iframe
            src="https://www.google.com/maps/d/embed?mid=1m01rbByDY0ojoYX2FFEePQxeiKDiogIR"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
          />
        </div>
      </MainLayout>
    </>
  );
};

export default ThingsToDoPage;
