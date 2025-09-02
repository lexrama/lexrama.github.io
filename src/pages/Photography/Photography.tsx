import { CommonPhotoAlbumProps, RowsPhotoAlbum } from "react-photo-album";

import styles from "./Photography.module.css";
import "react-photo-album/rows.css";
import { Suspense } from "react";
import { Link } from "react-router-dom";

const vertical = {
  width: 2,
  height: 3,
};
const horizontal = {
  width: 3,
  height: 2,
};

const digitalURL = "../images/photography/digital";
const filmURL = "../images/photography/film";

const digitalPhotos: CommonPhotoAlbumProps<{
  width: number;
  height: number;
  src: string;
}>["photos"] = [
  {
    src: `${digitalURL}/portfolio_1.jpg`,
    ...vertical,
  },
  {
    src: `${digitalURL}/portfolio_2.jpg`,
    ...vertical,
  },
  {
    src: `${digitalURL}/portfolio_3.jpg`,
    ...horizontal,
  },
  // {
  //   src: "../images/photography/portfolio_13.jpg",
  //   ...vertical,
  // },
  {
    src: `${digitalURL}/portfolio_14.jpg`,
    ...horizontal,
  },
  {
    src: `${digitalURL}/portfolio_15.jpg`,
    ...vertical,
  },
  {
    src: `${digitalURL}/portfolio_16.jpg`,
    ...horizontal,
  },
  {
    src: `${digitalURL}/portfolio_4.jpg`,
    ...horizontal,
  },
  {
    src: `${digitalURL}/portfolio_5.jpg`,
    ...vertical,
  },
  {
    src: `${digitalURL}/portfolio_6.jpg`,
    ...horizontal,
  },

  {
    src: `${digitalURL}/portfolio_7.jpg`,
    ...vertical,
  },
  {
    src: `${digitalURL}/portfolio_8.jpg`,
    ...vertical,
  },
  {
    src: `${digitalURL}/portfolio_9.jpg`,
    ...vertical,
  },
  {
    src: `${digitalURL}/portfolio_10.jpg`,
    ...horizontal,
  },
  {
    src: `${digitalURL}/portfolio_11.jpg`,
    ...horizontal,
  },
  {
    src: `${digitalURL}/portfolio_12.jpg`,
    ...horizontal,
  },
];
const filmPhotos: CommonPhotoAlbumProps<{
  width: number;
  height: number;
  src: string;
}>["photos"] = [
  {
    src: `${filmURL}/2.jpeg`,
    ...horizontal,
  },
  {
    src: `${filmURL}/3.jpeg`,
    ...horizontal,
  },
  {
    src: `${filmURL}/4.png`,
    ...horizontal,
  },
  {
    src: `${filmURL}/5.png`,
    ...horizontal,
  },
  {
    src: `${filmURL}/6.png`,
    ...horizontal,
  },
  {
    src: `${filmURL}/7.jpeg`,
    ...horizontal,
  },
  {
    src: `${filmURL}/8.png`,
    ...horizontal,
  },
  {
    src: `${filmURL}/9.jpeg`,
    ...horizontal,
  },
  {
    src: `${filmURL}/10.jpeg`,
    ...horizontal,
  },
];

const PhotoHeader = () => {
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
        <p>
          contact me at{" "}
          <a href="mailto:alexaramachandran@gmail.com">
            alexaramachandran@gmail.com
          </a>{" "}
          for any inquiries!
        </p>
      </div>
    </>
  );
};

export const DigitalPage = () => {
  return (
    <>
      <PhotoHeader />
      <div
        className={styles.gallery}
        style={{
          width: "75%",
          alignItems: "center",
          margin: "auto",
          paddingBottom: "2%",
        }}
      >
        <RowsPhotoAlbum
          photos={digitalPhotos}
          render={{
            image(props, context) {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <img
                    {...props}
                    onLoad={(e) => console.log("loaded", e, props.src)}
                    alt={props["aria-label"]}
                  />
                </Suspense>
              );
            },
          }}
        />
      </div>
    </>
  );
};

export const FilmPage = () => {
  return (
    <>
      <PhotoHeader />
      <div
        className={styles.gallery}
        style={{
          width: "75%",
          alignItems: "center",
          margin: "auto",
          paddingBottom: "2%",
        }}
      >
        <RowsPhotoAlbum
          photos={filmPhotos}
          render={{
            image(props, context) {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <img
                    {...props}
                    onLoad={(e) => console.log("loaded", e, props.src)}
                    alt={props["aria-label"]}
                  />
                </Suspense>
              );
            },
          }}
        />
      </div>
    </>
  );
};

export const Photography = () => {
  return (
    <>
      <PhotoHeader />
      <div className={styles.links}>
        <Link to="/photos/digital">digital</Link>
        <Link to="/photos/film">film</Link>
      </div>
    </>
  );
};
