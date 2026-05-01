import { useState } from "react";
import axios from "axios";
import useSpotify from "./hooks/useSpotify";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import Player from "./components/Player";

export default function App() {
  const { results, searchSongs } = useSpotify();
  const [videoId, setVideoId] = useState(null);

  const handleSelect = async (song) => {
    const query = `${song.name} ${song.artists[0].name}`;

    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
          q: query,
          part: "snippet",
          type: "video",
          maxResults: 1,
        },
      }
    );

    const video = res.data.items[0];
    setVideoId(video.id.videoId);
  };

  return (
    <div>
      <h1>Corvus Music</h1>

      <SearchBar onSearch={searchSongs} />
      <SongList songs={results} onSelect={handleSelect} />

      <Player videoId={videoId} />
    </div>
  );
}