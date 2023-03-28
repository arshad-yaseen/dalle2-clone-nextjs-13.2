import Image from "next/image";

function Images() {
  type ImageType = {
    url: string;
    name: string;
  };

  let image = {
    url: "https://images.unsplash.com/photo-1679842115390-8084bbb1d4a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
    name: "Image name",
  } as ImageType;

  return (
    <div className="grid gap-2 grid-cols-1 z-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-28 ">
      <div className="md:col-span-2 md:row-span-2 relative">
        <Image
          src={image.url}
          alt={image.name}
          width={800}
          height={800}
          className="hover:opacity-10 curs transition-opacity cursor-pointer duration-300 z-50 relative"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col p-5 z-10">
          <h1 className="font-regular">
            3D render of a cute tropical fish in an aquarium on a dark blue
            background, digital art
          </h1>
          <h1 className="font-regular absolute bottom-5 text-[#939292]">
            Click to try
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Images;
