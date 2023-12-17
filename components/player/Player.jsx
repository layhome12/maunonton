"use client";

import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "@/assets/css/components/player.css";
import { useRef } from "react";

const Player = () => {
  const plyrRef = useRef();

  const handleBackward = (e) => {
    e.preventDefault();

    const skipDuration = 10;
    const current = plyrRef.current.plyr.currentTime;
    if (current <= 0) return;

    plyrRef.current.plyr.currentTime -=
      current <= skipDuration ? current : skipDuration;
  };

  const handleForward = (e) => {
    e.preventDefault();

    const skipDuration = 10;
    const duration = plyrRef.current.plyr.duration;
    const current = plyrRef.current.plyr.currentTime;
    if (current >= duration) return;

    const timeSkip =
      duration - current <= skipDuration ? duration - current : skipDuration;
    plyrRef.current.plyr.currentTime += timeSkip;
  };

  return (
    <div className="player-container relative">
      <Plyr
        ref={plyrRef}
        source={{
          type: "video",
          sources: [
            {
              src: "/video/sample.mp4",
              provider: "html5",
            },
          ],
        }}
        options={{
          hideControls: true,
          fullscreen: {
            container: ".player-container",
          },
          autoplay: false,
        }}
      />
      <button
        className="backward-button w-[70px]"
        onDoubleClick={handleBackward}
      ></button>
      <button
        className="forward-button w-[70px]"
        onDoubleClick={handleForward}
      ></button>
    </div>
  );
};

export default Player;
