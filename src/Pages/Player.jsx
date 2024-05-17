import React, { useRef } from "react";

export default function Player() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <video width="520" height="240" ref={videoRef} className="mb-4">
        <source src="/Videos/smartPark_demo.mp4" />
      </video>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePause}
        >
          Pause
        </button>
      </div>
    </div>
  );
}
