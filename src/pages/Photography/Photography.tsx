import { RowsPhotoAlbum } from "react-photo-album";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";

import styles from "./Photography.module.css";

interface Photo {
  src: string;
  width: number;
  height: number;
}

interface LightboxSlide {
  src: string;
  width: number;
  height: number;
}

type PhotoOrientation = "vertical" | "horizontal";

const PHOTO_DIMENSIONS = {
  vertical: { width: 2, height: 3 },
  horizontal: { width: 3, height: 2 },
} as const;

const LIGHTBOX_DIMENSIONS = {
  vertical: { width: 1600, height: 2400 },
  horizontal: { width: 2400, height: 1600 },
} as const;

const IMAGE_PATHS = {
  digital: "../images/photography/digital",
  film: "../images/photography/film",
} as const;

const createPhoto = (
  filename: string,
  orientation: PhotoOrientation,
  basePath: string
): Photo => ({
  src: `${basePath}/${filename}`,
  ...PHOTO_DIMENSIONS[orientation],
});

const convertToLightboxSlides = (photos: Photo[]): LightboxSlide[] =>
  photos.map((photo) => ({
    src: photo.src,
    ...(photo.width === 2
      ? LIGHTBOX_DIMENSIONS.vertical
      : LIGHTBOX_DIMENSIONS.horizontal),
  }));

const digitalPhotoList: Array<[string, PhotoOrientation]> = [
  ["portfolio_1.jpg", "vertical"],
  ["portfolio_2.jpg", "vertical"],
  ["portfolio_3.jpg", "horizontal"],
  ["portfolio_14.jpg", "horizontal"],
  ["portfolio_15.jpg", "vertical"],
  ["portfolio_16.jpg", "horizontal"],
  ["portfolio_4.jpg", "horizontal"],
  ["portfolio_5.jpg", "vertical"],
  ["portfolio_6.jpg", "horizontal"],
  ["portfolio_7.jpg", "vertical"],
  ["portfolio_8.jpg", "vertical"],
  ["portfolio_9.jpg", "vertical"],
  ["portfolio_10.jpg", "horizontal"],
  ["portfolio_11.jpg", "horizontal"],
  ["portfolio_12.jpg", "horizontal"],
];

const filmPhotoList: Array<[string, PhotoOrientation]> = [
  ["2.jpeg", "horizontal"],
  ["3.jpeg", "horizontal"],
  ["4.png", "horizontal"],
  ["5.png", "horizontal"],
  ["6.png", "horizontal"],
  ["7.jpeg", "horizontal"],
  ["8.png", "horizontal"],
  ["9.jpeg", "horizontal"],
  ["10.jpeg", "horizontal"],
];

const digitalPhotos: Photo[] = digitalPhotoList.map(([filename, orientation]) =>
  createPhoto(filename, orientation, IMAGE_PATHS.digital)
);

const filmPhotos: Photo[] = filmPhotoList.map(([filename, orientation]) =>
  createPhoto(filename, orientation, IMAGE_PATHS.film)
);

const useImagePreloader = (photos: Photo[]) => {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const counted = new Set<string>();
    let loadedCount = 0;
    const totalCount = photos.length;

    const markLoaded = (src: string) => {
      if (counted.has(src)) return;
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

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
    <p className={styles.loadingText}>Loading photos...</p>
  </div>
);

const PhotoHeader = () => (
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
);

interface PhotoGalleryViewProps {
  photos: Photo[];
}

const PhotoGalleryView = ({ photos }: PhotoGalleryViewProps) => {
  const allLoaded = useImagePreloader(photos);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const lightboxSlides = convertToLightboxSlides(photos);

  return (
    <>
      <PhotoHeader />
      {!allLoaded && <Spinner />}
      <div
        className={`${styles.gallery} ${
          allLoaded ? styles.fadeIn : styles.hidden
        }`}
      >
        <RowsPhotoAlbum
          photos={photos}
          onClick={({ index }) => setLightboxIndex(index)}
        />
      </div>

      <Lightbox
        index={lightboxIndex}
        slides={lightboxSlides}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        carousel={{ finite: false }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
};

export const DigitalPage = () => <PhotoGalleryView photos={digitalPhotos} />;

export const FilmPage = () => <PhotoGalleryView photos={filmPhotos} />;

export const Photography = () => (
  <>
    <PhotoHeader />
    <div className={styles.links}>
      <Link to="/photos/digital">digital</Link>
      <Link to="/photos/film">film</Link>
    </div>
  </>
);
