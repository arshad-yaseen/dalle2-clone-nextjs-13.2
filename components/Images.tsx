"use client";

import { imagesAtom, loadingAtom } from "@/atoms/atom";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getRandomImages } from "@/lib/helpers";

function Images() {
  const [imagesGlobalState, setImagesGlobalState] =
    useRecoilState<string[]>(imagesAtom);
  const [images, setImages] = useState<string[]>([]);
  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    let randomImages = getRandomImages(20);
    setRandomImages(randomImages);
  }, []);

  const [loadingGlobalState, setLoadingGlobalState] =
    useRecoilState<boolean>(loadingAtom);

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setImages(imagesGlobalState);
  }, [imagesGlobalState]);
  useEffect(() => {
    setLoading(loadingGlobalState);
  }, [loadingGlobalState]);

  return (
    <div className="grid gap-2 grid-cols-1 z-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-28 ">
      {
        // If loading is true, show the loading animation
        loading && (
          <div className="relative  md:col-span-2 md:row-span-2">
            <div className="animate-pulse bg-gray-300 md:h-full  w-full h-[300px]"></div>
          </div>
        )
      }

      {images.map((image, index) => (
        <a
          href={image}
          target="_blank"
          key={index}
          className={`${
            index === 0 ? "md:col-span-2 md:row-span-2" : ""
          } relative`}
        >
          <Image
            src={image}
            onLoad={() => {
              setLoading(false);
              setLoadingGlobalState(false);
            }}
            priority={true}
            alt={`Generated image ${index + 1}`}
            width={800}
            height={800}
            className="hover:opacity-80 curs transition-opacity cursor-pointer duration-300 z-50 relative"
          />
        </a>
      ))}
      {randomImages.map((image, index) => (
        <a
          href={image}
          target="_blank"
          key={index}
          className={`${
            images.length === 0 && index === 0 && !loading
              ? "md:col-span-2 md:row-span-2"
              : ""
          } relative`}
        >
          <Image
            src={image}
            priority={true}
            alt={`Generated image ${index + 1}`}
            width={800}
            height={800}
            className="hover:opacity-80 curs transition-opacity cursor-pointer duration-300 z-50 relative"
          />
        </a>
      ))}
    </div>
  );
}

export default Images;
