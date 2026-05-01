import { useState } from "react";
import axios from "axios";

export default function useSpotify() {
  const [results, setResults] = useState([]);

  const getToken = async () => {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(
              `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
            ),
        },
      }
    );
    return res.data.access_token;
  };

  const searchSongs = async (query) => {
    const token = await getToken();

    const res = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: "track",
        limit: 10,
      },
    });

    setResults(res.data.tracks.items);
  };

  return { results, searchSongs };
}