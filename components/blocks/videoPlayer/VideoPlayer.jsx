"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videourl }) => {
  return <ReactPlayer url={videourl} playing={true} loop={true} />;
};

export default VideoPlayer;
