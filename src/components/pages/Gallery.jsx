import ImageCard from "../ImageCard";
import szerelo from "../../assets/szerelo.jpeg";
import muhely1 from "../../assets/muhely-1.jpeg";
import muhely2 from "../../assets/muhely-2.jpeg";
import muhely3 from "../../assets/muhely-3.jpeg";
import muhely4 from "../../assets/muhely-4.jpeg";
import muhely5 from "../../assets/muhely-5.jpeg";
import motor1 from "../../assets/motor-1.jpeg";
import motor2 from "../../assets/motor-2.jpeg";
// import motor3 from '../../assets/motor-3.jpeg'
import motor4 from "../../assets/motor-4.jpeg";
import motor5 from "../../assets/motor-5.jpeg";
import motor7 from "../../assets/motor-7.jpeg";
import motor8 from "../../assets/motor-8.jpeg";
import motor9 from "../../assets/motor-9.jpeg";
import motor10 from "../../assets/motor-10.jpeg";
import motor11 from "../../assets/motor-11.jpeg";
import motor12 from "../../assets/motor-12.jpeg";
import motor13 from "../../assets/motor-13.jpeg";
import motor14 from "../../assets/motor-14.jpeg";
import motor15 from "../../assets/motor-15.jpeg";
import motor16 from "../../assets/motor-16.jpeg";
import motor17 from "../../assets/motor-17.jpeg";
import motor18 from "../../assets/motor-18.jpeg";
import motor19 from "../../assets/motor-19.jpeg";
import { useState } from "react";

function Gallery() {
  const [clickedImage, setClickedImage] = useState(null);

  const style = {
    height: "fit-content",
  };

  if (!clickedImage) {
    return (
      <div
        className="max-w-5xl pt-8 pb-80 sm:pt-0
      relative"
      >
        <div className="mb-4 w-full flex justify-center">
          <ImageCard
            image={szerelo}
            style={style}
            setClickedImage={setClickedImage}
          />
        </div>
        <h1 className="text-center text-xl">A Műhely</h1>

        <div className="p-2 flex flex-wrap flex-row items-center justify-center gap-3 -z-10">
          <ImageCard image={muhely1} setClickedImage={setClickedImage} />
          <ImageCard image={muhely2} setClickedImage={setClickedImage} />
          <ImageCard image={muhely3} setClickedImage={setClickedImage} />
          <ImageCard image={muhely5} setClickedImage={setClickedImage} />
          <ImageCard image={muhely4} setClickedImage={setClickedImage} />
        </div>

        <h1 className="text-center text-xl mt-4">Munkáim</h1>

        <div className="p-4 flex flex-wrap flex-row items-center justify-center gap-3 ">
          <ImageCard image={motor7} setClickedImage={setClickedImage} />
          <ImageCard image={motor11} setClickedImage={setClickedImage} />
          <ImageCard image={motor16} setClickedImage={setClickedImage} />
          <ImageCard image={motor1} setClickedImage={setClickedImage} />
          <ImageCard image={motor12} setClickedImage={setClickedImage} />
          <ImageCard image={motor4} setClickedImage={setClickedImage} />
          <ImageCard image={motor2} setClickedImage={setClickedImage} />
          <ImageCard image={motor5} setClickedImage={setClickedImage} />
          <ImageCard image={motor8} setClickedImage={setClickedImage} />
          <ImageCard image={motor9} setClickedImage={setClickedImage} />
          <ImageCard image={motor10} setClickedImage={setClickedImage} />
          <ImageCard image={motor13} setClickedImage={setClickedImage} />
          <ImageCard image={motor14} setClickedImage={setClickedImage} />
          <ImageCard image={motor15} setClickedImage={setClickedImage} />
          <ImageCard image={motor17} setClickedImage={setClickedImage} />
          <ImageCard image={motor18} setClickedImage={setClickedImage} />
          <ImageCard image={motor19} setClickedImage={setClickedImage} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="max-w-5xl flex flex-col items-center w-full pt-8 pb-80 px-4 sm:pt-0 hover:cursor-pointer
      relative"
      >
        <img
          src={clickedImage}
          onClick={() => setClickedImage(null)}
          alt=""
          className="sm:w-4/6 w-full rounded-md"
        />
        <p
          className="text-blue-400 hover:text-blue-800 hover:cursor-pointer"
          onClick={() => setClickedImage(null)}
        >
          {"<<"}Vissza
        </p>
      </div>
    );
  }
}

export default Gallery;
