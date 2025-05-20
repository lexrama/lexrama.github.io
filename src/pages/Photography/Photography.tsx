import { CommonPhotoAlbumProps, RowsPhotoAlbum } from "react-photo-album";

import styles from "./Photography.module.css";
import "react-photo-album/rows.css";
import { Suspense } from "react";

const vertical = {
  width: 2,
  height: 3,
};
const horizontal = {
  width: 3,
  height: 2,
};

const photos: CommonPhotoAlbumProps<{
  width: number;
  height: number;
  src: string;
}>["photos"] = [
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
  // {
  //   src: "../images/photography/portfolio_13.jpg",
  //   ...vertical,
  // },
  {
    src: "../images/photography/portfolio_14.jpg",
    ...horizontal,
  },
  {
    src: "../images/photography/portfolio_15.jpg",
    ...vertical,
  },
  {
    src: "../images/photography/portfolio_16.jpg",
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
    ...vertical,
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
    ...horizontal,
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
        <p>
          contact me at{" "}
          <a href="mailto:alexaramachandran@gmail.com">
            alexaramachandran@gmail.com
          </a>{" "}
          for any inquiries!
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
        <RowsPhotoAlbum
          photos={photos}
          render={{
            image(props, context) {
              console.log("props", props);
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
