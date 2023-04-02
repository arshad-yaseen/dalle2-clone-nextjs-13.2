"use client";

import { imagesAtom } from "@/atoms/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function Images() {
  const [imagesGlobalState, setImagesGlobalState] =
    useRecoilState<string[]>(imagesAtom);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(imagesGlobalState);
  }, [imagesGlobalState]);

  return (
    <div className="grid gap-2 grid-cols-1 z-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-28 ">
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
