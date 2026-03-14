import { RowsPhotoAlbum } from "react-photo-album";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "react-photo-album/rows.css";
import { FadeIn } from "../Effects";

interface Photo {
  src: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
}

interface LightboxSlide {
  src: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
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
  basePath: string,
  title?: string,
  description?: string,
): Photo => ({
  src: `${basePath}/${filename}`,
  ...PHOTO_DIMENSIONS[orientation],
  ...(title && { title }),
  ...(description && { description }),
});

const convertToLightboxSlides = (photos: Photo[]): LightboxSlide[] =>
  photos.map((photo) => ({
    src: photo.src,
    ...(photo.width === 2
      ? LIGHTBOX_DIMENSIONS.vertical
      : LIGHTBOX_DIMENSIONS.horizontal),
    ...(photo.title && { title: photo.title }),
    ...(photo.description && { description: photo.description }),
  }));

const digitalPhotoList: Array<[string, PhotoOrientation, string?, string?]> = [
  ["portfolio_1.jpg", "vertical", "astoria, queens, nyc"],
  ["portfolio_2.jpg", "vertical", "astoria, queens, nyc"],
  ["portfolio_3.jpg", "horizontal", "metropolitan museum of art, nyc"],
  ["portfolio_14.jpg", "horizontal", "greenwich, ct"],
  ["portfolio_15.jpg", "vertical", "central park, nyc"],
  ["portfolio_16.jpg", "horizontal", "central park, nyc"],
  ["portfolio_4.jpg", "horizontal", "orlando, fl"],
  ["portfolio_5.jpg", "vertical", "amherst, ma"],
  ["portfolio_6.jpg", "horizontal", "amherst, ma"],
  ["portfolio_7.jpg", "vertical", "stanford, ca"],
  ["portfolio_8.jpg", "vertical", "stanford, ca"],
  ["portfolio_9.jpg", "vertical", "stanford, ca"],
  ["portfolio_10.jpg", "horizontal", "warwick, ny"],
  ["portfolio_11.jpg", "horizontal", "stanford, ca"],
  ["portfolio_12.jpg", "horizontal", "stanford, ca"],
];

const filmPhotoList: Array<[string, PhotoOrientation, string?, string?]> = [
  ["2.jpeg", "horizontal", "central park, nyc"],
  ["3.jpeg", "horizontal", "williamsburg, nyc"],
  ["4.png", "horizontal", "valletta, malta"],
  ["5.png", "horizontal", "marsaxlokk, malta"],
  ["6.png", "horizontal", "marsaxlokk, malta"],
  ["7.jpeg", "horizontal", "williamsburg, nyc"],
  ["8.png", "horizontal", "harrison, nj"],
  ["9.jpeg", "horizontal", "manhattan, nyc"],
  ["10.jpeg", "horizontal", "williamsburg, nyc"],
];

const digitalPhotos: Photo[] = digitalPhotoList.map(
  ([filename, orientation, title, description]) =>
    createPhoto(filename, orientation, IMAGE_PATHS.digital, title, description),
);

const filmPhotos: Photo[] = filmPhotoList.map(
  ([filename, orientation, title, description]) =>
    createPhoto(filename, orientation, IMAGE_PATHS.film, title, description),
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
  <div className="flex flex-col items-center justify-center py-20 px-5 gap-4">
    <div className="w-10 h-10 border-[3px] border-slate-200 dark:border-slate-700 border-t-violet-500 rounded-full animate-spin" />
    <p className="text-sm text-slate-500 m-0">Loading photos...</p>
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
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <Link
          to="/photos"
          className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 hover:underline no-underline"
        >
          ← Back to photography
        </Link>
      </div>

      {!allLoaded && <Spinner />}
      <div
        className={`max-w-6xl mx-auto px-6 pb-12 ${
          allLoaded
            ? "animate-fadeIn"
            : "fixed left-[-9999px] top-0 opacity-0 pointer-events-none"
        } [&_img]:cursor-pointer [&_img]:transition-all [&_img]:duration-300 [&_img]:rounded-lg [&_img]:outline-none [&_img:hover]:scale-[1.03] [&_img:hover]:opacity-90 [&_img:hover]:shadow-lg [&_img:focus]:outline-none [&_img:active]:outline-none`}
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
        plugins={[Captions]}
        captions={{ descriptionTextAlign: "center" }}
        styles={{
          captionsTitleContainer: {
            top: "auto",
            bottom: 0,
          },
          captionsTitle: {
            textTransform: "lowercase",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            fontSize: "1rem",
            fontWeight: "normal",
            fontFamily: "Inter, system-ui",
          },
          captionsDescription: {
            textTransform: "lowercase",
          },
        }}
      />
    </>
  );
};

export const DigitalPage = () => <PhotoGalleryView photos={digitalPhotos} />;

export const FilmPage = () => <PhotoGalleryView photos={filmPhotos} />;

export const Photography = () => (
  <div className="max-w-6xl mx-auto px-6 py-12">
    <FadeIn>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight m-0">
          Photography
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg mt-3 m-0">
          <a
            href="https://www.flickr.com/gp/133825690@N04/o1V00164Tp"
            className="text-violet-600 dark:text-violet-400 hover:underline no-underline"
            target="_blank"
            rel="noreferrer"
          >
            Full portfolio on Flickr →
          </a>
        </p>
      </div>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FadeIn delay={0.1}>
        <Link
          to="/photos/digital"
          className="group relative overflow-hidden rounded-2xl aspect-[4/3] block no-underline"
        >
          <img
            src="../images/photography/digital/portfolio_10.jpg"
            alt="Digital photography"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-white text-3xl font-bold m-0">Digital</h2>
            <p className="text-white/60 text-sm mt-1 m-0 group-hover:text-white/80 transition-colors">
              Explore collection →
            </p>
          </div>
        </Link>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Link
          to="/photos/film"
          className="group relative overflow-hidden rounded-2xl aspect-[4/3] block no-underline"
        >
          <img
            src="../images/photography/film/2.jpeg"
            alt="Film photography"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-white text-3xl font-bold m-0">Film</h2>
            <p className="text-white/60 text-sm mt-1 m-0 group-hover:text-white/80 transition-colors">
              Explore collection →
            </p>
          </div>
        </Link>
      </FadeIn>
    </div>

    <div className="mt-10 text-center">
      <p className="text-sm text-slate-500 m-0">
        Contact me at{" "}
        <a
          href="mailto:alexaramachandran@gmail.com"
          className="text-violet-600 dark:text-violet-400 hover:underline no-underline"
        >
          alexaramachandran@gmail.com
        </a>{" "}
        for inquiries
      </p>
    </div>
  </div>
);
