import { CommonPhotoAlbumProps, RowsPhotoAlbum } from "react-photo-album";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Photography.module.css";
import "react-photo-album/rows.css";

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

// Spinner component
const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
    <p className={styles.loadingText}>Loading photos...</p>
  </div>
);

// Hook to preload images using Image objects
const useImagePreloader = (photos: { src: string }[]) => {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const totalCount = photos.length;
    const counted = new Set<string>();

    const markLoaded = (src: string) => {
      if (counted.has(src)) return; // Prevent double-counting
      counted.add(src);
      loadedCount++;
      if (loadedCount >= totalCount && isMounted) {
        setAllLoaded(true);
      }
    };

    photos.forEach((photo) => {
      const img = new Image();
      img.onload = () => markLoaded(photo.src);
      img.onerror = () => markLoaded(photo.src);
      img.src = photo.src;
    });

    return () => {
      isMounted = false;
    };
  }, [photos]);

  return allLoaded;
};

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
  const allLoaded = useImagePreloader(digitalPhotos);

  return (
    <>
      <PhotoHeader />
      {!allLoaded && <Spinner />}
      <div
        className={`${styles.gallery} ${
          allLoaded ? styles.fadeIn : styles.hidden
        }`}
        style={{
          width: "75%",
          alignItems: "center",
          margin: "auto",
          paddingBottom: "2%",
        }}
      >
        <RowsPhotoAlbum photos={digitalPhotos} />
      </div>
    </>
  );
};

export const FilmPage = () => {
  const allLoaded = useImagePreloader(filmPhotos);

  return (
    <>
      <PhotoHeader />
      {!allLoaded && <Spinner />}
      <div
        className={`${styles.gallery} ${
          allLoaded ? styles.fadeIn : styles.hidden
        }`}
        style={{
          width: "75%",
          alignItems: "center",
          margin: "auto",
          paddingBottom: "2%",
        }}
      >
        <RowsPhotoAlbum photos={filmPhotos} />
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
