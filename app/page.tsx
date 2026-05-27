"use client"; // Tells Next.js this page handles real-time user events

import React, { useState, useRef } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { mixtapeTracks } from "./tracks";

export default function Home() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null); // Keeps track of the invisible video frame

  const currentTrack = mixtapeTracks[trackIndex];

  // Configures the YouTube video setup parameters
  const videoOptions: YouTubeProps['opts'] = {
    height: "0",
    width: "0", // Hidden sizes so it functions purely as background audio
    playerVars: {
      autoplay: 0,
      controls: 0, // Hides native YouTube slider/pause controls
      modestbranding: 1,
    },
  };

  // Triggers when the YouTube frame initializes successfully
  const onPlayerReady = (event: { target: any }) => {
    playerRef.current = event.target;
  };

  // Automatically plays the next song when the current one runs out of time
  const onPlayerEnd = () => {
    if (trackIndex < mixtapeTracks.length - 1) {
      setTrackIndex((prev) => prev + 1);
    } else {
      setTrackIndex(0); // Loops back around to Track 1 if playlist finishes
      setIsPlaying(false);
    }
  };

  // Handles clicking your custom Play/Pause button
  const togglePlayback = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  // Jumps to the next song in your array
  const playNextTrack = () => {
    if (trackIndex < mixtapeTracks.length - 1) {
      setTrackIndex((prev) => prev + 1);
    } else {
      setTrackIndex(0); // Loops back to the first track if at the end
    }
    setIsPlaying(true);
  };

  // Steps back to the previous song
  const playPrevTrack = () => {
    if (trackIndex > 0) {
      setTrackIndex((prev) => prev - 1);
    } else {
      setTrackIndex(mixtapeTracks.length - 1); // Loops to the final track if at the beginning
    }
    setIsPlaying(true);
  };

  return (
    <main className="min-h-screen bg-cyberDark flex flex-col items-center justify-center p-4 select-none selection:bg-neonPink">
      
      {/* INVISIBLE PLAYER LAYER */}
      <div className="hidden absolute pointer-events-none">
        <YouTube
          videoId={currentTrack.youtubeId}
          opts={videoOptions}
          onReady={onPlayerReady}
          onEnd={onPlayerEnd}
        />
      </div>

      {/* ================================================================= */}
      {/* 8-BIT CASSETTE SYSTEM BODY */}
      {/* ================================================================= */}
      <div className="w-full max-w-sm bg-cyberTape border-4 border-black shadow-pixel-violet p-4 relative mb-6">
        
        {/* Y2K Aesthetic Header Sticker Label */}
        <div className="bg-gradient-to-r from-neonPink via-electricViolet to-cyberBlue p-[3px] border-2 border-black mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-cyberDark p-1.5 text-center text-[10px] text-cyberGreen uppercase tracking-widest border border-dashed border-cyberGreen">
            ★ MIXXTAPE VOL. 1 ★
          </div>
        </div>

        {/* Cassette Window & Spinning Reels */}
        <div className="bg-black border-2 border-black h-20 my-4 flex items-center justify-around relative overflow-hidden shadow-inner">
          
          {/* Left Kinetic Tape Reel */}
          <div 
            className={`w-10 h-10 border-4 border-dashed border-neonPink rounded-full flex items-center justify-center transition-transform ${
              isPlaying ? "animate-spin" : ""
            }`} 
            style={{ animationDuration: "4s" }}
          >
            <div className="w-4 h-4 bg-black border-2 border-cyberBlue rounded-full"></div>
          </div>

          {/* Center Informational Matrix Window */}
          <div className="w-20 h-8 bg-[#15112e] border-2 border-electricViolet flex flex-col items-center justify-center text-[8px] text-neonPink">
            <span className="tracking-widest animate-pulse">
              {isPlaying ? "► RUN" : "⏸ PAUSE"}
            </span>
            <span className="text-cyberBlue text-[7px] mt-0.5">
              SIDE A
            </span>
          </div>

          {/* Right Kinetic Tape Reel */}
          <div 
            className={`w-10 h-10 border-4 border-dashed border-neonPink rounded-full flex items-center justify-center transition-transform ${
              isPlaying ? "animate-spin" : ""
            }`} 
            style={{ animationDuration: "4s" }}
          >
            <div className="w-4 h-4 bg-black border-2 border-cyberBlue rounded-full"></div>
          </div>
          
        </div>

        {/* 8-Bit Tactical Control Deck */}
        <div className="grid grid-cols-3 gap-3 text-center mt-6">
          <button 
            onClick={playPrevTrack}
            className="bg-electricViolet border-b-4 border-r-4 border-black text-white text-[10px] font-bold uppercase p-2 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all"
          >
            ◄◄ PREV
          </button>
          
          <button 
            onClick={togglePlayback}
            className={`${
              isPlaying ? "bg-neonPink" : "bg-cyberBlue"
            } border-b-4 border-r-4 border-black text-black text-[10px] font-bold uppercase p-2 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all`}
          >
            {isPlaying ? "PAUSE" : "PLAY ►"}
          </button>

          <button 
            onClick={playNextTrack}
            className="bg-electricViolet border-b-4 border-r-4 border-black text-white text-[10px] font-bold uppercase p-2 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all"
          >
            NEXT ►►
          </button>
        </div>

      </div>

      {/* ================================================================= */}
      {/* DIGITAL LINER NOTES TERMINAL (Card 9) */}
      {/* ================================================================= */}
      <div className="w-full max-w-sm border-2 border-cyberBlue bg-black/60 p-4 shadow-pixel-pink backdrop-blur-sm">
        <div className="text-neonPink text-[9px] uppercase tracking-wider mb-1">
          Now Spinning:
        </div>
        <div className="text-cyberGreen text-sm uppercase tracking-wide truncate mb-3">
          {trackIndex + 1}. {currentTrack.title}
        </div>
        
        {/* Dynamic Personal Letter Space */}
        <div className="text-[11px] text-gray-300 leading-relaxed font-sans border-t border-dashed border-electricViolet/40 pt-2.5">
          {currentTrack.note}
        </div>
      </div>

    </main>
  );
}