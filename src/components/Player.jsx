import ReactPlayer from "react-player";

export default function Player({ videoId }) {
  if (!videoId) return null;

  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      playing
      controls
      width="300px"
      height="170px"
    />
  );
}