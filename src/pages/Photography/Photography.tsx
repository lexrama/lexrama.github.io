// import FlickrCard from "../../components/FlickrCard";

import Gallery from "react-photo-gallery";

import styles from "./Photography.module.css";
// import { Blur } from "../../Effects";
import { Suspense } from "react";

const vertical = {
  width: 2,
  height: 3,
};
const horizontal = {
  width: 3,
  height: 2,
};

const photos = [
  {
    src: "../images/photography/portfolio_1.jpg",
    ...vertical,
  },
  {
    src: "../images/photography/portfolio_2.jpg",
    ...vertical,
  },
  {
    src: "../images/photography/portfolio_3.jpg",
    ...horizontal,
  },
  {
    src: "../images/photography/portfolio_4.jpg",
    ...horizontal,
  },
  {
    src: "../images/photography/portfolio_5.jpg",
    ...vertical,
  },
  {
    src: "../images/photography/portfolio_6.jpg",
    ...horizontal,
  },
  {
    src: "../images/photography/portfolio_7.jpg",
    ...horizontal,
  },
  {
    src: "../images/photography/portfolio_8.jpg",
    ...vertical,
  },
  {
    src: "../images/photography/portfolio_9.jpg",
    ...vertical,
  },
  {
    src: "../images/photography/portfolio_10.jpg",
    ...horizontal,
  },
  {
    src: "../images/photography/portfolio_11.jpg",
    ...vertical,
  },
  {
    src: "../images/photography/portfolio_12.jpg",
    ...horizontal,
  },
];

export const Photography = () => {
  return (
    <>
      <div className={styles.content}>
        <h1>Photography 📸</h1>
        <p>
          <a href="https://www.flickr.com/gp/133825690@N04/o1V00164Tp">
            click here
          </a>{" "}
          to see my full portfolio on Flickr
        </p>

        {/* <FlickrCard /> */}
      </div>
      <div
        className={styles.gallery}
        style={{
          width: "75%",
          alignItems: "center",
          margin: "auto",
          paddingBottom: "2%",
        }}
      >
        {/* <Blur> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery photos={photos} margin={4} />
        </Suspense>
        {/* </Blur> */}
      </div>
    </>
  );
};
