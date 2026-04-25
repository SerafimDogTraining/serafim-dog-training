'use client'

import { useEffect, useRef, useState } from "react";

export default function CommunityVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    function handleInteraction() {
      if (soundActive) return;
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.volume = 1;
      }
      setSoundActive(true);
    }

    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [soundActive]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full rounded-sm"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src="/videos/community.mp4" type="video/mp4" />
      </video>

      {/* Tap-to-unmute badge */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-medium pointer-events-none select-none"
        style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
          opacity: soundActive ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        <span>🔊</span>
        <span>Tap for sound</span>
      </div>
    </div>
  );
}
