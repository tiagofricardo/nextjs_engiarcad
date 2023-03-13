import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";

const PhotoGallery = ({ projectData, imagesData }) => {
  const [index, setIndex] = useState(-1);

  const photos = imagesData.map((image, index) => {
    return {
      title: `${projectData.id}-photo${index}`,
      src: image.url,
      width: image.width,
      height: image.height,
      key: index + 1,
      alt: `${projectData.id}-photo${index}`,
    };
  });

  const slides = photos.map(({ src, key, width, height }) => ({
    src,
    key,
    width,
    height,
  }));

  function NextJsImage(image, offset, rect) {
    const width = Math.round(
      Math.min(rect.width, (rect.height / image.height) * image.width)
    );
    const height = Math.round(
      Math.min(rect.height, (rect.width / image.width) * image.height)
    );

    return (
      <div style={{ position: "relative", width, height }}>
        <Image
          fill
          alt={projectData.id + "-" + image.key}
          key={image.key}
          src={image}
          loading="lazy"
          draggable={false}
          sizes={
            typeof window !== "undefined"
              ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
              : `${width}px`
          }
        />
      </div>
    );
  }

  return (
    <>
      <PhotoAlbum
        layout="columns"
        photos={photos}
        targetRowHeight={200}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        animation={{ fade: 800 }}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};

export default PhotoGallery;
